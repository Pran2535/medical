'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Star,
  MapPin,
  Search,
  ExternalLink,
  HeartPulse,
} from 'lucide-react'

const hospitals = [
  {
    name: 'Apollo Hospitals',
    location: 'Chennai, India',
    image: 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/logo.png',
    desc: 'A leading multi-specialty hospital group known for advanced cardiac care, oncology, and organ transplantation.',
    link: 'https://www.apollohospitals.com/',
  },
  {
    name: 'Fortis Healthcare',
    location: 'Delhi, India',
    image: 'https://www.fortishealthcare.com/themes/custom/fortis/logo.png',
    desc: 'One of India’s largest healthcare providers offering comprehensive services with world-class infrastructure.',
    link: 'https://www.fortishealthcare.com/',
  },
  {
    name: 'AIIMS',
    location: 'New Delhi, India',
    image: 'https://www.aiims.edu/images/logo.png',
    desc: 'India’s premier medical institute with excellence in research, teaching, and clinical care.',
    link: 'https://www.aiims.edu/',
  },
]

const doctors = [
  {
    name: 'Dr. Riya Sharma',
    specialization: 'Cardiology',
    location: 'Delhi, India',
    rating: 4.9,
    experience: '12+ years',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Dr. Karan Mehta',
    specialization: 'Dermatology',
    location: 'Mumbai, India',
    rating: 4.8,
    experience: '10+ years',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
]

const packages = [
  { title: 'Full Body Checkup', price: '₹4,999', includes: ['Blood Test', 'X-Ray', 'ECG', 'Doctor Consultation'] },
  { title: 'Cardiac Care Package', price: '₹7,999', includes: ['ECG', '2D Echo', 'Treadmill Test', 'Consultation'] },
]

const testimonials = [
  {
    name: 'Priya S.',
    feedback: 'Booking a cardiologist was super easy. Got an appointment within 24 hours!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
]

const articles = [
  { title: '10 Tips for a Healthy Heart', author: 'Dr. Riya Sharma', link: '#' },
]

const SPECIALIZATIONS = ['All', 'Cardiology', 'Dermatology']

export default function MarketplacePage() {
  const [query, setQuery] = useState('')
  const [specFilter, setSpecFilter] = useState<string>('All')
  const [locFilter, setLocFilter] = useState<string>('All')

  const locations = useMemo(() => {
    const set = new Set<string>(['All'])
    doctors.forEach((d) => set.add(d.location))
    hospitals.forEach((h) => set.add(h.location))
    return Array.from(set)
  }, [])

  const filteredDoctors = useMemo(() => {
    return doctors.filter((d) => {
      const matchesQuery =
        query.trim() === '' ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.specialization.toLowerCase().includes(query.toLowerCase()) ||
        d.location.toLowerCase().includes(query.toLowerCase())
      const matchesSpec = specFilter === 'All' || d.specialization === specFilter
      const matchesLoc = locFilter === 'All' || d.location === locFilter
      return matchesQuery && matchesSpec && matchesLoc
    })
  }, [query, specFilter, locFilter])

  const filteredHospitals = useMemo(() => {
    return hospitals.filter((h) => {
      const matchesQuery = query.trim() === '' || h.name.toLowerCase().includes(query.toLowerCase()) || h.location.toLowerCase().includes(query.toLowerCase()) || h.desc.toLowerCase().includes(query.toLowerCase())
      const matchesLoc = locFilter === 'All' || h.location === locFilter
      return matchesQuery && matchesLoc
    })
  }, [query, locFilter])

  function handleImgError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const el = e.currentTarget
    el.onerror = null
    el.src = '/placeholder.png'
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Hospitals */}
        <section id="hospitals" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">🏥 Partnered Hospitals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((h, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:shadow-2xl transition cursor-pointer">
                <div className="flex items-start gap-4">
                  <img src={h.image} alt={h.name} onError={handleImgError} className="w-20 h-20 object-contain rounded-md bg-white/5 p-2" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{h.name}</h3>
                    <p className="text-gray-300 text-sm mt-3 line-clamp-3">{h.desc}</p>
                    <div className="mt-4 flex gap-3">
                      <a href={h.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md font-medium cursor-pointer">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                      <Link href="/book-appointment">
                        <button className="bg-transparent border border-gray-700 hover:bg-gray-800 px-3 py-2 rounded-md text-sm cursor-pointer">
                          Book Doctor
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Doctors */}
        <section id="doctors" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">👨‍⚕️ Top Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all cursor-pointer">
                <div className="flex flex-col items-center">
                  <img src={doc.image} alt={doc.name} className="w-28 h-28 rounded-full mb-3 border-4 border-blue-600 object-cover" />
                  <h3 className="text-lg font-semibold text-center">{doc.name}</h3>
                  <p className="text-center text-blue-300 font-medium">{doc.specialization}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 mt-3 rounded-md font-semibold cursor-pointer">Book Appointment</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
