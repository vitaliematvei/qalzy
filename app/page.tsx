'use client';

import Navbar from '@/components/Navbar';
import NotificationBanner from '@/components/NotificationBanner';
import Hero from '@/components/Hero';
import CalorieDisplay from '@/components/CalorieDisplay';
import AIPoweredCalorieCounting from '@/components/AIPoweredCalorieCounting';
import CalorieConsumed from '@/components/CalorieConsumed';
import FasterThanCrackingAnEgg from '@/components/FasterThanCrackingAnEgg';
import TrackingRapidResults from '@/components/TrackingRapidResults';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <NotificationBanner />
      <Hero />
      <CalorieDisplay />
      <AIPoweredCalorieCounting />
      <CalorieConsumed />
      <FasterThanCrackingAnEgg />
      <TrackingRapidResults />
    </div>
  );
}
