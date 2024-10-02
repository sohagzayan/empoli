import { Briefcase, Clock4, DollarSign, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const JobDetailsHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-6">
        <div>
          <Image
            src="/assets/images/company-logo.webp"
            alt="company-logo"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h3 className="pb-2 text-[22px] font-bold text-purple">
            Recruiting Coordinator
          </h3>
          <ul className="flex w-full flex-wrap items-center gap-2 py-1 font-light text-purple">
            <li className="flex items-center gap-1 text-[14px]">
              <Briefcase size={15} strokeWidth={1} />
              Catalyst
            </li>
            <li className="flex items-center gap-1 text-[14px]">
              <MapPin size={15} strokeWidth={1} />
              London, UK
            </li>
            <li className="hidden md:block">
              <div className="flex items-center gap-1 text-[14px]">
                <Clock4 size={15} strokeWidth={1} />
                11 hours ago
              </div>
            </li>
            <li className="hidden md:block">
              <div className="flex items-center gap-1 text-[14px]">
                <DollarSign size={15} strokeWidth={1} />
                $35k - $45k
              </div>
            </li>
          </ul>
          <ul className="flex flex-wrap items-center gap-4 py-2">
            <li className="bg-primary text-primary rounded-full bg-opacity-10 px-[15px] py-[2px] text-[14px] font-light">
              Freelancer
            </li>
            <li className="rounded-full bg-[#34a853] bg-opacity-10 px-[15px] py-[2px] text-[14px] font-light text-[#34a853]">
              Private
            </li>
            <li className="rounded-full bg-[#f9ab00] bg-opacity-10 px-[15px] py-[2px] text-[14px] font-light text-[#f9ab00]">
              Urgent
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsHeader;
