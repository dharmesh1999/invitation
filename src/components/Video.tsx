import { SectionHeading } from './SectionHeading'
import { weddingData } from '../data/weddingData'

export function Video() {
  return <section className="section-pad bg-ivory"><div className="mx-auto max-w-5xl"><SectionHeading eyebrow="A glimpse of us" title="Before Forever"/><div className="mt-12 border border-gold/50 bg-maroon p-2 sm:p-3"><div className="aspect-video"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${weddingData.youtubeId}`} title="Dharmesh and Krutika pre-wedding film" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div></div></div></section>
}
