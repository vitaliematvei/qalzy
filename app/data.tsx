// import images
import Logo from '../public/Images/Header/LogoImg.svg';
import HeroMainImage from '../public/Images/Hero/hero-bg-2.jpg';
import HeroSmallImage from '../public/Images/Hero/hero-bg-small-2.jpg';
import OverviewRouterImage from '../public/Images/Overview/Router.svg';
import OverviewSinusImage from '../public/Images/Overview/Sinus.svg';
import OverviewSinusRouterImage from '../public/Images/Overview/SinusRouter.svg';
import FreshSaladImage from '../public/Images/Overview/Fresh-Salad-Cutted.jpg';
import KitchenImage from '../public/Images/CalorieConsumed/Kitchen.jpg';

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
