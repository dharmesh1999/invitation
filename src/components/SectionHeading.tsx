import { motion } from 'framer-motion'

type Props = { eyebrow: string; title: string; light?: boolean; className?: string }

export function SectionHeading({ eyebrow, title, light = false, className = '' }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .75 }} className={`text-center ${className}`}>
      <p className={`eyebrow ${light ? 'text-[#d4bd8b]' : 'text-maroon'}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl leading-tight sm:text-5xl ${light ? 'text-ivory' : 'text-brown'}`}>{title}</h2>
      <div className="ornament" aria-hidden="true"><span>✦</span></div>
    </motion.div>
  )
}
