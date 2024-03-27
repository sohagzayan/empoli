"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { client_reviews, story_blog } from "@/utils/data"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"



const ReviewsCarousel = () => {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full overflow-x-clip py-10"
        >
            <CarouselContent>
                {client_reviews.map((review, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="">
                        <div className="bg-white p-8 rounded-[15px] border shadow-shadow1">
                            <h3 className="text-primary font-bold text-[18px] pb-4">{review.review_title}</h3>
                            <p className="font-light text-[14px] text-purple pb-10">{review.review}</p>
                            <div className="flex  items-center gap-2">
                                <div>
                                    <Image src={`/assets/images/${review.user.image}`} width={50} height={50} alt="user_profile " />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-purple -mb-1 ">{review.user.name}</h4>
                                    <p className="text-[13px] text-purple ">{review.user.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>




    )
}

export default ReviewsCarousel