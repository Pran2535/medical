import React, { useState } from "react";

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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-200 dark:border-blue-700/30">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                New Release Available
              </div>

              <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent leading-tight">
                Kickstart Your
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Startup Journey
                </span>
              </h1>

              <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Transform your ideas into reality with TailGrids. Where businesses and innovation meet to create extraordinary digital experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative z-10">Get Started Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </button>

                <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:bg-white dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">4.9/5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                </div>
              </div>

              {/* Trusted By */}
              <div className="clients">
                <p className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Trusted by industry leaders
                </p>
                <div className="flex items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <SingleImage
                    href="#"
                    imgSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/ayroui.svg"
                    alt="AyroUI"
                  />
                  <SingleImage
                    href="#"
                    imgSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids.svg"
                    alt="GrayGrids"
                  />
                  <SingleImage
                    href="#"
                    imgSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/uideck.svg"
                    alt="UIDeck"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-6/12 mt-12 lg:mt-0">
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://cdn.tailgrids.com/assets/images/marketing/hero/hero-image-01.png"
                    alt="Hero Dashboard"
                    className="max-w-full h-auto rounded-3xl shadow-2xl"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-20 -z-10"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="absolute top-20 -left-12 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Background Pattern */}
                <div className="absolute -bottom-16 -right-16 z-[-1] opacity-30">
                  <div className="grid grid-cols-6 gap-2">
                    {[...Array(36)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
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