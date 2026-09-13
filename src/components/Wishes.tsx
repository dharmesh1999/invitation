import { FormEvent, useEffect, useState } from 'react'
import { Send } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

type Wish = { id: number; name: string; message: string }
const initial: Wish[] = [{ id: 1, name: 'With love', message: 'May your new chapter be filled with laughter, patience and endless joy.' }]

export function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>(() => { try { return JSON.parse(localStorage.getItem('dk-wishes') || 'null') || initial } catch { return initial } })
  const [error, setError] = useState('')
  useEffect(() => localStorage.setItem('dk-wishes', JSON.stringify(wishes)), [wishes])
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); const name = String(data.get('name') || '').trim(); const message = String(data.get('message') || '').trim()
    if (!name || message.length < 3) return setError('Please add your name and a short wish.')
    setWishes(current => [{ id: Date.now(), name, message }, ...current]); setError(''); form.reset()
  }
  return <section id="wishes" className="section-pad bg-[#fff9ef]"><div className="mx-auto max-w-5xl"><SectionHeading eyebrow="Words we will treasure" title="Leave a Wish"/><div className="mt-12 grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><form onSubmit={submit} className="border border-gold/45 bg-ivory p-6 sm:p-8"><label className="form-label">Your name<input name="name" className="form-input" placeholder="Name"/></label><label className="form-label mt-5">Your wish<textarea name="message" className="form-input min-h-32 resize-y" placeholder="Write from the heart…" maxLength={280}/></label><p className="mt-3 text-xs text-red-700" role="alert">{error}</p><button className="button-primary mt-6" type="submit">Share your wish <Send size={15}/></button></form><div className="max-h-[28rem] space-y-4 overflow-y-auto pr-2" aria-live="polite">{wishes.map(wish => <blockquote key={wish.id} className="border-l border-gold bg-ivory px-6 py-5"><p className="font-display text-xl italic leading-8 text-brown">“{wish.message}”</p><footer className="mt-3 text-[10px] uppercase tracking-[.2em] text-maroon">— {wish.name}</footer></blockquote>)}</div></div></div></section>
}
