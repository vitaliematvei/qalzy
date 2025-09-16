import Image from 'next/image';
import mobileImage from '../public/Images/FasterThanCrackingAnEgg/FasterThanCrackingAnEggSMALL.png';

export default function FasterThanCrackingAnEgg() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
          Faster than Cracking an Egg
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-12">
          No more manual typing and searching for ingredients in confusing
          databases. Tracking calories with Qalzy takes just 4 seconds of your
          time. One quick press of a button. That&apos;s 5x faster than trying
          to find an ingredient in an app, and 5x more time to spend on things
          that matter.
        </p>

        <div className="relative w-full max-w-4xl mx-auto pl-[40px] md:pl-0">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-lg h-[250px] md:h-[400px]">
            <Image
              src={mobileImage}
              alt="Tracking with one button press"
              fill
              style={{ objectFit: 'cover', objectPosition: 'bottom' }}
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-4 left-0 -translate-x-[calc(100%-190px)] md:top-8 md:left-0 md:transform-none md:translate-x-[-16px] bg-white text-gray-800 text-xs md:text-base font-semibold px-4 py-2 rounded-full shadow-md whitespace-nowrap">
            Track with <span className="font-bold">one button press</span>
          </div>
        </div>
      </div>
    </section>
  );
}
