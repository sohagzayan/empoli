"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";  // Import autoplay CSS
import { Navigation, Autoplay } from "swiper/modules";  // Import Autoplay module
import { website_reviews } from "@/utils/data";
import Image from "next/image";
import { useRef, useEffect } from "react";
import SwiperCore from "swiper";
import { FaArrowRight } from "react-icons/fa";
import { NavigationOptions } from "swiper/types";

// Ensure Swiper modules are used
SwiperCore.use([Navigation, Autoplay]);

const WebsiteReviews = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            // Buttons are available and ready to be used for Swiper navigation
        }
    }, []);

    return (
        <div className="custom-container relative my-24">
            <div className="mb-10">
                <div>
                    <h2 className="text-theme1 font-600 mb-2">Quotes</h2>
                    <p className="text-white font-600">From our users</p>
                </div>
                <div className="absolute top-0 right-5 flex gap-4 z-50">
                    {/* Custom navigation buttons */}
                    <button
                        ref={prevRef}
                        className="bg-[rgba(255,255,255,0.03)] text-theme1 rounded-md p-5 shadow-md border-2 border-theme1"
                        aria-label="Previous Slide"
                    >
                        <FaArrowRight className="rotate-180" />
                    </button>
                    <button
                        ref={nextRef}
                        className="bg-[rgba(255,255,255,0.03)] text-theme1 rounded-md p-5 shadow-md border-2 border-theme1"
                        aria-label="Next Slide"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <Swiper
                onBeforeInit={(swiper) => {
                    // Type guard to check if navigation is of type NavigationOptions
                    const navigation = swiper.params.navigation as NavigationOptions;

                    if (navigation && typeof navigation !== "boolean") {
                        //@ts-ignore
                        navigation.prevEl = prevRef.current;
                        //@ts-ignore
                        navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                modules={[Navigation, Autoplay]}
                className="reviews"
                loop={true}  // Enable looping
                autoplay={{
                    delay: 3000,  // Set the autoplay delay to 3 seconds
                    disableOnInteraction: false,  // Ensure autoplay doesn't stop on interaction
                }}
                speed={1000}  // Set speed for smooth transitions (1 second)
            >
                {website_reviews?.map((review) => (
                    <SwiperSlide key={review.reviewTitle} className="bg-[rgba(255,255,255,0.03)] px-4 py-10 rounded-lg">
                        <div className="">
                            <div className="bg-themeDark w-[70px] h-[70px] rounded-full flex items-center justify-center mb-8">
                                <Image
                                    src="/assets/images/quates.svg"
                                    width={50}
                                    height={50}
                                    alt="quote"
                                    className=""
                                />
                            </div>
                            <h2 className="text-white text-xl font-600 mb-2">
                                {review?.reviewTitle}
                            </h2>
                            <h2 className="text-text6 font-400">{review?.reviewText}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default WebsiteReviews;
