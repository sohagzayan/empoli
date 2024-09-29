'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const review = [
  {
    id: 1,
    message:
      "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
  },
  {
    id: 1,
    message:
      "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
  },
  {
    id: 1,
    message:
      "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
  },
  {
    id: 1,
    message:
      "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
  },
  {
    id: 1,
    message:
      "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
  },
  {
    id: 1,
    message:
      "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
  },
  {
    id: 1,
    message:
      "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
  },
];

const ReviewFromOurUsers = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <div className="p-6">
      <div className="container px-5 lg:px-16 xl:px-20">
        <div>
          <p className="text-primary mb-5 font-bold">Feedback</p>
          <h2 className="text-blue-midnight_blue mb-2 text-2xl font-medium tracking-[-1.5px] sm:text-3xl xl:text-4xl">
            From our users
          </h2>
        </div>
        <div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {review.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-[300px] p-1">
                    <div className="bg-primary/5 text-blue-midnight_blue relative flex h-[300px] items-center justify-center">
                      <div className="absolute left-3 top-3">
                        <Image
                          src="/assets/images/quote.svg"
                          width={70}
                          height={70}
                          alt="Ranch Investor"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xl font-medium">
                          <p className="">{review.message}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ReviewFromOurUsers;
