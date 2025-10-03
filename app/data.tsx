// import images
import Logo from '../public/Images/Header/LogoImg.svg';

import HeroMainImage from '../public/Images/Hero/hero-bg-2.jpg';
import HeroSmallImage from '../public/Images/Hero/hero-bg-small-2.jpg';

import OverviewRouterImage from '../public/Images/Overview/Router.svg';
import OverviewSinusImage from '../public/Images/Overview/Sinus.svg';
import OverviewSinusRouterImage from '../public/Images/Overview/SinusRouter.svg';

import FreshSaladImage from '../public/Images/Overview/Fresh-Salad-Cutted.jpg';

import KitchenImage from '../public/Images/CalorieConsumed/Kitchen.jpg';

import WaitingImageBg from '../public/Images/WaitingList/WaitingListBgImage.png';
import WaitingSmallImage from '../public/Images/WaitingList/WaitingListImageBgSmall.jpg';

import QalzyFeaturesImg_1 from '../public/Images/QalzyFeatures/QalzyFeaturesImg_1.png';
import QalzyFeaturesImg_1_Mobile from '../public/Images/QalzyFeatures/QalzyFeaturesImg_1_Mobile.png';
import QalzyFeaturesImg_2 from '../public/Images/QalzyFeatures/QalzyFeaturesImg_2.png';
import QalzyFeaturesImg_2_Mobile from '../public/Images/QalzyFeatures/QalzyFeaturesImg_2_Mobile.png';

import TrackAnywhereImg1 from '../public/Images/TrackAnywhere/TrackAnywhereImage1.jpg';
import TrackAnywhereImg2 from '../public/Images/TrackAnywhere/TrackAnywhereImage2_B.png';
import AppStore from '../public/Images/TrackAnywhere/AppStore.png';
import GooglePlay from '../public/Images/TrackAnywhere/GooglePlay.png';

//----Navbar----------------------------------------------------------------
export const headerData = {
  logoImage: Logo,
  navigation: [
    { name: 'AI Scale', href: '#' },
    { name: 'Calorie Tracking App', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Shop', href: '#' },
  ],
};

//----NotificationBanner------------------------------------------------------------
export const NOTIFICATION_BANNER_TEXT =
  "Use AI to identify and record the food you weigh and log calories automatically. World's First Launch!";

//----Hero-------------------------------------------------------------------
export const hero = {
  heroTitle: 'The only kitchen scale that auto-tracks calories',
  heroSubtitle:
    'Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id. Scelerisque in et molestie eget in auctor bibendum feugiat.',
  heroDiscountText: 'Get 50% discount',
  heroPreorderCountText: '5,128+ early bird pre-orders',
  heroButtonText: ' Preorder Now',
  heroImage: HeroMainImage,
  heroSmallImage: HeroSmallImage,
};

//----Food Overview-----------------------------------------------------------
export const foodData = {
  overviewRouterImage: OverviewRouterImage,
  overviewSinusImage: OverviewSinusImage,
  overviewSinusRouterImage: OverviewSinusRouterImage,
  foodTitle: 'Meet Qalzy',
  foodSubtitle: 'One-Tap Calorie Counting',
  tagline: 'Fast. Precise. Easy.',
  freshSaladImage: FreshSaladImage,
};

//----AIPoweredCalorieCounting-----------------------------------------------------------
export const AIPoweredData = {
  title: 'Instant AI-powered Calorie Counting',
  description:
    "Tired of manually tracking your calories? Qalzy's AI camera instantly identifies raw foods, packaged items, and even multiple ingredients on a plate with over 90% accuracy, and automatically logs the detected calories and macros, all without any effort on your part.",
  youtubeVideoId: 'XnQ7Py8D6v0',
};

//----CalorieConsumed-----------------------------------------------------------
export const CalorieConsumedData = {
  kitchen: KitchenImage,
};

//----TrackingRapidResults-----------------------------------------------------------
export const TrackingRapidResultsData = {
  title: 'The Most Accurate Tracking for Rapid Results',
  description:
    "Tired of manually tracking your calories? Qalzy's AI camera instantly identifies raw foods, packaged items, and even multiple ingredients on a plate with over 90% accuracy, and automatically logs the detected calories and macros, all without any effort on your part.",
  youtubeVideoId: 'dwwJ9TPoiUA',
};

//----WaitingList-----------------------------------------------------------
export const WaitingListData = {
  waitingTitle: 'Join the waiting list',
  waitingSubtitle: 'Enter to win a Nutrioscale and get 25% off',
  waitingText:
    'Enter for a chance to win a Nutrioscale and get a prelaunch discount',
  waitingButtonText: 'join waiting list',
  waitingImageBg: WaitingImageBg,
  waitingImageBgSmall: WaitingSmallImage,
};

//----QalzyFeatures-----------------------------------------------------------
export const QalzyFeaturesData = {
  qalzyFeaturesTitle: 'Scan Every Type of Meal',
  qalzyFeaturesText:
    'From homemade meals to packaged snacks, Qalzy recognizes multiple ingredients on a plate, scans nutrition labels, and even adjusts for portion sizes, so you log exactly what you eat.',
  qalzyFeaturesImg1: QalzyFeaturesImg_1,
  qalzyFeaturesImg1Mobile: QalzyFeaturesImg_1_Mobile,
  qalzyFeaturesImg2: QalzyFeaturesImg_2,
  qalzyFeaturesImg2Mobile: QalzyFeaturesImg_2_Mobile,
};

//----TrackAnywhere-----------------------------------------------------------
export const TrackAnywhereData = {
  TrackAnywhereTitle: 'Track Anywhere With The Qalzy App',
  TrackAnywhereText:
    'Can’t bring your scale everywhere? No worries. The Qalzy app lets you scan barcodes, take photos of meals, or use voice commands to track calories wherever you are. Automatically syncs to your dashboard for a complete overview of your daily intake.',
  TrackAnywhereImg1: TrackAnywhereImg1,
  TrackAnywhereImg2: TrackAnywhereImg2,
  AppStore: AppStore,
  GooglePlay: GooglePlay,
};
