'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import { headerData } from '@/app/data';
const { logoImage, navigation } = headerData;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full z-50 bg-white shadow-lg rounded-b-lg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1" data-aos="fade-right">
          {/* Logo */}
          <Link href="#" className="-m-1.5 p-1.5 rounded-lg">
            <span className="sr-only">QALZY</span>
            <Image src={logoImage} alt="Qalzy" className="h-10 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden" data-aos="fade-left">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-transform duration-300 ease-in-out"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon
                className="h-6 w-6 transition-transform duration-300 ease-in-out"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon
                className="h-6 w-6 transition-transform duration-300 ease-in-out"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
        <div
          className="hidden lg:flex lg:gap-x-12 items-center"
          data-aos="fade-left"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium leading-6 text-gray-900 transition-colors duration-200 hover:text-green-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-1000 ease-in-out 
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5 rounded-lg">
            <span className="sr-only">QALZY</span>
            <Image src={logoImage} alt="Qalzy" className="h-10 w-auto" />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
