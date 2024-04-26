"use client"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'


let review = [
  { id: 1, message: "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI." },
  { id: 1, message: "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI." },
  { id: 1, message: "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI." },
  { id: 1, message: "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI." },
  { id: 1, message: "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI." },
  { id: 1, message: "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI." },
  { id: 1, message: "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI." },
]

const ReviewFromOurUsers = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className='p-6'>
      <div className='container px-5 lg:px-16 xl:px-20'>
        <div>
          <p className='font-bold text-primary mb-5'>Feedback</p>
          <h2 className='text-2xl sm:text-3xl xl:text-4xl  tracking-[-1.5px] font-medium text-blue-midnight_blue mb-2'>From our users</h2>
        </div>
        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,

            }}
            plugins={[plugin.current]}

            className="w-full "
          >
            <CarouselContent>
              {review.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                  <div className="p-1 h-[300px]">
                    <div className='bg-primary/5 text-blue-midnight_blue relative h-[300px] flex items-center justify-center'>
                      <div className='absolute top-3 left-3'>
                        <Image src="/assets/images/quote.svg" width={70} height={70} alt="Ranch Investor" />
                      </div>
                      <div className=" p-6">
                        <span className="text-xl font-medium">
                          <p className=''>{review.message}</p>
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
  )
}

export default ReviewFromOurUsers