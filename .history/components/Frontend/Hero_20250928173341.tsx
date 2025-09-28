import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="flex flex-wrap items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="hero-content max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6 backdrop-blur-sm border border-green-200 dark:border-green-700/30">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Now Available in Your City
              </div>

              <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent leading-tight">
                Skip the Queue,
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Book Your Doctor
                </span>
              </h1>

              <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Tired of endless waiting lines? Get instant appointments with verified doctors — anytime, anywhere. Healthcare, now at your fingertips.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-blue-600 rounded-xl hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative z-10">Schedule Appointment</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </button>

                <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:bg-white dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Watch How It Works
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">20K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">4.9/5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">User Rating</div>
                </div>
              </div>

              {/* Trusted By */}
              <div className="clients">
                <p className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Trusted by top hospitals
                </p>
                <div className="flex items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <SingleImage
                    href="#"
                    imgSrc="https://cdn.example.com/hospital1.svg"
                    alt="Hospital One"
                  />
                  <SingleImage
                    href="#"
                    imgSrc="https://cdn.example.com/hospital2.svg"
                    alt="Hospital Two"
                  />
                  <SingleImage
                    href="#"
                    imgSrc="https://cdn.example.com/hospital3.svg"
                    alt="Hospital Three"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content stays same */}
          <div className="w-full px-4 lg:w-6/12 mt-12 lg:mt-0">
            {/* Keep your animated hero image section as is */}
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
