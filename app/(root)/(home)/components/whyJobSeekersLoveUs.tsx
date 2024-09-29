import { Button } from '@/components/common';
import Image from 'next/image';

const WhyJobSeekersLoveUs = () => {
  return (
    <div className="mx-auto p-6">
      <div>
        <h2 className="font-600 text-theme1">Got talent?</h2>
        <p className="mt-2 text-3xl font-500 text-white">
          Why job seekers love us
        </p>
        <div className="mt-8 flex flex-col gap-6">
          <div className="grid grid-cols-12 gap-8">
            <div
              className="col-span-2 flex h-[50px] w-[50px] items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            >
              <Image
                src="/assets/images/why-choose-us/why-choose1.svg"
                alt="why choose us"
                width={30}
                height={30}
              />
            </div>
            <div className="col-span-10">
              <p className="text-wrap text-text6">
                Connect directly with founders at top startups - no third party
                recruiters allowed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div
              className="col-span-2 flex h-[50px] w-[50px] items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            >
              <Image
                src="/assets/images/why-choose-us/why-choose2.svg"
                alt="why choose us"
                width={30}
                height={30}
              />
            </div>
            <div className="col-span-10">
              <p className="text-wrap text-text6">
                Everything you need to know, all upfront. View salary, stock
                options, and more before applying.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div
              className="col-span-2 flex h-[50px] w-[50px] items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            >
              <Image
                src="/assets/images/why-choose-us/why-choose3.svg"
                alt="why choose us"
                width={30}
                height={30}
              />
            </div>
            <div className="col-span-10">
              <p className="text-wrap text-text6">
                Say goodbye to cover letters - your profile is all you need. One
                click to apply and you{"'"}re done.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div
              className="col-span-2 flex h-[50px] w-[50px] items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            >
              <Image
                src="/assets/images/why-choose-us/why-choose4.svg"
                alt="why choose us"
                width={30}
                height={30}
              />
            </div>
            <div className="col-span-10">
              <p className="text-wrap text-text6">
                Unique jobs at startups and tech companies you can{'’'}t find
                anywhere else.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button text="Learn more" variant="primary" />
            <Button text="Sign up" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJobSeekersLoveUs;
