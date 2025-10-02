'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Star, MapPin, Search, ExternalLink, HeartPulse } from 'lucide-react'

const hospitals = [
  { name: 'Apollo Hospitals', location: 'Chennai, India', image: 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/logo.png', desc: 'A leading multi-specialty hospital group known for advanced cardiac care, oncology, and organ transplantation.', link: 'https://www.apollohospitals.com/' },
  { name: 'Fortis Healthcare', location: 'Delhi, India', image: 'https://www.fortishealthcare.com/themes/custom/fortis/logo.png', desc: 'One of India’s largest healthcare providers offering comprehensive services with world-class infrastructure.', link: 'https://www.fortishealthcare.com/' },
  { name: 'AIIMS', location: 'New Delhi, India', image: 'https://www.aiims.edu/images/logo.png', desc: 'India’s premier medical institute with excellence in research, teaching, and clinical care.', link: 'https://www.aiims.edu/' },
]

const doctors = [
  { name: 'Dr. Riya Sharma', specialization: 'Cardiology', location: 'Delhi, India', rating: 4.9, experience: '12+ years', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Dr. Karan Mehta', specialization: 'Dermatology', location: 'Mumbai, India', rating: 4.8, experience: '10+ years', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Dr. Aisha Khan', specialization: 'Pediatrics', location: 'Hyderabad, India', rating: 4.7, experience: '8+ years', image: 'https://randomuser.me/api/portraits/women/47.jpg' },
]

const packages = [
  { title: 'Full Body Checkup', price: '₹4,999', includes: ['Blood Test', 'X-Ray', 'ECG', 'Doctor Consultation'] },
  { title: 'Cardiac Care Package', price: '₹7,999', includes: ['ECG', '2D Echo', 'Treadmill Test', 'Consultation'] },
]

const testimonials = [
  { name: 'Priya S.', feedback: 'Booking a cardiologist was super easy. Got an appointment within 24 hours!', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Rahul K.', feedback: 'I availed the full body package – reports and consultation were seamless.', image: 'https://randomuser.me/api/portraits/men/75.jpg' },
]

const articles = [
  { title: '10 Tips for a Healthy Heart', author: 'Dr. Riya Sharma', link: '#' },
  { title: 'Managing Diabetes Effectively', author: 'Dr. Karan Mehta', link: '#' },
]

const SPECIALIZATIONS = ['All', 'Cardiology', 'Dermatology', 'Pediatrics']

export default function MarketplacePage() {
  const [query, setQuery] = useState('')
  const [specFilter, setSpecFilter] = useState('All')
  const [locFilter, setLocFilter] = useState('All')

  const locations = useMemo(() => {
    const set = new Set<string>(['All'])
    doctors.forEach(d => set.add(d.location))
    hospitals.forEach(h => set.add(h.location))
    return Array.from(set)
  }, [])

  const filteredDoctors = useMemo(() => doctors.filter(d => 
    (query === '' || d.name.toLowerCase().includes(query.toLowerCase()) || d.specialization.toLowerCase().includes(query.toLowerCase())) &&
    (specFilter === 'All' || d.specialization === specFilter) &&
    (locFilter === 'All' || d.location === locFilter)
  ), [query, specFilter, locFilter])

  const filteredHospitals = useMemo(() => hospitals.filter(h => 
    (query === '' || h.name.toLowerCase().includes(query.toLowerCase()) || h.location.toLowerCase().includes(query.toLowerCase())) &&
    (locFilter === 'All' || h.location === locFilter)
  ), [query, locFilter])

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D'
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Your Health, Our Priority</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Discover top-rated doctors, trusted hospitals, and curated healthcare packages — all in one place.</p>
          
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full md:w-96 flex items-center bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
              <Search className="w-5 h-5 text-gray-400" />
              <input value={query} onChange={e => setQuery(e.target.value)} className="ml-3 bg-transparent outline-none placeholder-gray-500 text-white w-full" placeholder="Search doctors, hospitals, specializations or location..." />
            </div>
            
            <div className="flex gap-2">
              <select value={specFilter} onChange={e => setSpecFilter(e.target.value)} className="bg-gray-800 border border-gray-700 px-3 py-2 rounded-md">
                {SPECIALIZATIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              
              <select value={locFilter} onChange={e => setLocFilter(e.target.value)} className="bg-gray-800 border border-gray-700 px-3 py-2 rounded-md">
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>
        </header>

        <Section title="🏥 Partnered Hospitals" count={filteredHospitals.length}>
          {filteredHospitals.map((h, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:shadow-2xl transition">
              <div className="flex items-start gap-4">
                <img src={h.image} alt={h.name} onError={handleImgError} className="w-20 h-20 object-contain rounded-md bg-white/5 p-2" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{h.name}</h3>
                  <div className="text-gray-400 flex items-center gap-2 mt-1 text-sm"><MapPin className="w-4 h-4" /> {h.location}</div>
                  <p className="text-gray-300 text-sm mt-3 line-clamp-3">{h.desc}</p>
                  <div className="mt-4 flex gap-3">
                    <a href={h.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md font-medium">Visit <ExternalLink className="w-4 h-4" /></a>
                    <Link href="/book-appointment"><button className="bg-transparent border border-gray-700 hover:bg-gray-800 cursor-pointer px-3 py-2 rounded-md text-sm">Book Doctor</button></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Section>

        <Section title="👨‍⚕️ Top Doctors" count={filteredDoctors.length}>
          {filteredDoctors.map((doc, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all">
              <div className="flex flex-col items-center">
                <img src={doc.image} alt={doc.name} className="w-28 h-28 rounded-full mb-3 border-4 border-blue-600 object-cover" onError={handleImgError} />
                <h3 className="text-lg font-semibold text-center">{doc.name}</h3>
                <p className="text-center text-blue-300 font-medium">{doc.specialization}</p>
                <p className="text-center text-gray-400 text-sm mt-1">{doc.experience}</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center gap-1 text-yellow-400"><Star className="w-4 h-4" /> <span className="font-medium">{doc.rating}</span></div>
                  <div className="flex items-center gap-1 text-gray-400 ml-2"><MapPin className="w-4 h-4" /> <span className="text-sm">{doc.location}</span></div>
                </div>
                <div className="mt-4 w-full"><Link href="/book-appointment"><button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md cursor-pointer font-semibold">Book Appointment</button></Link></div>
              </div>
            </div>
          ))}
        </Section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">💙 Special Healthcare Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:shadow-xl transition">
                <div className="flex items-center justify-between">
                  <div><h3 className="text-xl font-semibold">{pkg.title}</h3><p className="text-gray-400 text-sm mt-1">{pkg.includes.length} tests & consultation</p></div>
                  <div className="text-right"><p className="text-blue-300 font-bold text-lg">{pkg.price}</p><p className="text-gray-400 text-xs">Inclusive of taxes</p></div>
                </div>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {pkg.includes.map((inc, j) => <li key={j} className="flex items-center gap-2"><HeartPulse className="w-4 h-4 text-blue-400" /> {inc}</li>)}
                </ul>
                <div className="mt-4"><button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md cursor-pointer font-semibold">Book Package</button></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">💬 What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-blue-600" />
                  <div><p className="text-gray-300 italic">“{t.feedback}”</p><p className="text-white font-semibold mt-2">{t.name}</p></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-4">📰 Latest Health Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="text-gray-400 text-sm mt-2">By {a.author}</p>
                <div className="mt-4"><Link href={a.link}><button className="bg-transparent border border-gray-700 px-3 py-2 rounded-md">Read More</button></Link></div>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
          <h4 className="text-xl font-bold">Ready to book your appointment?</h4>
          <p className="text-gray-400 mt-2">Quick, secure & trusted bookings with top specialists and hospitals.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link href="/book-appointment"><button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-semibold">Book Now</button></Link>
            <a href="#hospitals" className="text-gray-300 underline">Or explore hospitals</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

function Section({ title, count, children }: { title: string, count: number, children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-400 text-sm">{count} results</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
        {React.Children.count(children) === 0 && <div className="col-span-full text-center text-gray-400 p-8">No results found — try different search or filters.</div>}
      </div>
    </section>
  )
}