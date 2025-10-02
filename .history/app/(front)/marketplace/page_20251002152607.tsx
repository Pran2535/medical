'use client'

import Link from 'next/link'
import {
  Star,
  MapPin,
  Search,
  Stethoscope,
  ExternalLink,
  HeartPulse,
  Activity,
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
  {
    name: "Narayana Health",
    location: "Bangalore, India",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Narayana_Health_logo.png",
    link: "https://www.narayanahealth.org/",
  },
]

const doctors = [
  {
    name: "Dr. Riya Sharma",
    specialization: "Cardiologist",
    location: "Delhi, India",
    rating: 4.9,
    experience: "12+ years",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Karan Mehta",
    specialization: "Dermatologist",
    location: "Mumbai, India",
    rating: 4.8,
    experience: "10+ years",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Aisha Khan",
    specialization: "Pediatrician",
    location: "Hyderabad, India",
    rating: 4.7,
    experience: "8+ years",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Dr. Arjun Patel",
    specialization: "Neurologist",
    location: "Pune, India",
    rating: 4.9,
    experience: "15+ years",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
]

const packages = [
  { title: "Full Body Checkup", price: "₹4999", includes: ["Blood Test", "X-Ray", "ECG", "Doctor Consultation"] },
  { title: "Cardiac Care Package", price: "₹7999", includes: ["ECG", "2D Echo", "Treadmill Test", "Consultation"] },
  { title: "Diabetes Care Plan", price: "₹2999", includes: ["Blood Sugar Profile", "Diet Plan", "Endocrinologist Consult"] },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Your Health, Our Priority ❤️
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find the best doctors, trusted hospitals, and exclusive healthcare packages all in one place.
          </p>
          <div className="mt-8">
            <Link href="#hospitals">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-lg">
                Explore Now
              </button>
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-16 flex items-center gap-4 bg-gray-800 rounded-full px-6 py-3 border border-gray-700 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search doctors, hospitals, services..."
            className="flex-grow bg-transparent outline-none text-white placeholder-gray-500"
          />
        </div>

        {/* Hospital Tie-ups */}
        <section id="hospitals" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">🏥 Top Partnered Hospitals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <h2 className="text-3xl font-bold mb-8 text-center">👨‍⚕️ Top Doctors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Star className="w-5 h-5" /> {doc.rating} / 5
                </div>
                <p className="text-center text-gray-400 text-sm mt-1">{doc.experience}</p>
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

        {/* Packages Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">💙 Special Healthcare Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-white mb-2">{pkg.title}</h3>
                <p className="text-blue-400 font-bold text-xl mb-4">{pkg.price}</p>
                <ul className="text-gray-300 space-y-2">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-blue-400" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Browse by Specialization</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Cardiology", "Dermatology", "Pediatrics", "Neurology", "Orthopedics", "Psychiatry"].map((spec, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 bg-gray-800 border border-gray-700 rounded-xl text-white hover:bg-blue-600 transition cursor-pointer">
                <Stethoscope className="w-6 h-6" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
