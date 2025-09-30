import React from "react"
import { Heart, Video, Calendar, MessageCircle, AlertCircle, Activity, Users, Award, Clock, Brain, Sparkles, Zap } from "lucide-react"

// Hero Section
const Hero = () => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6 lg:py-24 text-center">
    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 mx-auto">
      <Heart className="w-5 h-5" />
      <span className="text-sm font-medium">Your Health, Our Priority</span>
    </div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to Medicure</h1>
    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
      Revolutionizing healthcare by connecting patients with the finest medical professionals. We're making quality healthcare accessible, efficient, and stress-free.
    </p>
  </div>
)

// Stats Section
const Stats = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50,000+", label: "Happy Patients" },
    { icon: <Award className="w-6 h-6" />, value: "500+", label: "Verified Doctors" },
    { icon: <Clock className="w-6 h-6" />, value: "75%", label: "Less Wait Time" },
    { icon: <Heart className="w-6 h-6" />, value: "4.8/5", label: "Patient Rating" }
  ]
  return (
    <div className="max-w-6xl mx-auto px-6 -mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">{stat.icon}</div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

// Services Section
const Services = () => {
  const services = [
    { icon: <Video className="w-8 h-8" />, title: "Video Consultation", description: "Connect with experienced doctors through secure video calls." },
    { icon: <Calendar className="w-8 h-8" />, title: "Smart Booking", description: "AI suggests optimal appointment slots and reduces wait times." },
    { icon: <MessageCircle className="w-8 h-8" />, title: "Instant Messaging", description: "Get quick medical advice and prescriptions through messaging." },
    { icon: <AlertCircle className="w-8 h-8" />, title: "Emergency Assistance", description: "24/7 access to emergency services and nearest hospitals." },
    { icon: <Activity className="w-8 h-8" />, title: "Health Monitoring", description: "Track vitals and get personalized health insights." },
    { icon: <Heart className="w-8 h-8" />, title: "Wellness Programs", description: "Access curated wellness plans, diet, and lifestyle coaching." }
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive healthcare solutions tailored to meet your needs</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="group bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-gray-700 hover:border-blue-500">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Vision Section
const Vision = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
      <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-4xl mx-auto">
        To become India's most trusted healthcare platform by 2030, transforming access to medical care with minimal wait times and personalized, compassionate service.
      </p>
    </div>
  </section>
)

// Mission Section
const Mission = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
    <div className="bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Our Mission</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: "Reduce Wait Times", desc: "Eliminate long queues through smart scheduling." },
          { title: "Connect with Best Doctors", desc: "Curated network of verified specialists." },
          { title: "Accessible Healthcare", desc: "Breaking geographical barriers to quality care." },
          { title: "Empower Patients", desc: "Tools to make informed health decisions." }
        ].map((m, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{i+1}</div>
            <div>
              <h3 className="font-semibold text-white mb-2">{m.title}</h3>
              <p className="text-gray-400">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// AI Section
const AISection = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
    <div className="bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden border border-gray-700">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4 mx-auto">
          <Brain className="w-5 h-5" /> <span className="text-sm font-medium">Powered by AI</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">AI-Driven Healthcare</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Intelligent solutions to optimize appointments and reduce wait times</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Sparkles className="w-7 h-7 text-white"/>, title: "Smart Matching", desc: "AI matches you with the best doctor and time slot." },
          { icon: <Zap className="w-7 h-7 text-white"/>, title: "Predictive Wait Time", desc: "Algorithms predict actual wait times using real-time data." },
          { icon: <Brain className="w-7 h-7 text-white"/>, title: "Intelligent Scheduling", desc: "Optimized schedules reduce no-shows and emergencies." }
        ].map((ai, i) => (
          <div key={i} className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-600 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">{ai.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{ai.title}</h3>
            <p className="text-gray-400 leading-relaxed">{ai.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const AboutPage = () => (
  <div className="min-h-screen bg-gray-900">
    <Hero />
    <Stats />
    <Services />
    <Vision />
    <Mission />
    <AISection />
  </div>
)

export default AboutPage
