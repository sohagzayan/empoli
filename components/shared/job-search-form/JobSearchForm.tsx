import { MapPin, Search } from 'lucide-react';
import React from 'react';
import ChooseACategory from '../choose-a-category/ChooseACategory';
import { Button } from '@/components/ui/button';

const JobSearchForm = () => {
  return (
    <div className="bg-primary-50 mb-6 py-7">
      <div className="container lg:px-16 xl:px-20">
        <form action="">
          <div className="shadow-shadow_dark grid w-full grid-cols-12 gap-3 rounded-[15px] border bg-white px-8 py-[30px] md:py-[10px]">
            <div className="col-span-12 flex items-center md:col-span-4 md:border-r">
              <Search strokeWidth={1} />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="h-[60px] w-full border-none px-[15px] text-[14px] text-purple outline-none"
              />
            </div>
            <div className="col-span-12 flex items-center md:col-span-3 md:border-r">
              <MapPin strokeWidth={1} />
              <input
                type="text"
                placeholder="City or postcode"
                className="h-[60px] w-full border-none px-[15px] text-[14px] text-purple outline-none"
              />
            </div>
            <div className="col-span-12 flex w-full items-center md:col-span-3">
              <ChooseACategory />
            </div>
            <div className="col-span-12 flex w-full items-center justify-center md:col-span-2">
              <Button className="w-full">Find Jobs</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobSearchForm;
