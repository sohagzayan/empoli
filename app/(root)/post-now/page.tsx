'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LuArrowRight } from 'react-icons/lu';
import HowTtWorks from '@/components/containers/post-now/how-it-works/HowTtWorks';
import { useRouter } from 'next/navigation';

const PostNow = () => {
  const router = useRouter();

  return (
    <div>
      <div className="bg-bread_crump-banners relative bg-cover bg-center bg-no-repeat py-10">
        <div className="container lg:px-16 xl:px-20">
          <div className="relative mx-auto flex h-16 justify-between py-4">
            <nav className="flex w-full items-center justify-between">
              <Image
                src="/assets/images/footer_logo.png"
                width={150}
                height={150}
                alt="logo"
              />
              <div>
                <Button className="text-blue-midnight_blue hover:bg-white/80 rounded-full bg-white px-10 py-6 text-[16px] font-semibold">
                  Profile
                </Button>
              </div>
            </nav>
          </div>

          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <h2 className="text-foreground text-4xl font-medium text-white sm:text-5xl sm:leading-none lg:text-7xl">
                Post a job in minutes
              </h2>
              <p className="text-foreground my-3 pt-2 text-sm font-normal text-white sm:mt-5 sm:text-base lg:mb-0 lg:text-lg">
                Apper presents itself as a self-service hiring platform,
                dedicated to expediting and simplifying the candidate search
                process for small businesses. We take great pride in offering a
                seamless experience tailored specifically to your needs. It
                would be our utmost pleasure to assist you in swiftly finding
                the ideal candidates for your team with unparalleled ease and
                efficiency
              </p>
              <Button
                onClick={() => router.push('/post-now/create')}
                className="bg-blue-midnight_blue hover:bg-blue-midnight_blue/80 group mx-auto mt-10 flex h-[68px] min-w-[300px] items-center gap-2 rounded-full text-[20px]"
              >
                Post a job
                <span className="transition-all duration-200 ease-in-out group-hover:translate-x-5">
                  <LuArrowRight size={22} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <HowTtWorks />

        <div className="bg-primary mb-10 py-8">
          <div className="container flex items-center justify-center lg:px-16 xl:px-20">
            <div className="flex items-center gap-4 text-white">
              <p className="font-medium">
                Post a job and manage your hiring process for $99/month USD per
                job posting{' '}
              </p>
              <Button
                onClick={() => router.push('/post-now/create')}
                className="bg-blue-midnight_blue hover:bg-blue-midnight_blue/80 group flex h-[50px] min-w-[150px] items-center gap-2 rounded-full text-[16px]"
              >
                Post a job
                <span className="transition-all duration-200 ease-in-out group-hover:translate-x-5">
                  <LuArrowRight size={22} />
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-10 flex flex-col items-center justify-center">
          <h2 className="text-foreground text-blue-midnight_blue mb-10 text-4xl font-medium sm:text-5xl sm:leading-none lg:text-6xl">
            Proudly Featured in
          </h2>
          <div className="flex items-center gap-10">
            <div className="rounded-md border bg-white p-10 text-center shadow">
              <h3 className="text-blue-midnight_blue mb-3 text-3xl font-medium">
                20 Million
              </h3>
              <p>
                Candidates visit Joblist <br /> every year
              </p>
            </div>
            <div className="rounded-md border bg-white p-10 text-center shadow">
              <h3 className="text-blue-midnight_blue mb-3 text-3xl font-medium">
                5 Million
              </h3>
              <p>
                Applications Delivered <br /> by Joblist
              </p>
            </div>
          </div>

          <h2 className="text-foreground text-blue-midnight_blue mb-10 mt-10 text-4xl font-medium sm:text-5xl sm:leading-none lg:text-6xl">
            Ready to start hiring?
          </h2>

          <Button
            onClick={() => router.push('/post-now/create')}
            className="bg-blue-midnight_blue hover:bg-blue-midnight_blue/80 group mx-auto mt-3 flex h-[68px] min-w-[300px] items-center gap-2 rounded-full text-[20px]"
          >
            Post a job
            <span className="transition-all duration-200 ease-in-out group-hover:translate-x-5">
              <LuArrowRight size={22} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostNow;
