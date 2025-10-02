'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin, ExternalLink, Star, HeartPulse } from 'lucide-react'

const hospitals = [
  { name: 'Apollo Hospitals', location: 'Chennai, India', image: 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/logo.png', desc: 'Advanced cardiac care and organ transplants.', link: 'https://www.apollohospitals.com/' },
  { name: 'Fortis Healthcare', location: 'Delhi, India', image: 'https://www.fortishealthcare.com/themes/custom/fortis/logo.png', desc: 'Comprehensive healthcare with world-class infrastructure.', link: 'https://www.fortishealthcare.com/' },
]

const doctors = [
  { name: 'Dr. Riya Sharma', specialization: 'Cardiology', location: 'Delhi, India', rating: 4.9, experience: '12+ years', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Dr. Karan Mehta', specialization: 'Dermatology', location: 'Mumbai, India', rating: 4.8, experience: '10+ years', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
]

const SPECIALIZATIONS = ['All', 'Cardiology', 'Dermatology']

export default function MarketplacePage() {
  const [query, setQuery] = useState('')
  const [specFilter, setSpecFilter] = useState('All')

  const filteredDoctors = useMemo(() => {
    return doctors.filter(d =>
      (query === '' || d.name.toLowerCase().includes(query.toLowerCase())) &&
      (specFilter === 'All' || d.specialization === specFilter)
    )
  }, [query, specFilter])

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Find Doctors & Hospitals</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-center">
        <div className="flex bg-gray-800 px-4 py-2 rounded-full border border-gray-700 w-full md:w-96 items-center">
          <Search className="text-gray-400 w-5 h-5" />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search doctors..." className="bg-transparent text-white ml-3 w-full outline-none placeholder-gray-400" />
        </div>

        <select value={specFilter} onChange={e => setSpecFilter(e.target.value)} className="bg-gray-800 text-white border border-gray-700 px-3 py-2 rounded-md cursor-pointer">
          {SPECIALIZATIONS.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Hospitals */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">🏥 Hospitals</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {hospitals.map((h, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:shadow-lg transition cursor-pointer">
              <div className="flex gap-4">
                <img src={h.image} alt={h.name} onError={(e) => e.currentTarget.src = '/placeholder-hospital.png'} className="w-16 h-16 object-contain bg-white/10 rounded" />
                <div>
                  <h3 className="font-semibold">{h.name}</h3>
                  <p className="text-sm text-gray-400 flex items-center gap-1"><MapPin className="w-4 h-4" />{h.location}</p>
                  <p className="text-sm text-gray-300 mt-2">{h.desc}</p>
                  <div className="flex gap-3 mt-3">
                    <a href={h.link} target="_blank" className="text-blue-400 hover:underline flex items-center gap-1"><ExternalLink className="w-4 h-4" />Visit</a>
                    <Link href="/book-appointment"><span className="text-sm border border-gray-600 px-2 py-1 rounded hover:bg-gray-700 cursor-pointer">Book Doctor</span></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section>
        <h2 className="text-xl font-semibold mb-4">👩‍⚕️ Doctors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {filteredDoctors.map((d, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:shadow-lg transition cursor-pointer text-center">
              <img src={d.image} alt={d.name} className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-blue-500 mb-3" onError={(e) => e.currentTarget.src = '/placeholder-doctor.png'} />
              <h3 className="font-semibold">{d.name}</h3>
              <p className="text-blue-300">{d.specialization}</p>
              <p className="text-sm text-gray-400">{d.experience}</p>
              <div className="flex justify-center items-center gap-2 mt-2 text-yellow-400">
                <Star className="w-4 h-4" /> {d.rating}
              </div>
              <p className="text-gray-400 text-sm flex items-center justify-center gap-1 mt-1"><MapPin className="w-4 h-4" /> {d.location}</p>
              <Link href="/book-appointment" className="block mt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-semibold cursor-pointer">Book</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
