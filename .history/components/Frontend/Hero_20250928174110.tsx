import React from "react";

// Enhanced SingleImage component
const SingleImage = ({ href, imgSrc, alt }) => (
  <a 
    href={href}
    className="group flex items-center justify-center p-4 rounded-lg bg-white/40 dark:bg-gray-700/40 hover:bg-white/70 dark:hover:bg-gray-700/70 shadow-lg transition-all duration-300 transform hover:scale-110"
  >
    <img
      src={imgSrc}
      alt={alt}
      className="h-10 w-auto filter grayscale group-hover:grayscale-0 shadow-md rounded-md border-2 border-transparent group-hover:border-green-400 transition-all duration-300"
    />
  </a>
);

const Hero = () => (
  <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-100 via-green-100 to-teal-300 dark:from-gray-950 dark:via-green-950 dark:to-teal-950 overflow-hidden flex items-center justify-center py-12">
    {/* Modernized background decorations */}
    <div className="absolute top-24 left-12 w-96 h-96 bg-green-400/30 rounded-full blur-3xl opacity-30 animate-pulse z-0"></div>
    <div className="absolute top-40 right-16 w-96 h-96 bg-blue-500/20 rounded-full blur-2xl opacity-15 animate-pulse animation-delay-1500 z-0"></div>
    <div className="absolute bottom-32 left-32 w-80 h-80 bg-teal-300/40 rounded-full blur-2xl opacity-20 animate-pulse animation-delay-3000 z-0"></div>

    <div className="w-full px-6 lg:px-16 z-10">
      <div className="flex flex-wrap items-center min-h-[80vh] py-16">

        {/* Left Section */}
        <div className="w-full px-4 lg:w-6/12">
          <div className="hero-content max-w-xl bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-base font-medium mb-8 shadow-md border border-green-200 dark:border-green-700/30">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              ✨ 24/7 Doctor Availability
            </div>
            
            {/* Animated Gradient Title */}
            <h1 className="mb-8 text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-gray-800 via-green-700 to-blue-700 dark:from-white dark:via-green-100 dark:to-blue-200 bg-clip-text text-transparent tracking-tight leading-tight drop-shadow-xl">
              Skip the Queue,
              <span className="block bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                Book Your Doctor
              </span>
            </h1>

            {/* Description */}
            <p className="mb-10 text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
              🩺 Tired of endless lines? Instant appointments with verified doctors—anytime, anywhere. <span className="font-semibold text-green-600 dark:text-green-400">Healthcare, now at your fingertips.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-14">
              <button className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl shadow-xl hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-transform duration-200">
                <span className="mr-3 animate-bounce">📱</span>
                <span className="relative z-10">Book Appointment Now</span>
              </button>
              <button className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-700 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-gray-200 dark:border-gray-600 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-md">
                <span className="mr-3">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                See How It Works
              </button>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-8 mb-14">
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-green-200 dark:border-green-700 shadow-xl hover:border-green-600 transition-all duration-200">
                <div className="text-4xl font-black text-green-600 dark:text-green-400 drop-shadow-md">50K+</div>
                <div className="text-md text-gray-600 dark:text-gray-400 mt-1 font-medium">Happy Patients</div>
              </div>
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-blue-200 dark:border-blue-700 shadow-xl hover:border-blue-600 transition-all duration-200">
                <div className="text-4xl font-black text-blue-600 dark:text-blue-400 drop-shadow-md">1000+</div>
                <div className="text-md text-gray-600 dark:text-gray-400 mt-1 font-medium">Expert Doctors</div>
              </div>
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-purple-200 dark:border-purple-700 shadow-xl hover:border-purple-600 transition-all duration-200">
                <div className="text-4xl font-black text-purple-600 dark:text-purple-400 drop-shadow-md">4.9★</div>
                <div className="text-md text-gray-600 dark:text-gray-400 mt-1 font-medium">Patient Rating</div>
              </div>
            </div>

            {/* Trusted Hospitals */}
            <div className="clients">
              <p className="mb-8 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
                🏥 Trusted by leading hospitals
              </p>
              <div className="flex items-center gap-10 opacity-90 hover:opacity-100 transition-opacity duration-300">
                <SingleImage href="#" imgSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' fill='%23059669'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='14' font-weight='bold'%3EAIIMS%3C/text%3E%3C/svg%3E" alt="AIIMS" />
                <SingleImage href="#" imgSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' fill='%232563eb'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='14' font-weight='bold'%3EApollo%3C/text%3E%3C/svg%3E" alt="Apollo" />
                <SingleImage href="#" imgSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' fill='%23dc2626'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='14' font-weight='bold'%3EFortis%3C/text%3E%3C/svg%3E" alt="Fortis" />
                <SingleImage href="#" imgSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' fill='%237c3aed'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='14' font-weight='bold'%3EMax%3C/text%3E%3C/svg%3E" alt="Max Healthcare" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Modern Dashboard Mock */}
        <div className="w-full px-4 lg:w-6/12 mt-12 lg:mt-0 flex items-center justify-center">
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glassmorphism Main Image box */}
              <div className="relative z-10 hover:scale-105 transition-transform duration-500">
                <div className="w-96 h-96 bg-gradient-to-br from-white/90 to-gray-100/80 dark:from-gray-800/90 dark:to-gray-900/95 rounded-3xl shadow-2xl p-10 border border-gray-200 dark:border-gray-700 backdrop-blur-2xl">
                  <div className="space-y-7">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">🩺 Find Doctors</h3>
                      <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-base">✓</span>
                      </div>
                    </div>
                    {/* Search Bar */}
                    <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg py-4 px-5 border flex items-center gap-4">
                      <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div className="h-3 bg-gray-400 dark:bg-gray-500 rounded-lg flex-1"></div>
                    </div>
                    {/* Doctor Cards */}
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-800/30 rounded-lg p-4 border border-green-200 dark:border-green-800 shadow">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">👨‍⚕️</div>
                          <div className="flex-1">
                            <div className="h-3 bg-green-600 rounded w-28 mb-1"></div>
                            <div className="h-2 bg-green-400 rounded w-20"></div>
                          </div>
                          <div className="text-green-600 font-bold text-base">★ 4.9</div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800 shadow">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">👩‍⚕️</div>
                          <div className="flex-1">
                            <div className="h-3 bg-blue-600 rounded w-28 mb-1"></div>
                            <div className="h-2 bg-blue-400 rounded w-20"></div>
                          </div>
                          <div className="text-blue-600 font-bold text-base">★ 4.8</div>
                        </div>
                      </div>
                    </div>
                    {/* Book Button */}
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg py-4 px-1 text-center shadow-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200">
                      <div className="text-white font-semibold text-lg">📱 Book Now</div>
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-2xl opacity-25 -z-10"></div>
              </div>
              
              {/* Animated Medical Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                <span className="text-white text-3xl">⚕️</span>
              </div>
              <div className="absolute -bottom-8 -left-8 w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shadow-xl animate-pulse">
                <span className="text-white text-2xl">📋</span>
              </div>
              <div className="absolute top-24 -left-14 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                <span className="text-white text-lg">❤️</span>
              </div>
              <div className="absolute top-1/2 -right-16 w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce animation-delay-1000">
                <span className="text-white text-2xl">🏥</span>
              </div>
              {/* Pattern Decorations */}
              <div className="absolute -bottom-14 -right-14 z-[-1] opacity-40">
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(36)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-gray-950 dark:via-gray-900/70 dark:to-transparent pointer-events-none"></div>
  </div>
);

export default Hero;
