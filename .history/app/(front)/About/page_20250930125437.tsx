import React from 'react'
import { Heart, Video, Calendar, MessageCircle, AlertCircle, Activity, Users, Award, Clock, Brain, Sparkles, Zap } from 'lucide-react'

const AboutPage = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Consultation",
      description: "Connect with experienced doctors through secure video calls from the comfort of your home."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "AI-Powered Smart Booking",
      description: "Our intelligent system analyzes doctor availability, patient history, and location to suggest optimal appointment slots and reduce wait times."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Instant Messaging",
      description: "Get quick medical advice and prescriptions through our secure messaging platform."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Emergency Assistance",
      description: "24/7 access to emergency services and nearest hospitals with real-time navigation."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Health Monitoring",
      description: "Track vitals, medications, and get personalized health insights with detailed analytics."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness Programs",
      description: "Access curated wellness plans, diet recommendations, and lifestyle coaching."
    }
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50,000+", label: "Happy Patients" },
    { icon: <Award className="w-6 h-6" />, value: "500+", label: "Verified Doctors" },
    { icon: <Clock className="w-6 h-6" />, value: "75%", label: "Less Wait Time" },
    { icon: <Heart className="w-6 h-6" />, value: "4.8/5", label: "Patient Rating" }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6 lg:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">Your Health, Our Priority</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Medicure
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing healthcare by connecting patients with the finest medical professionals. 
            We're making quality healthcare accessible, efficient, and stress-free for everyone.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-700">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <span className="font-semibold text-blue-400">Medicure</span> is a comprehensive healthcare platform designed to bridge the gap between patients and quality medical care. Founded with the vision of eliminating long waiting times and making healthcare accessible to all, we leverage cutting-edge technology to deliver seamless medical services.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Our platform empowers patients to take control of their health journey by providing instant access to verified doctors, specialists, and healthcare providers in their vicinity. Whether you need a routine check-up, specialist consultation, or emergency assistance, Medicure ensures you receive timely and quality care.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We understand that healthcare is not just about treating illnesses—it's about prevention, wellness, and building lasting relationships between doctors and patients. That's why we've created an ecosystem that prioritizes patient satisfaction, doctor expertise, and technological innovation.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20 bg-gray-800/50 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to meet all your medical needs
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-gray-700 hover:border-blue-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
            <div className="w-20 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            To become India's most trusted healthcare platform by 2030, transforming the way people access and experience medical care. We envision a future where quality healthcare is just a click away, where waiting times are minimal, and where every individual receives personalized, compassionate care.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-blue-100">Wait Time Goal</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Healthcare Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16 lg:pb-20">
        <div className="bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Reduce Wait Times</h3>
                  <p className="text-gray-400">Eliminate long queues and waiting periods through smart scheduling and real-time availability updates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Connect with Best Doctors</h3>
                  <p className="text-gray-400">Curated network of verified, experienced doctors and specialists across multiple disciplines.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Accessible Healthcare</h3>
                  <p className="text-gray-400">Breaking geographical barriers to make quality healthcare accessible in urban and rural areas alike.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Empower Patients</h3>
                  <p className="text-gray-400">Providing tools and information to help patients make informed decisions about their health.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16 lg:pb-20">
        <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative border border-gray-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
                <Brain className="w-5 h-5" />
                <span className="text-sm font-medium">Powered by AI</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Driven Healthcare Solutions
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Leveraging artificial intelligence to revolutionize your healthcare experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-600">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Appointment Matching</h3>
                <p className="text-gray-400 leading-relaxed">
                  AI analyzes your symptoms, medical history, and preferences to match you with the most suitable doctor and optimal time slot.
                </p>
              </div>

              <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-600">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Predictive Wait Time</h3>
                <p className="text-gray-400 leading-relaxed">
                  Advanced algorithms predict actual wait times based on real-time data, previous appointments, and doctor consultation patterns.
                </p>
              </div>

              <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-600">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Intelligent Scheduling</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our AI optimizes doctor schedules, reduces no-shows with smart reminders, and automatically reschedules in case of emergencies.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gray-700/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-600/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">How AI Streamlines Your Booking</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span><strong>Analyzes doctor availability</strong> across multiple clinics and time zones in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span><strong>Considers your location</strong> and suggests nearest doctors with shortest commute times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span><strong>Reviews your medical history</strong> to recommend specialists based on past conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span><strong>Sends smart notifications</strong> for appointment reminders, medication schedules, and follow-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span><strong>Learns from patterns</strong> to continuously improve matching accuracy and reduce cancellations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage