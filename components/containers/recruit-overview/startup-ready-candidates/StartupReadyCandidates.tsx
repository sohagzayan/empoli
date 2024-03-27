"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


const StartupReadyCandidates = () => {

    useLayoutEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#startup_ready_candidates_title",
            }
        }).fromTo("#startup_ready_candidates_title",
            {
                y: 200, opacity: 0, duration: 0.7,
                ease: "back.out(1.7)",
            }, {
            y: 0, duration: 0.7, opacity: 1,
            ease: "back.out(1.7)"

        },
        )

        gsap.timeline({
            scrollTrigger: {
                trigger: "#startup_ready_candidates_video",
            }
        }).fromTo("#startup_ready_candidates_video",
            {
                y: 200, opacity: 0, duration: 0.7,
                ease: "back.out(1.7)"

            }, {
            y: 0, duration: 0.7, opacity: 1,
            ease: "back.out(1.7)"

        },
        )

        gsap.timeline({
            scrollTrigger: {
                trigger: "#startup_ready_candidates_list",
            }
        }).fromTo("#startup_ready_candidates_list",
            {
                y: 200, opacity: 0, duration: 0.7,
                ease: "back.out(1.7)"

            }, {
            y: 0, duration: 0.7, opacity: 1,
            // stagger: 0.05,
            ease: "back.out(1.7)"

        },
        )
    }, [])


    return (
        <div id='brand_yourselfBox' className='bg-white p-6 border-b'>
            <div className='container lg:px-16 xl:px-20 py-6'>

                <div className='grid grid-cols-2 items-center gap-20'>
                    <div className='align-middle'>
                        <div >
                            {/* <Image id='startup_ready_candidates_image' src="/assets/images/brand288.png" style={{ width: "100%", height: "100%" }} width={0} height={0} sizes='100wv' alt="Ranch Investor" /> */}
                            <video id='startup_ready_candidates_video' autoPlay loop >
                                <source src="https://wellfound.com/images/gtm/GIF-RecruiterCuratedAndCuratedGlobal.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className='align-middle'>
                        <div>
                            <h2 id='startup_ready_candidates_title' className='text-2xl sm:text-3xl xl:text-4xl  tracking-[-1.5px] font-medium text-blue-midnight_blue'>10 million startup-ready candidates</h2>
                            <p className='text-foreground-light mt-4 text-xs sm:text-sm lg:text-base md:w-5/6 lg:w-full'>Create a profile that highlights your unique skills and preferences, <br /> then apply to jobs with just one click</p>
                            <div className='max-w-[300px] sm:max-w-md lg:max-w-md mt-10'>
                                <div className="border-t-2 border-primary w-4/12"></div>

                                <ul className='list-disc px-4 font-medium text-blue-midnight_blue mt-2 flex flex-col gap-3'>
                                    <li id='startup_ready_candidates_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Worldwide focus</h5>
                                        <p className='text-sm text-blue-midnight_blue'>
                                            Local & remote candidates in the US and abroad
                                        </p>
                                    </li>
                                    <li id='startup_ready_candidates_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Top tech talent</h5>
                                        <p className='text-sm text-blue-midnight_blue'>
                                            Local & remote candidates in the US and abroad
                                        </p>
                                    </li>
                                    <li id='startup_ready_candidates_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Startup-ready</h5>
                                        <p className='text-sm text-blue-midnight_blue'>
                                            Candidates on our platform are specifically interested in startups
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StartupReadyCandidates