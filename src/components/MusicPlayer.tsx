import { Music, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  useEffect(() => () => { audioRef.current?.pause() }, [])
  async function toggle() {
    if (!audioRef.current) { audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_2b4a2ce008.mp3?filename=indian-music-with-sitar-tanpura-and-sarangi-7456.mp3'); audioRef.current.loop = true; audioRef.current.volume = .3 }
    if (playing) audioRef.current.pause(); else { try { await audioRef.current.play() } catch { return } }
    setPlaying(!playing)
  }
  return <button onClick={toggle} className="fixed bottom-4 right-4 z-50 flex items-center gap-2 border border-gold bg-maroon px-4 py-3 text-[10px] uppercase tracking-[.16em] text-ivory shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon" aria-label={playing ? 'Pause ambient wedding music' : 'Play ambient wedding music'}><Music size={14}/><span className="hidden sm:inline">Our melody</span>{playing ? <Pause size={13}/> : <Play size={13}/>}</button>
}
