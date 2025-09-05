import React from 'react';
import YouTube from 'react-youtube';

import { AIPoweredData } from '../app/data';
const { title, description, youtubeVideoId } = AIPoweredData;

export default function AIPoweredCalorieCounting() {
  const opts = {
    height: '480',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <section className="bg-[#F9F9F9] py-16 px-4 md:px-0">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#171923]">
          {title}
        </h2>
        <p className="text-base md:text-base text-[#171923] mb-10 leading-relaxed md:px-47 px-6">
          {description}
        </p>
        <div className="w-full max-w-4xl mx-auto  rounded-3xl overflow-hidden shadow-2xl">
          <YouTube videoId={youtubeVideoId} opts={opts} />
        </div>
      </div>
    </section>
  );
}
