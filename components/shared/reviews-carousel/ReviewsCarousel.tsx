'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { client_reviews } from '@/utils/data';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const ReviewsCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full overflow-x-clip py-10"
    >
      <CarouselContent>
        {client_reviews.map((review, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
              <div className="shadow-shadow1 rounded-[15px] border bg-white p-8">
                <h3 className="text-primary pb-4 text-[18px] font-bold">
                  {review.review_title}
                </h3>
                <p className="pb-10 text-[14px] font-light text-purple">
                  {review.review}
                </p>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={`/assets/images/${review.user.image}`}
                      width={50}
                      height={50}
                      alt="user_profile "
                    />
                  </div>
                  <div>
                    <h4 className="-mb-1 font-semibold text-purple">
                      {review.user.name}
                    </h4>
                    <p className="text-[13px] text-purple">
                      {review.user.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ReviewsCarousel;
