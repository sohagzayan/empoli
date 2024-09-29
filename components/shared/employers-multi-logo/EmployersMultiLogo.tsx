import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const EmployersMultiLogo = () => {
  return (
    <div className="shadow-shadow1 absolute bottom-[-40px] right-[50%] rounded-[15px] border bg-white px-[30px] py-[20px] md:right-[-10px]">
      <div className="text-center">
        <h3 className="py-2 text-[14px] font-bold text-purple">
          300k+ Employers
        </h3>
        <Image
          src="/assets/images/multi-logo.webp"
          width={150}
          height={150}
          alt="multi logo"
        />
      </div>
      <div className="bg-primary absolute left-[-20px] top-[-20px] flex h-[50px] w-[50px] items-center justify-center rounded-full text-white">
        <Check strokeWidth={3} />
      </div>
    </div>
  );
};

export default EmployersMultiLogo;
