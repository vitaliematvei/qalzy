import Image from 'next/image';
import Link from 'next/link';
// Import icons for tracking features
import { CiBarcode } from 'react-icons/ci';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { MdOutlineRecordVoiceOver } from 'react-icons/md';
// Import data for the 'Track Anywhere' section
import { TrackAnywhereData } from '../app/data';

// Destructure data for easier access
const {
  TrackAnywhereTitle,
  TrackAnywhereText,
  TrackAnywhereImg1,
  TrackAnywhereImg2,
  AppStore,
  GooglePlay,
} = TrackAnywhereData;

/**
 * Renders the 'Track Anywhere' section, showcasing the mobile app's features and download links.
 * It includes a title, descriptive text, two large images, a list of key features (barcode scan, photo, voice),
 * and links to the App Store and Google Play.
 */
export default function TrackAnywhere() {
  return (
    // Main container for the 'Track Anywhere' section
    <section className="relative w-full mx-auto pt-16 bg-[#F9F9F9] pb-16">
      {/* Title and description area */}
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-gray-800 mb-6">
          {TrackAnywhereTitle}
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-600 px-4">
          {TrackAnywhereText}
        </p>
      </div>

      {/* Images container (side-by-side on larger screens) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-6 lg:gap-8 h-[837px]">
        {/* First Image: Shows a user interacting (e.g., taking a picture of food) */}
        <div
          data-aos="fade-right"
          className="w-1/2 rounded-xl overflow-hidden transition duration-300"
        >
          <div className="relative h-full">
            <Image
              src={TrackAnywhereImg1}
              alt="Image 1: Woman photographing her meal for tracking"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Second Image: Shows the app interface or result of tracking */}
        <div
          data-aos="fade-left"
          className="relative w-1/2 rounded-xl overflow-hidden transition duration-300"
        >
          {/* Subtle overlay effect for the image */}
          <div className="bg-black opacity-5 absolute inset-0 top-60 rounded-xl z-0"></div>
          <div className="absolute inset-0 z-10">
            <Image
              src={TrackAnywhereImg2}
              alt="Image 2: App interface for tracking calories and nutrition"
              // Note: 'object-cover' is used here, but 'fill' may be required depending on parent 'div' height/width setup for Next.js Image component
              className="object-cover  mx-auto "
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Key tracking features list (Barcode, Photo, Voice) */}
      <div className="flex gap-4 lg:gap-20 items-center justify-center my-15 px-2">
        {/* Feature 1: Scan Barcode */}
        <div className="flex flex-col text-center items-center bg-[#ECECEC] rounded-lg p-2 md:p-5 gap-2 hover:scale-105 hover:bg-white hover:shadow-lg transition duration-300">
          <CiBarcode
            color="#56B602"
            className="w-12 h-12 md:w-[100] md:h-[100]"
          />
          <p className="text-xl md:text-3xl text-center">Scan Barcode</p>
        </div>
        {/* Feature 2: Take Photos of Meals */}
        <div className="flex flex-col  text-center items-center bg-[#ECECEC] rounded-lg p-2 md:p-5 gap-2 hover:scale-105 hover:bg-white hover:shadow-lg transition duration-300">
          <HiOutlinePhotograph
            color="#56B602"
            className="w-12 h-12 md:w-[100] md:h-[100]"
          />
          <p className="text-xl md:text-3xl text-center">
            Take Photos of meals
          </p>
        </div>
        {/* Feature 3: Voice Commands */}
        <div className="flex flex-col  text-center items-center bg-[#ECECEC] rounded-lg p-2 md:p-5 gap-2 hover:scale-105 hover:bg-white hover:shadow-lg transition duration-300">
          <MdOutlineRecordVoiceOver
            color="#56B602"
            className="w-12 h-12 md:w-[100] md:h-[100]"
          />
          <p className="text-xl md:text-3xl text-center">Voice Commands</p>
        </div>
      </div>

      {/* Call to action for app download */}
      <div className="text-center text-gray-500 text-4xl md:text-5xl">
        <p>Get Qalzy app for free!</p>
      </div>

      {/* App store download links */}
      <div className="flex gap-3 justify-center items-center my-10 mx-2">
        {/* App Store Link */}
        <Link href="#" target="_blank">
          <Image
            src={AppStore}
            alt="App Store Download Link"
            className="w-80 h-auto"
          />
        </Link>

        {/* Google Play Link */}
        <Link href="#" target="_blank">
          <Image
            src={GooglePlay}
            alt="Google Play Download Link"
            className="w-90 h-auto"
          />
        </Link>
      </div>
    </section>
  );
}
