import { motion } from 'framer-motion'
import { Flower2, Music2, Gem } from 'lucide-react'
import { weddingData, type Celebration } from '../data/weddingData'
import { SectionHeading } from './SectionHeading'

const icons = { henna: Flower2, music: Music2, rings: Gem }

function FunctionCard({ event, index }: { event: Celebration; index: number }) {
  const Icon = icons[event.icon]
  return (
    <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .65, delay: index * .12 }} className="group border-t border-gold/55 py-8 sm:border-l sm:border-t-0 sm:px-8 sm:py-4 first:sm:border-l-0">
      <Icon className="mb-7 text-gold" size={28} strokeWidth={1.25}/>
      <p className="text-[10px] uppercase tracking-[.26em] text-gold">{event.eyebrow}</p>
      <h3 className="mt-3 font-display text-3xl text-ivory">{event.title}</h3>
      <p className="mt-6 text-sm font-medium tracking-[.08em] text-[#f5dfb3]">{event.date}</p>
      <p className="mt-2 text-sm text-ivory/80">{event.time}</p>
      <p className="mt-5 text-sm leading-7 text-ivory/60">{event.note}</p>
    </motion.article>
  )
}

export function Functions() {
  return <section id="celebrations" className="section-pad bg-maroon text-ivory"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Three days of joy" title="The Celebrations" light/><div className="mt-16 grid sm:grid-cols-3">{weddingData.celebrations.map((event, index) => <FunctionCard key={event.title} event={event} index={index}/>)}</div></div></section>
}
