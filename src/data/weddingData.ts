export type Celebration = { title: string; eyebrow: string; date: string; time: string; note: string; icon: 'henna' | 'music' | 'rings' }

export const weddingData = {
  couple: { bride: 'Krutika', groom: 'Dharmesh', hashtag: '#D & K' },
  weddingDate: '2027-03-02T07:00:00+05:30',
  displayDate: '02 March 2027',
  families: {
    groom: 'The loving family of Dharmesh',
    bride: 'The loving family of Krutika',
  },
  venue: {
    name: 'Hariom Party Plot',
    address: 'Gadhada road, Botad, Gujarat',
    mapUrl: 'https://maps.app.goo.gl/V91CC1sbMBGjY43n6',
  },
  contact: { label: 'Wedding concierge', phone: '+91 9924393787' },
  celebrations: [
    { title: 'Mehndi & Haldi', eyebrow: 'Sunlit beginnings', date: '28 February 2027', time: 'Haldi · 4:00 PM', note: 'An afternoon of turmeric, florals, laughter and blessings.', icon: 'henna' },
    { title: 'Sangeet Night', eyebrow: 'Music under the stars', date: '28 February 2027', time: 'Dandiya Ras · 9:30 PM', note: 'Bring your dancing feet for an evening of rhythm and revelry.', icon: 'music' },
    { title: 'The Wedding', eyebrow: 'A sacred promise', date: '02 March 2027', time: 'Jan Prasthan · 7:00 AM', note: 'Mandap Muhurat · 28 February 2027. Wedding rituals follow on 02 March.', icon: 'rings' },
  ] as Celebration[],
  story: {
    title: 'Two paths, one beautiful beginning',
    body: 'Between quiet conversations, shared dreams and the easy laughter that felt like home, our story became a promise. We cannot wait to begin our forever surrounded by the people we love most.',
  },
  photos: [
    { src: '/1.jpg', alt: 'Dharmesh and Krutika together' },
    { src: '/2.jpeg', alt: 'Dharmesh and Krutika together' },
    { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85', alt: 'Indian wedding couple celebrating together' },
    { src: 'https://images.unsplash.com/photo-1600685912448-8bc35c141e18?auto=format&fit=crop&w=1400&q=85', alt: 'Bride in traditional wedding attire' },
    { src: 'https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?auto=format&fit=crop&w=1400&q=85', alt: 'Joyful Indian wedding ceremony' },
  ],
  instagramUrl: 'https://www.instagram.com/explore/tags/indianwedding/',
  youtubeId: 'QhJ0Wf5RzWQ',
} as const
