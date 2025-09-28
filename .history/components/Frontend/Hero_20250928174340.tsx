import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-green-50 to-teal-100 dark:from-gray-900 dark:via-green-900 dark:to-teal-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="flex flex-wrap items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="hero-content max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6 backdrop-blur-sm border border-green-200 dark:border-green-700/30">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                ✨ 24/7 Doctor Availability
              </div>

              <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-900 to-blue-900 dark:from-white dark:via-green-100 dark:to-blue-100 bg-clip-text text-transparent leading-tight">
                Skip the Queue,
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Book Your Doctor
                </span>
              </h1>

              <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                🩺 Tired of endless waiting lines? Get instant appointments with verified doctors — anytime, anywhere. <span className="font-semibold text-green-600">Healthcare, now at your fingertips.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-blue-600 rounded-xl hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="mr-2">📱</span>
                  <span className="relative z-10">Book Appointment Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </button>

                <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:bg-white dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  See How It Works
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-800">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Patients</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expert Doctors</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-100 dark:border-purple-800">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">4.9★</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Patient Rating</div>
                </div>
              </div>

              {/* Trusted By */}
              <div className="clients">
                <p className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
                  🏥 Trusted by leading hospitals
                </p>
                <div className="flex items-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <SingleImage
                    href="#"
                    imgSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' fill='%23059669'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='12' font-weight='bold'%3EAIIMS%3C/text%3E%3C/svg%3E"
                    alt="AIIMS"
                  />
                  <SingleImage
                    href="#"
                    imgSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' fill='%232563eb'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='12' font-weight='bold'%3EApollo%3C/text%3E%3C/svg%3E"
                    alt="Apollo"
                  />
                  <SingleImage
                    href="#"
                    imgSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' fill='%23dc2626'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='12' font-weight='bold'%3EFortis%3C/text%3E%3C/svg%3E"
                    alt="Fortis"
                  />
                  <SingleImage
                    href="#"
                    imgSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' fill='%237c3aed'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='12' font-weight='bold'%3EMax%3C/text%3E%3C/svg%3E"
                    alt="Max Healthcare"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-6/12 mt-12 lg:mt-0">
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Healthcare Dashboard Image */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <div className="w-96 h-96 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                    {/* Mock Doctor Dashboard */}
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">🩺 Find Doctors</h3>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      
                      {/* Search Bar */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                          <div className="h-2 bg-gray-300 rounded flex-1"></div>
                        </div>
                      </div>

                      {/* Doctor Cards */}
                      <div className="space-y-3">
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">👨‍⚕️</div>
                            <div className="flex-1">
                              <div className="h-2 bg-green-600 rounded w-20 mb-1"></div>
                              <div className="h-1.5 bg-green-400 rounded w-16"></div>
                            </div>
                            <div className="text-green-600 font-bold text-sm">★ 4.9</div>
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">👩‍⚕️</div>
                            <div className="flex-1">
                              <div className="h-2 bg-blue-600 rounded w-24 mb-1"></div>
                              <div className="h-1.5 bg-blue-400 rounded w-20"></div>
                            </div>
                            <div className="text-blue-600 font-bold text-sm">★ 4.8</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-3 text-center">
                        <div className="text-white font-semibold text-sm">📱 Book Now</div>
                      </div>
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl blur-2xl opacity-20 -z-10"></div>
                </div>

                {/* Floating Medical Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white text-2xl">⚕️</span>
                </div>

                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white text-xl">📋</span>
                </div>

                <div className="absolute top-20 -left-12 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                  <span className="text-white text-sm">❤️</span>
                </div>

                <div className="absolute top-1/2 -right-16 w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce animation-delay-1000">
                  <span className="text-white text-xl">🏥</span>
                </div>

                {/* Background Pattern */}
                <div className="absolute -bottom-16 -right-16 z-[-1] opacity-30">
                  <div className="grid grid-cols-6 gap-2">
                    {[...Array(36)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none"></div>
    </div>
  );
};

const SingleImage = ({ href, imgSrc, alt }: { href: string; imgSrc: string; alt: string }) => {
  return (
    <a 
      href={href} 
      className="group flex items-center justify-center p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-110"
    >
      <img 
        src={imgSrc} 
        alt={alt} 
        className="h-8 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300" 
      />
    </a>
  );
};

export default Hero;