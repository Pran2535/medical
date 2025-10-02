'use client'

import Link from 'next/link'
import {
  Star,
  MapPin,
  Search,
  Stethoscope,
  Hospital,
  ExternalLink,
} from 'lucide-react'

const hospitals = [
  {
    name: "Apollo Hospitals",
    location: "Chennai, India",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Apollo_Hospitals_Logo.svg",
    link: "https://www.apollohospitals.com/",
  },
  {
    name: "Fortis Healthcare",
    location: "Delhi, India",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f4/Fortis_Healthcare_logo.svg",
    link: "https://www.fortishealthcare.com/",
  },
  {
    name: "AIIMS",
    location: "New Delhi, India",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7f/AIIMS_Emblem.svg",
    link: "https://www.aiims.edu/",
  },
]

const doctors = [
  {
    name: "Dr. Riya Sharma",
    specialization: "Cardiologist",
    location: "Delhi, India",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Karan Mehta",
    specialization: "Dermatologist",
    location: "Mumbai, India",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Aisha Khan",
    specialization: "Pediatrician",
    location: "Hyderabad, India",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Marketplace</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Find top-rated doctors, hospitals, and special healthcare packages curated for you.</p>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-16 flex items-center gap-4 bg-gray-800 rounded-full px-6 py-3 border border-gray-700">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search doctors, hospitals, services..."
            className="flex-grow bg-transparent outline-none text-white placeholder-gray-500"
          />
        </div>

        {/* Hospital Tie-ups */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Top Partnered Hospitals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((h, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:shadow-2xl transition">
                <div className="flex flex-col items-center">
                  <img src={h.image} alt={h.name} className="h-16 mb-4" />
                  <h3 className="text-xl font-semibold text-white">{h.name}</h3>
                  <div className="text-gray-400 flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4" />
                    {h.location}
                  </div>
                  <Link href={h.link} target="_blank">
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md flex items-center gap-2">
                      Visit <ExternalLink className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Doctor Cards */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Top Doctors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all group">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-600 object-cover"
                />
                <h3 className="text-xl font-semibold text-white text-center mb-1">{doc.name}</h3>
                <p className="text-center text-blue-400 font-medium">{doc.specialization}</p>
                <div className="flex justify-center items-center gap-1 text-yellow-400 mt-2">
                  <Star className="w-5 h-5" /> {doc.rating}
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400 mt-2">
                  <MapPin className="w-4 h-4" /> <span>{doc.location}</span>
                </div>
                <Link href="/book-appointment">
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
                    Book Appointment
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Browse by Specialization</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Cardiology", "Dermatology", "Pediatrics", "Neurology", "Orthopedics", "Psychiatry"].map((spec, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-white hover:bg-blue-600 transition cursor-pointer">
                <Stethoscope className="w-4 h-4" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
