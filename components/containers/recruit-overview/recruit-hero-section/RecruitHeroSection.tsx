"use client"
import React, { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import SplitType from 'split-type'
import { Button } from '@/components/ui/button';





const RecruitHeroSection = () => {

    useLayoutEffect(() => {
        let text = new SplitType("#candidates_overview_title")
        gsap.from(".char", {
            y: 100,
            stagger: 0.05,
            duration: 0.5,
            rotate: 25,
            ease: "back.out(1.7)"

        })
        gsap.fromTo("#candidates_overview_hero_content", {
            y: 200,
            duration: 0.5,
            ease: "back.out(1.7)"

        }, {
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)"

        })
        gsap.fromTo("#candidates_overview_hero_btn", {
            scale: 0,
            duration: 0.5,
            ease: "back.out(1.7)"

        }, {
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)"

        })


    }, [])
    return (
        <div className='container lg:px-16 xl:px-20 py-6'>
            <div className='pt-[9rem] pb-[120px] text-center'>
                <h1
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        lineHeight: '6rem'
                    }}
                    id='candidates_overview_title' className='candidates_overview_title text-[80px] font-bold'>
                    You have a job.
                    <br />
                    We have 10m+ job seekers.

                </h1>
                <div id='candidates_overview_hero_content' className=''>
                    <p className='text-[22px] py-6'>
                        Millions of startup-ready candidates, uniquely specific filters for finding niche talent, and all the tools you need to hire.
                        Sign up now & have everything set up in 10 minutes, for free.

                    </p>
                    <div className='flex items-center justify-center gap-5'>
                        <Button id='candidates_overview_hero_btn' className='bg-blue-midnight_blue text-white'>Sign up now</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecruitHeroSection