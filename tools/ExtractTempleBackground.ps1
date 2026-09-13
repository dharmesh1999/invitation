param([Parameter(Mandatory=$true)][string]$InputPath, [Parameter(Mandatory=$true)][string]$OutputPath)

Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @'
using System;
using System.Collections;
using System.Drawing;
using System.Drawing.Imaging;

public static class TempleCutout {
  public static void Extract(string input, string output) {
    using (var source = new Bitmap(input))
    using (var image = new Bitmap(source.Width, source.Height, PixelFormat.Format32bppArgb)) {
      using (var g = Graphics.FromImage(image)) g.DrawImageUnscaled(source, 0, 0);
      int w = image.Width, h = image.Height, total = w * h;
      var rect = new Rectangle(0, 0, w, h);
      var bits = image.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
      int stride = bits.Stride;
      byte[] pixels = new byte[stride * h];
      System.Runtime.InteropServices.Marshal.Copy(bits.Scan0, pixels, 0, pixels.Length);
      var seen = new BitArray(total);
      int[] queue = new int[total]; int head = 0, tail = 0;
      Action<int> add = i => { if (!seen[i]) { seen[i] = true; queue[tail++] = i; } };
      for (int x = 0; x < w; x++) { add(x); add((h - 1) * w + x); }
      for (int y = 0; y < h; y++) { add(y * w); add(y * w + w - 1); }
      while (head < tail) {
        int i = queue[head++], x = i % w, y = i / w, p = y * stride + x * 4;
        int max = Math.Max(pixels[p], Math.Max(pixels[p + 1], pixels[p + 2]));
        int min = Math.Min(pixels[p], Math.Min(pixels[p + 1], pixels[p + 2]));
        if (max > 70 || max - min > 38) continue;
        pixels[p + 3] = 0;
        if (x > 0) add(i - 1); if (x + 1 < w) add(i + 1);
        if (y > 0) add(i - w); if (y + 1 < h) add(i + w);
      }
      System.Runtime.InteropServices.Marshal.Copy(pixels, 0, bits.Scan0, pixels.Length);
      image.UnlockBits(bits);
      image.Save(output, ImageFormat.Png);
    }
  }
}
'@

[TempleCutout]::Extract($InputPath, $OutputPath)
