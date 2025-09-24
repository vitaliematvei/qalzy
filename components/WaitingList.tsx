import React, { useState } from 'react';
import Image from 'next/image';

import { WaitingListData } from '../app/data';
const {
  waitingTitle,
  waitingSubtitle,
  waitingText,
  waitingButtonText,
  waitingImageBg,
  waitingImageBgSmall,
} = WaitingListData;

export default function WaitingList() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (event: HandleSubmitEvent): void => {
    event.preventDefault();
    setIsSubmitting(true);
    // Here you would typically handle the form submission, e.g.,
    // by making an API call to add the email to your waiting list.
    console.log('Submitting email:', email);

    // Simulate an API call
    setTimeout(() => {
      alert(`Thank you for joining our waiting list, ${email}!`);
      setIsSubmitting(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section
      className="relative bg-gray-800 text-white overflow-hidden min-h-screen flex items-center justify-center"
      aria-label="Join our waiting list"
    >
      {/* Background Image - for desktop */}
      <div className="hidden md:block absolute inset-0 bg-cover bg-center">
        <Image
          alt="background image"
          fill
          priority
          className="object-cover"
          src={waitingImageBg}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      {/* Background Image - for mobile */}
      <div className="block md:hidden absolute inset-0 bg-cover bg-center">
        <Image
          alt="background image"
          fill
          priority
          className="object-cover"
          src={waitingImageBgSmall}
        />
        {/* Overlay to darken image */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div
        className="text-center w-3/5 mx-auto relative z-10 flex flex-col gap-6  md:items-start"
        data-aos="fade-up"
      >
        <h2 className="text-5xl">{waitingTitle}</h2>
        <p className="text-2xl">{waitingSubtitle}</p>
        <p className="text-base">{waitingText}</p>
        <form className="flex flex-col gap-6 mt-5">
          <input
            type="email"
            id="email-input"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address..."
            aria-label="Your email address"
            required
            className="w-full md:w-auto flex-grow px-6 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 bg-white transition duration-300"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-shrink-0 px-8 py-3 font-semibold rounded-full shadow-lg transition duration-300 uppercase
              ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#6ADF6E] hover:bg-[#57c25a]'
              }
            `}
          >
            {isSubmitting ? 'Submitting...' : waitingButtonText}
          </button>
        </form>
      </div>
    </section>
  );
}
