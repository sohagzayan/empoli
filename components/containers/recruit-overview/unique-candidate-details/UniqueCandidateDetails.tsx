"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


const UniqueCandidateDetails = () => {

    useLayoutEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#unique_candidate_details_title",
            }
        }).fromTo("#unique_candidate_details_title",
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
                trigger: "#unique_candidate_details_image",
            }
        }).fromTo("#unique_candidate_details_image",
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
                trigger: "#unique_candidate_details_list",
            }
        }).fromTo("#unique_candidate_details_list",
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
                        <div>
                            <h2 id='unique_candidate_details_title' className='text-2xl sm:text-3xl xl:text-4xl  tracking-[-1.5px] font-medium text-blue-midnight_blue'>Unique candidate details you cant find anywhere else</h2>
                            <p className='text-foreground-light mt-4 text-xs sm:text-sm lg:text-base md:w-5/6 lg:w-full'>Create a profile that highlights your unique skills and preferences, <br /> then apply to jobs with just one click</p>
                            <div className='max-w-[300px] sm:max-w-md lg:max-w-md mt-10'>
                                <div className="border-t-2 border-primary w-4/12"></div>

                                <ul className='list-disc px-4 font-medium text-blue-midnight_blue mt-2 flex flex-col gap-3'>
                                    <li id='unique_candidate_details_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Job search status</h5>
                                        <p className='text-sm text-blue-midnight_blue'>
                                            Well tell you if a candidate is ready to interview or open to offers
                                        </p>
                                    </li>
                                    <li id='unique_candidate_details_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Skills & experience</h5>
                                        <p className='text-sm text-blue-midnight_blue'>
                                            We give candidates the ability to showcase this in unique ways, like detailing their biggest accomplishment
                                        </p>
                                    </li>
                                    <li id='unique_candidate_details_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Timezones</h5>
                                        <p className='text-sm text-blue-midnight_blue'>
                                            You can filter by timezones and see exactly how many hours ahead or behind a candidate is
                                        </p>
                                    </li>
                                    <li id='unique_candidate_details_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Remote preferences</h5>
                                        <p className='text-sm text-blue-midnight_blue'>
                                            Search by candidates who are open to remote work and see what kind of remote culture theyre looking for
                                        </p>
                                    </li>
                                    <li id='unique_candidate_details_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Assessments</h5>
                                        <p className='text-sm text-blue-midnight_blue'>
                                            See video and engineering assessments to help you evaluate skills further
                                        </p>
                                    </li>

                                </ul>
                                <div className='mt-4'>
                                    <Button id='candidates_overview_hero_btn' className='bg-blue-midnight_blue text-white'>
                                        Find talent
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='align-middle'>
                        <div >
                            <Image id='unique_candidate_details_image' src="/assets/images/assessmentsProfile.png" width={450} height={450} sizes='100wv' alt="Ranch Investor" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default UniqueCandidateDetails