import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

type Photo = { src: string; alt: string }
export function Carousel({ photos }: { photos: readonly Photo[] }) {
  const [active, setActive] = useState(0)
  const move = (step: number) => setActive(v => (v + step + photos.length) % photos.length)
  return (
    <div className="relative" role="region" aria-roledescription="carousel" aria-label="Couple photographs">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#eadfce] sm:aspect-[5/4]">
        <AnimatePresence mode="wait"><motion.img key={photos[active].src} src={photos[active].src} alt={photos[active].alt} loading="lazy" initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .6 }} className="absolute inset-0 h-full w-full object-cover"/></AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
        <p className="absolute bottom-5 left-6 text-xs tracking-[.2em] text-white">0{active + 1} / 0{photos.length}</p>
      </div>
      <div className="absolute bottom-3 right-3 flex gap-2">
        <button onClick={() => move(-1)} aria-label="Previous photograph" className="carousel-button"><ArrowLeft size={18}/></button>
        <button onClick={() => move(1)} aria-label="Next photograph" className="carousel-button"><ArrowRight size={18}/></button>
      </div>
    </div>
  )
}
