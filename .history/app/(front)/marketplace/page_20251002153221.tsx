'use client'
import Link from 'next/link'
import { Star, MapPin, Search, Stethoscope, ExternalLink } from 'lucide-react'

const hospitals = [
  {
    name: "Apollo Hospitals",
    location: "Chennai, India",
    image: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/logo.png",
    desc: "A leading multi-specialty hospital group known for cardiac care & organ transplants.",
    link: "https://www.apollohospitals.com/",
  },
  {
    name: "Fortis Healthcare",
    location: "Delhi, India",
    image: "https://www.fortishealthcare.com/themes/custom/fortis/logo.png",
    desc: "One of India’s largest healthcare providers with world-class infrastructure.",
    link: "https://www.fortishealthcare.com/",
  },
  {
    name: "AIIMS",
    location: "New Delhi, India",
    image: "https://www.aiims.edu/images/logo.png",
    desc: "India’s premier medical institute known for research, teaching & healthcare.",
    link: "https://www.aiims.edu/",
  },
  {
    name: "Narayana Health",
    location: "Bangalore, India",
    image: "https://www.narayanahealth.org/sites/all/themes/nh/logo.png",
    desc: "A pioneer in affordable cardiac surgeries & multi-specialty care.",
    link: "https://www.narayanahealth.org/",
  },
]

const doctors = [
  { name: "Dr. Riya Sharma", specialization: "Cardiologist", location: "Delhi, India", rating: 4.9, image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Dr. Karan Mehta", specialization: "Dermatologist", location: "Mumbai, India", rating: 4.8, image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Dr. Aisha Khan", specialization: "Pediatrician", location: "Hyderabad, India", rating: 4.7, image: "https://randomuser.me/api/portraits/women/47.jpg" },
]

const testimonials = [
  { name: "Priya S.", feedback: "Booking a cardiologist was super easy!", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Rahul K.", feedback: "Full body package – reports & consultation seamless.", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  { name: "Neha A.", feedback: "Great platform to compare doctors & hospitals.", image: "https://randomuser.me/api/portraits/women/32.jpg" },
]

const articles = [
  { title: "10 Tips for a Healthy Heart", author: "Dr. Riya Sharma", link: "#" },
  { title: "Managing Diabetes Effectively", author: "Dr. Karan Mehta", link: "#" },
  { title: "Why Regular Health Checkups Matter", author: "Dr. Aisha Khan", link: "#" },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Marketplace</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Find top-rated doctors, hospitals & healthcare packages curated for you.</p>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-16 flex items-center gap-4 bg-gray-800 rounded-full px-6 py-3 border border-gray-700">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search doctors, hospitals..." className="flex-grow bg-transparent outline-none text-white placeholder-gray-500" />
        </div>

        {/* Hospitals */}
        <Section title="🏥 Top Partnered Hospitals">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((h,i)=>(
              <Card key={i}>
                <img src={h.image} alt={h.name} className="h-16 mb-3 object-contain" />
                <h3 className="text-xl font-semibold">{h.name}</h3>
                <p className="flex items-center gap-2 text-gray-400 mt-2"><MapPin className="w-4 h-4"/>{h.location}</p>
                <p className="text-sm text-gray-300 mt-2">{h.desc}</p>
                <Link href={h.link} target="_blank" className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md font-medium cursor-pointer">
                  Visit <ExternalLink className="w-4 h-4"/>
                </Link>
              </Card>
            ))}
          </div>
        </Section>

        {/* Doctors */}
        <Section title="👩‍⚕️ Top Doctors">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((d,i)=>(
              <Card key={i}>
                <img src={d.image} alt={d.name} className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-blue-600 object-cover"/>
                <h3 className="text-lg font-semibold text-center">{d.name}</h3>
                <p className="text-blue-400 text-center">{d.specialization}</p>
                <p className="flex justify-center items-center gap-1 text-yellow-400 mt-2"><Star className="w-5 h-5"/>{d.rating}</p>
                <p className="flex items-center justify-center gap-2 text-gray-400 mt-2"><MapPin className="w-4 h-4"/>{d.location}</p>
                <Link href="/book-appointment" className="mt-4 w-full block text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-semibold cursor-pointer">
                  Book Appointment
                </Link>
              </Card>
            ))}
          </div>
        </Section>

        {/* Specializations */}
        <Section title="🔎 Browse by Specialization">
          <div className="flex flex-wrap justify-center gap-3">
            {["Cardiology","Dermatology","Pediatrics","Neurology","Orthopedics","Psychiatry"].map((s,i)=>(
              <span key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full hover:bg-blue-600 transition cursor-pointer">
                <Stethoscope className="w-4 h-4"/>{s}
              </span>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section title="💬 What Our Users Say">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t,i)=>(
              <Card key={i}>
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-blue-600"/>
                <p className="text-gray-300 italic text-center mb-3">“{t.feedback}”</p>
                <h4 className="text-white font-semibold text-center">{t.name}</h4>
              </Card>
            ))}
          </div>
        </Section>

        {/* Articles */}
        <Section title="📰 Latest Health Articles">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a,i)=>(
              <Card key={i}>
                <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
                <p className="text-gray-400 mb-3">By {a.author}</p>
                <Link href={a.link} className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md font-medium cursor-pointer">
                  Read More
                </Link>
              </Card>
            ))}
          </div>
        </Section>

      </div>
    </div>
  )
}

// Small reusable components
const Section = ({title,children}:{title:string,children:any})=>(
  <section className="mb-16">
    <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
    {children}
  </section>
)

const Card = ({children}:{children:any})=>(
  <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:shadow-xl transition cursor-pointer text-center">
    {children}
  </div>
)
