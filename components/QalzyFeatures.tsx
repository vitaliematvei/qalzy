import React from 'react';
import Image from 'next/image';
import { QalzyFeaturesData } from '../app/data';

const {
  qalzyFeaturesTitle,
  qalzyFeaturesText,
  qalzyFeaturesImg1,
  qalzyFeaturesImg1Mobile,
  qalzyFeaturesImg2,
  qalzyFeaturesImg2Mobile,
} = QalzyFeaturesData;

function QalzyFeatures() {
  return (
    <section className="relative w-full mx-auto  pt-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-gray-800 mb-6">
          {qalzyFeaturesTitle}
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-600 px-4">
          {qalzyFeaturesText}
        </p>
      </div>

      <div className="relative w-full">
        <div className="relative pt-[160%] md:pt-[75%] lg:pt-[56.25%] overflow-hidden">
          <Image
            src={qalzyFeaturesImg1}
            alt="Qalzy features demonstration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
            className="hidden md:flex absolute top-0 left-0 w-full h-full object-cover object-center"
            priority
          />

          <Image
            src={qalzyFeaturesImg1Mobile}
            alt="Qalzy features demonstration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
            className="md:hidden absolute w-full h-full object-contain object-center"
            priority
          />

          <div className="absolute top-7/10 md:top-7/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 text-lg md:text-xl active:scale-95"
              aria-label="Start scanning food portions"
            >
              Scan Portions
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full ">
        <div className="relative pt-[160%] md:pt-[75%] lg:pt-[56.25%] overflow-hidden">
          <Image
            src={qalzyFeaturesImg2}
            alt="Qalzy features demonstration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
            className="hidden md:flex absolute top-0 left-0 w-full h-full object-cover object-center"
            priority
          />

          <Image
            src={qalzyFeaturesImg2Mobile}
            alt="Qalzy features demonstration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
            className="md:hidden absolute w-full h-full object-contain object-center"
            priority
          />

          <div className="absolute top-7/11 md:top-7/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 text-lg md:text-xl active:scale-95"
              aria-label="Start scanning food portions"
            >
              Track multiple ingredients
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QalzyFeatures;
