import { useEffect, useState } from 'react'
import { weddingData } from '../data/weddingData'

function getTime() {
  const distance = Math.max(0, new Date(weddingData.weddingDate).getTime() - Date.now())
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor(distance / 3600000) % 24,
    minutes: Math.floor(distance / 60000) % 60,
    seconds: Math.floor(distance / 1000) % 60,
  }
}

export function Countdown() {
  const [time, setTime] = useState(getTime)
  useEffect(() => { const id = window.setInterval(() => setTime(getTime()), 1000); return () => clearInterval(id) }, [])
  return <section className="relative overflow-hidden bg-[#42131e] px-5 py-24 text-center text-ivory"><div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:24px_24px]"/><div className="relative mx-auto max-w-5xl"><p className="eyebrow text-gold">Until we say I do</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">The sweetest wait</h2><div className="mt-12 grid grid-cols-4 divide-x divide-gold/35">{Object.entries(time).map(([label, value]) => <div key={label} className="px-1"><p className="font-display text-3xl sm:text-6xl">{String(value).padStart(2, '0')}</p><p className="mt-3 text-[9px] uppercase tracking-[.18em] text-gold sm:text-xs">{label}</p></div>)}</div></div></section>
}
