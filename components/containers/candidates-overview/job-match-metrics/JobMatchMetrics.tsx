"use client"
import { Button } from '@/components/ui/button'
import React, { useLayoutEffect } from 'react'
import SplitType from 'split-type'
import gsap from "gsap";


const JobMatchMetrics = () => {

    useLayoutEffect(() => {
        let title = new SplitType(".metrics")

        gsap.timeline({
            scrollTrigger: {
                trigger: "#metricsBox",
                // scrub: true,
                // start: "top 1%",
                // end: "bottom top",
                // markers: false
            }
        }).from(".metrics .char", {
            // scrollTrigger: "#metricsBox",
            y: 100,
            stagger: 0.05,
            duration: 0.5,
            rotate: 25,
            ease: "back.out(1.7)"

        })
    }, [])


    return (
        <div className='bg-light_gray p-6'>
            <div className='container lg:px-16 xl:px-20 py-6'>
                <div className='text-center mb-7'>
                    <span className='text-primary font-bold mb-6 inline-block'>Careers</span>
                    <h3 className='text-3xl md:text-4xl xl:text-5xl lg:max-w-2xl xl:max-w-3xl lg:mx-auto tracking-[-1.5px] font-medium'>Were on a mission to build the best developer platform</h3>
                    <p className='text-sm md:text-base text-foreground-lighter max-w-sm sm:max-w-md md:max-w-lg mx-auto my-5'>Explore remote possibilities and join our team to help us achieve it.</p>
                    <Button className='bg-primary h-0 py-4 mt-3'>Open Position</Button>
                </div>
                <hr />
                <div className='flex flex-wrap justify-between mt-5 '>
                    <div className='text-center '>
                        <h3 id='metricsBox' className=' metrics text-[5rem] font-bold text-blue-midnight_blue'>8M+</h3>
                        <p className='text-[1rem] font-semibold'>Matches Made</p>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-[5rem] metrics font-bold text-blue-midnight_blue'>150K+</h3>
                        <p className='text-[1rem] font-semibold'>Tech Jobs</p>
                    </div>
                    <div className='text-center'>
                        <h3 className=' metrics text-[5rem] font-bold leading-tight text-blue-midnight_blue'>10M+</h3>
                        <p className='text-[1rem] font-semibold'>Startup Ready Candidates</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobMatchMetrics