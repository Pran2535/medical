import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 lg:p-16">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Medicure</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          At <span className="font-semibold">Medicure</span>, we are dedicated to providing the best medical services
          to patients. Our mission is to connect patients with the best doctors nearby and minimize waiting times, making
          healthcare convenient and accessible for everyone.
        </p>
      </header>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Video Conferencing</h3>
            <p className="text-gray-600">
              Quick online discussions with doctors without visiting in person.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Book Sessions with Doctors</h3>
            <p className="text-gray-600">
              Schedule appointments to skip long queues and see doctors on time.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Messaging Service</h3>
            <p className="text-gray-600">
              Need quick advice? Connect with our healthcare team through messages.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Emergency Assistance</h3>
            <p className="text-gray-600">
              Immediate access to the nearest emergency ward when you need it most.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Health Tracker</h3>
            <p className="text-gray-600">
              Track your health metrics and get detailed reports for better care.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Our vision at <span className="font-semibold">Medicure</span> is to reduce waiting times for patients and
          make healthcare accessible and easy. We aim to connect patients with the best doctors nearby, so they
          receive timely medical attention and live healthier, stress-free lives.
        </p>
      </section>
    </div>
  )
}

export default AboutPage
