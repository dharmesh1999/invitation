import { Instagram as InstagramIcon } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Instagram() {
  return <section className="border-y border-gold/35 bg-[#fff9ef] px-5 py-20 text-center"><InstagramIcon className="mx-auto text-maroon" strokeWidth={1.25}/><p className="eyebrow mt-5 text-maroon">Share the love</p><h2 className="mt-3 font-display text-[clamp(2.8rem,9vw,6rem)] italic text-brown">{weddingData.couple.hashtag}</h2><a href={weddingData.instagramUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block border-b border-gold pb-1 text-xs uppercase tracking-[.2em] text-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">See the celebration</a></section>
}
