"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


const OpportunitiesComeToYou = () => {


    useLayoutEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#opportunities_come_to_you_title",
            }
        }).fromTo("#find_work_title",
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
                trigger: "#opportunities_come_to_you_image",
            }
        }).fromTo("#opportunities_come_to_you_image",
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
                trigger: "#opportunities_come_to_you_list",
            }
        }).fromTo("#opportunities_come_to_you_list",
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
        <div className='bg-white p-6 border-b'>
            <div className='container lg:px-16 xl:px-20 py-6'>

                <div className='grid grid-cols-2 items-center gap-20'>
                    <div className='align-middle'>
                        <div >
                            <Image id='opportunities_come_to_you_image' src="/assets/images/connect_founder.png" style={{ width: "100%", height: "100%" }} width={0} height={0} sizes='100wv' alt="Ranch Investor" />
                        </div>
                    </div>
                    <div className='align-middle'>
                        <div>
                            <h2 id='opportunities_come_to_you_title' className='text-2xl sm:text-3xl xl:text-4xl  tracking-[-1.5px] font-medium text-blue-midnight_blue'>Let the opportunities come to you</h2>

                            <div className='max-w-[300px] sm:max-w-md lg:max-w-md mt-10'>
                                <div className="border-t-2 border-primary w-4/12"></div>

                                <ul className='list-disc px-4 font-medium text-blue-midnight_blue mt-2 flex flex-col gap-2'>
                                    <li id='opportunities_come_to_you_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Connect with founders</h5>
                                        <p className='text-sm text-blue-midnight_blue'>Let founders pitch you directly on their opportunity.</p>
                                    </li>
                                    <li id='opportunities_come_to_you_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Get featured</h5>
                                        <p className='text-sm text-blue-midnight_blue'>Feature your profile even further and make 3x more connections</p>
                                    </li>
                                    <li id='opportunities_come_to_you_list'>
                                        <h5 className='font-semibold text-blue-midnight_blue mb-1'>Unique roles, exciting teams</h5>
                                        <p className='text-sm text-blue-midnight_blue'>Discover unique jobs with future-defining teams</p>
                                    </li>
                                </ul>

                                <Button className='bg-blue-midnight_blue hover:bg-blue-midnight_blue/90 mt-4'>Get started</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpportunitiesComeToYou