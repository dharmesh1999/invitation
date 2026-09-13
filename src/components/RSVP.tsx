import { AnimatePresence, motion } from 'framer-motion'
import { Check, Heart, X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { SectionHeading } from './SectionHeading'

type Attendance = 'yes' | 'no' | null

export function RSVP() {
  const [attendance, setAttendance] = useState<Attendance>(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (!data.get('name')?.toString().trim()) return setError('Please tell us your name.')
    if (attendance === 'yes' && !data.get('guests')) return setError('Please select your party size.')
    setError(''); setSubmitted(true)
  }
  return <section id="rsvp" className="section-pad bg-ivory"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Kindly reply by 01 February" title="Will you join us?"/>
    <div className="mt-12 grid grid-cols-2 gap-3" role="group" aria-label="Attendance"><button type="button" onClick={() => { setAttendance('yes'); setSubmitted(false) }} className={`rsvp-choice ${attendance === 'yes' ? 'active' : ''}`} aria-pressed={attendance === 'yes'}><Check size={20}/>Joyfully accepts</button><button type="button" onClick={() => { setAttendance('no'); setSubmitted(false) }} className={`rsvp-choice ${attendance === 'no' ? 'active' : ''}`} aria-pressed={attendance === 'no'}><X size={20}/>Sadly declines</button></div>
    <AnimatePresence mode="wait">{attendance && !submitted && <motion.form key={attendance} onSubmit={submit} noValidate initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0 }} className="mt-8 space-y-6 overflow-hidden border border-gold/45 p-6 sm:p-10"><label className="form-label">Your full name<input className="form-input" name="name" autoComplete="name" required placeholder="Name"/></label>{attendance === 'yes' && <><label className="form-label">Number attending<select className="form-input" name="guests" required defaultValue=""><option value="" disabled>Select party size</option><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5+ guests</option></select></label><label className="form-label">Dietary notes<textarea className="form-input min-h-24 resize-y" name="dietary" placeholder="Anything we should know?"/></label></>}<p className="text-sm text-red-700" role="alert">{error}</p><button className="button-primary" type="submit">Send RSVP <Heart size={15}/></button></motion.form>}{submitted && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-9 border border-gold/50 p-10 text-center"><Heart className="mx-auto text-maroon"/><h3 className="mt-4 font-display text-3xl text-maroon">Thank you</h3><p className="mt-3 text-sm text-brown/65">Your response has been noted. {attendance === 'yes' ? 'We cannot wait to celebrate together.' : 'You will be warmly missed.'}</p></motion.div>}</AnimatePresence>
  </div></section>
}
