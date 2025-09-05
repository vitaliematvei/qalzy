'use client';

import React from 'react';
import Image from 'next/image';

import { hero } from '../app/data';
const {
  heroTitle,
  heroSubtitle,
  heroDiscountText,
  heroPreorderCountText,
  heroButtonText,
  heroImage,
  heroSmallImage,
} = hero;

export default function Hero() {
  return (
    <div className="relative bg-gray-800 text-white overflow-hidden">
      {/* Background Image - for desktop */}
      <div className="hidden md:block absolute inset-0 bg-cover bg-center">
        <Image alt="hero-bg" fill className="object-cover" src={heroImage} />
        {/* Overlay to darken image */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Background Image - for mobile */}
      <div className="block md:hidden absolute inset-0 bg-cover bg-center">
        <Image
          alt="hero-bg"
          fill
          className="object-cover"
          src={heroSmallImage}
        />
        {/* Overlay to darken image */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 lg:px-20 sm:px-6 py-16 md:py-24 lg:py-32 flex flex-col items-center md:items-start text-center md:text-left">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 max-w-3xl"
          data-aos="fade-right"
        >
          {heroTitle}
        </h1>
        <p
          className="text-xm sm:text-lg md:text-xl mb-6 max-w-xl opacity-90"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          {heroSubtitle}
        </p>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {heroDiscountText}
        </h2>
        <div className="flex items-center mb-6">
          {/* Star ratings */}
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279l-7.416-3.921-7.416 3.921 1.48-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
            ))}
          </div>
          <span
            className="ml-2 text-sm sm:text-xl opacity-90"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            {heroPreorderCountText}
          </span>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold uppercase py-3 px-8 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out shadow-lg"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {heroButtonText}
        </button>
      </div>
    </div>
  );
}
