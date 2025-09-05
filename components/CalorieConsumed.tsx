import Image from 'next/image';

import { CalorieConsumedData } from '../app/data';
const { kitchen } = CalorieConsumedData;

export default function CalorieConsumed() {
  return (
    <div className="w-full max-w-full  shadow-xl overflow-hidden bg-white">
      <Image
        src={kitchen}
        alt="Kitchen Image"
        layout="responsive"
        objectFit="cover"
        className="rounded-2xl"
      />
    </div>
  );
}
