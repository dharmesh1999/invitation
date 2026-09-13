import { motion } from 'framer-motion'
import { weddingData } from '../data/weddingData'

export function Invitation() {
  return (
    <section id="invitation" className="section-pad motif-bg relative overflow-hidden bg-ivory text-center">
      <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .8 }} className="relative z-10 mx-auto max-w-3xl border border-gold/50 px-5 py-14 sm:px-12 sm:py-20">
        <div className="corner corner-tl"/><div className="corner corner-tr"/><div className="corner corner-bl"/><div className="corner corner-br"/>
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 text-4xl text-maroon" aria-label="Lord Ganesh blessing motif">ॐ</div>
        <p className="font-display text-lg italic text-maroon">Shree Ganeshaya Namah</p>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-brown/70">Together with the blessings of their families</p>
        <div className="mt-4 space-y-1 font-display text-xl text-brown"><p>{weddingData.families.groom}</p><p className="text-sm text-gold">&amp;</p><p>{weddingData.families.bride}</p></div>
        <p className="eyebrow mt-10 text-maroon">Joyfully invite you to celebrate</p>
        <div className="mt-7 font-display text-[clamp(3rem,10vw,6rem)] italic leading-[.9] text-maroon">
          {weddingData.couple.groom}<span className="my-3 block font-sans text-sm not-italic tracking-[.3em] text-gold">AND</span>{weddingData.couple.bride}
        </div>
        <p className="mt-9 text-sm tracking-[.24em] text-brown/75">{weddingData.displayDate}</p>
      </motion.div>
    </section>
  )
}
