import { Bookmark, Briefcase, Clock4, DollarSign, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface FeaturedJobsCartType {
  data: {
    image: string;
    job_title: string;
    company: string;
    location: string;
    posted_time: string;
    salary_range: string;
    employment_type: string;
    visibility: string;
    urgency: string;
  };
}

const FeaturedJobsCart = ({ data }: FeaturedJobsCartType) => {
  return (
    <div className="shadow-shadow1 relative rounded-[10px] border bg-white bg-opacity-30 p-[30px]">
      <div className="flex gap-6">
        <div>
          <Image
            src={`/assets/images/${data.image}`}
            alt="profile"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h3 className="pb-2 text-[18px] font-bold text-purple">
            {data.job_title}
          </h3>
          <ul className="flex w-full items-center gap-2 py-1 font-light text-purple">
            <li className="flex items-center gap-1 text-[14px]">
              <Briefcase size={20} strokeWidth={1} />
              {data.company}
            </li>
            <li className="flex items-center gap-1 text-[14px]">
              <MapPin size={20} strokeWidth={1} />
              {data.location}
            </li>
            <li className="hidden md:block">
              <div className="flex items-center gap-1 text-[14px]">
                <Clock4 size={20} strokeWidth={1} />
                {data.posted_time}
              </div>
            </li>
            <li className="hidden md:block">
              <div className="flex items-center gap-1 text-[14px]">
                <DollarSign size={20} strokeWidth={1} />
                {data.salary_range}
              </div>
            </li>
          </ul>
          <ul className="flex items-center gap-4 py-2">
            <li className="bg-primary text-primary rounded-full bg-opacity-10 px-[15px] py-[2px] text-[14px] font-light">
              {data.employment_type}
            </li>
            <li className="rounded-full bg-[#34a853] bg-opacity-10 px-[15px] py-[2px] text-[14px] font-light text-[#34a853]">
              {data.visibility}
            </li>
            <li className="rounded-full bg-[#f9ab00] bg-opacity-10 px-[15px] py-[2px] text-[14px] font-light text-[#f9ab00]">
              {data.urgency}
            </li>
          </ul>
        </div>
      </div>
      <div className="hover:bg-primary text-primary-500 absolute right-4 top-4 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-in-out hover:text-white">
        <Bookmark size={20} strokeWidth={1} />
      </div>
    </div>
  );
};

export default FeaturedJobsCart;
