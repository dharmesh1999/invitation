import { Heart } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Footer() {
  return <footer className="motif-bg bg-ivory px-5 py-20 text-center"><div className="mx-auto max-w-3xl"><p className="font-display text-5xl italic text-maroon sm:text-7xl">With love</p><p className="mt-5 font-display text-3xl text-brown">{weddingData.couple.groom} &amp; {weddingData.couple.bride}</p><p className="mt-5 text-xs uppercase tracking-[.3em] text-gold">{weddingData.displayDate}</p><div className="ornament mt-8" aria-hidden="true"><Heart size={12} fill="currentColor"/></div><p className="mt-10 text-[10px] uppercase tracking-[.18em] text-brown/50">Made with love for our favourite people</p></div></footer>
}
