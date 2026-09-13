import { motion } from 'framer-motion'
import { weddingData } from '../data/weddingData'
import { Carousel } from './Carousel'

export function Couple() {
  return (
    <section id="our-story" className="section-pad motif-bg bg-ivory"><div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
      <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p className="eyebrow text-maroon">Our story</p><h2 className="mt-4 font-display text-4xl leading-tight text-brown sm:text-6xl">{weddingData.story.title}</h2><div className="my-7 h-px w-20 bg-gold"/><p className="max-w-lg text-base leading-8 text-brown/70">{weddingData.story.body}</p><p className="mt-8 font-display text-2xl italic text-maroon">Dharmesh &amp; Krutika</p></motion.div>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}><Carousel photos={weddingData.photos}/></motion.div>
    </div></section>
  )
}
