import { Button } from '@/components/ui/button';
import React from 'react';

const SubscribeNewsletter = () => {
  return (
    <div className="bg-primary-50">
      <div className="container mb-[-100px] lg:px-16 xl:px-20">
        <div className="bg-primary shadow-shadow_dark relative grid grid-cols-12 rounded-[15px] p-[50px]">
          <div className="col-span-12 lg:col-span-5">
            <h3 className="text-[40px] font-bold leading-tight text-white">
              Subscribe <br /> newsletter
            </h3>
            <p className="py-2 text-white">
              Be the first to recieve all latest post in your inbox
            </p>
          </div>
          <div className="col-span-12 flex flex-col items-center justify-center gap-8 md:flex-row lg:col-span-7">
            <div className="col-span-10 w-full">
              <input
                className="h-[50px] w-full rounded-lg px-5 outline-none"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="col-span-2">
              <Button className="text-primary hover:bg-primary-600 h-[50px] w-[170px] bg-white font-semibold uppercase hover:text-white">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
