import React from 'react';
import Image from 'next/image';

import { foodData } from '@/app/data';
const {
  foodTitle,
  foodSubtitle,
  tagline,
  overviewSinusRouterImage,
  freshSaladImage,
} = foodData;

export default function CalorieDisplay() {
  return (
    <section className="bg-white text-gray-900 pt-16 md:pt-0 relative overflow-hidden">
      <div className="mx-auto text-center relative z-10">
        {/* The sinus wave image */}
        <div className="relative flex justify-center mb-8">
          <Image
            src={overviewSinusRouterImage}
            alt="Qalyz One-Tap Calorie Counting Device and sinus wave"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Title and Subtitle */}
        <div className="mt-8 md:mt-12">
          <h2
            className="text-4xl md:text-5xl uppercase font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {foodTitle}
          </h2>
          <div
            className="text-xl md:text-2xl mb-12 opacity-80 text-[#919191]"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            <p>{foodSubtitle}</p>
            <p>{tagline}</p>
          </div>
        </div>

        {/* The salad image with calorie labels */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-full max-w-2xl h-auto">
            <Image
              src={freshSaladImage}
              alt="Fresh Salad with calorie counts"
              width={800}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
