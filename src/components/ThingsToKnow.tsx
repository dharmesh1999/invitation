import { BellRing, MapPin, Phone } from 'lucide-react'
import { weddingData } from '../data/weddingData'
import { SectionHeading } from './SectionHeading'

export function ThingsToKnow() {
  const cards = [
    { Icon: MapPin, title: 'The Venue', text: `${weddingData.venue.name}\n${weddingData.venue.address}`, href: weddingData.venue.mapUrl, cta: 'Open in maps' },
    { Icon: Phone, title: 'Need a Hand?', text: `${weddingData.contact.label}\n${weddingData.contact.phone}`, href: `tel:${weddingData.contact.phone.replace(/\s/g, '')}`, cta: 'Call us' },
    { Icon: BellRing, title: 'A Gentle Note', text: 'Traditional Indian festive attire\nCeremonies begin on time', href: '#rsvp', cta: 'Confirm attendance' },
  ]
  return <section className="section-pad bg-[#fff9ef]"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="A few little details" title="Things to Know"/><div className="mt-14 grid gap-5 md:grid-cols-3">{cards.map(({ Icon, title, text, href, cta }) => <article key={title} className="border border-gold/45 bg-ivory p-8 text-center"><Icon className="mx-auto text-maroon" strokeWidth={1.2}/><h3 className="mt-5 font-display text-2xl text-brown">{title}</h3><p className="mt-4 whitespace-pre-line text-sm leading-7 text-brown/65">{text}</p><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="mt-7 inline-block border-b border-gold pb-1 text-[10px] uppercase tracking-[.2em] text-maroon">{cta}</a></article>)}</div></div></section>
}
