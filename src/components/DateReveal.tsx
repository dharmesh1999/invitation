import { motion } from 'framer-motion'
import { CalendarHeart, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { weddingData } from '../data/weddingData'

export function DateReveal() {
  const [revealed, setRevealed] = useState(false)
  return (
    <section className="section-pad bg-[#fff9ef] text-center">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-maroon">Save our date</p>
        <button onClick={() => setRevealed(true)} aria-expanded={revealed} className="group relative mt-8 min-h-64 w-full overflow-hidden border border-gold bg-ivory px-5 py-12 text-maroon shadow-[0_18px_50px_rgba(66,19,30,.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon">
          <motion.div animate={revealed ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }} className="absolute inset-0 flex flex-col items-center justify-center bg-maroon text-ivory">
            <CalendarHeart size={34} strokeWidth={1.25}/><span className="mt-5 font-display text-3xl">Reveal the Date</span><span className="mt-2 text-xs uppercase tracking-[.25em] text-gold">Tap to unfold</span>
          </motion.div>
          <motion.div initial={false} animate={revealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: .92 }} transition={{ delay: .15 }} className="flex min-h-40 flex-col items-center justify-center">
            <Sparkles className="mb-4 text-gold"/><p className="font-display text-5xl sm:text-7xl">02</p><p className="font-display text-3xl italic">March</p><p className="mt-3 text-sm tracking-[.38em]">2027</p>
            <p className="mt-6 text-xs uppercase tracking-[.2em] text-brown/60">When two stories become one</p>
          </motion.div>
        </button>
        <a href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Dharmesh & Krutika — Wedding')}&dates=20270302T013000Z/20270302T073000Z&details=${encodeURIComponent('Celebrate the wedding of Dharmesh and Krutika')}`} target="_blank" rel="noreferrer" className={`mt-6 inline-block border-b border-maroon pb-1 text-xs uppercase tracking-[.2em] text-maroon transition-opacity ${revealed ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>Add to calendar</a>
      </div>
    </section>
  )
}
