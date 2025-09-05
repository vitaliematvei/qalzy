import { NOTIFICATION_BANNER_TEXT } from '@/app/data';

export default function NotificationBanner() {
  return (
    <div className="bg-[#828282] text-black w-full">
      <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xl font-medium" data-aos="fade-left">
          {NOTIFICATION_BANNER_TEXT}
        </p>
      </div>
    </div>
  );
}
