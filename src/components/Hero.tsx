import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { weddingData } from '../data/weddingData'

export function Hero() {
  const section = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, .7], [1, 1.45])
  const leftX = useTransform(scrollYProgress, [.1, .82], ['0%', '-46%'])
  const rightX = useTransform(scrollYProgress, [.1, .82], ['0%', '46%'])
  const templeOpacity = useTransform(scrollYProgress, [.7, 1], [1, 0])
  const copyOpacity = useTransform(scrollYProgress, [0, .32], [1, 0])
  const glowOpacity = useTransform(scrollYProgress, [.08, .7, 1], [0, .9, 0])

  const still = reduceMotion ? { scale: 1, x: 0, opacity: 1 } : undefined

  return (
    <section ref={section} id="home" className="hero relative isolate flex min-h-[100svh] overflow-hidden bg-[#74c9ef] text-white">
      <div className="cloud cloud-one" /><div className="cloud cloud-two" /><div className="cloud cloud-three" />
      <motion.div style={reduceMotion ? undefined : { opacity: copyOpacity }} className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pt-[12svh] text-center">
        <p className="eyebrow text-white/90">A celebration of love</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(3.3rem,10vw,7.4rem)] italic leading-[.9] tracking-[-.035em] drop-shadow-sm">
          {weddingData.couple.groom} <span className="block text-[.46em] not-italic leading-[1.1]">weds</span> {weddingData.couple.bride}
        </h1>
        <p className="mt-5 font-sans text-sm tracking-[.32em] sm:text-base">{weddingData.displayDate}</p>
      </motion.div>

      <motion.div style={reduceMotion ? undefined : { opacity: glowOpacity }} className="pointer-events-none absolute bottom-0 left-1/2 z-[5] h-[55%] w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,#fff5cb_0%,rgba(255,237,172,.55)_35%,transparent_72%)] blur-xl" />
      <motion.div style={reduceMotion ? undefined : { scale, opacity: templeOpacity }} className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-10 mx-auto h-[59svh] max-h-[780px] min-h-[390px] w-[min(95vw,920px)] origin-bottom">
        <motion.div style={still ?? { x: leftX }} className="absolute inset-0 overflow-hidden [clip-path:inset(0_50%_0_0)] will-change-transform">
          <img src="/temple-transparent.png" alt="" className="h-full w-full object-contain object-bottom" />
        </motion.div>
        <motion.div style={still ?? { x: rightX }} className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_0_50%)] will-change-transform">
          <img src="/temple-transparent.png" alt="Colorful South Indian temple gateway" className="h-full w-full object-contain object-bottom" />
        </motion.div>
      </motion.div>

      <motion.a style={reduceMotion ? undefined : { opacity: copyOpacity }} href="#invitation" className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] uppercase tracking-[.25em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" aria-label="Scroll to explore the invitation">
        Scroll to explore <ChevronDown size={17} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
