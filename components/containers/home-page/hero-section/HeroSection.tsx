import React from 'react'
import QuickSearch from '../quick-search/QuickSearch';
import DynamicTitle from './DynamicTitle';
import Image from 'next/image';
import Marquee from '@/components/shared/Marquee/Marquee';



const HeroSection = () => {
    return (
        <div className='container lg:px-16 xl:px-20  relative z-0 overflow-x-clip'>
            <div className='absolute w-full h-full top-14 right-0 -z-20 pointer-events-none '>
                <img
                    src="/assets/images/hero/slider-shape.png"
                    alt=""
                    style={{ objectFit: 'cover' }}
                    className='w-full scale-x-125'
                />
            </div>
            <div className='absolute w-[1000px] h-full -top-10  -right-32 opacity-40 -z-20 pointer-events-none '>
                <img
                    src="/assets/images/hero/slider-glow.png"
                    alt=""
                    style={{ objectFit: 'cover' }}
                    className='w-full scale-x-125'
                />
            </div>
            <div className='absolute w-full h-full -top-0  left-0 opacity-90 -z-20 pointer-events-none '>
                <img
                    src="/assets/images/hero/slider-line-glow.png"
                    alt=""
                    style={{ objectFit: 'cover' }}
                    className='w-full scale-x-125'
                />
            </div>

            <div className='mx-auto lg:col-span-6 lg:flex lg:items-center justify-center text-center'>
                <div className='relative z-10 pt-[90px] lg:pt-[120px]  mx-auto w-[900px] px-6 lg:px-8'>
                    <div className='flex flex-col items-center  mx-auto max-w-2xl text-center'>
                        <div className='mb-5'>
                            <h2 className='text-text6 text-[17px] border border-[rgba(255,255,255,0.08)] px-6 py-1 rounded-full font-400'> <strong className='text-text5'>Welcome</strong> to a new era of <strong className='text-text5'>innovation</strong> with...</h2>
                        </div>
                        <DynamicTitle />
                        <p className=" text-text6 font-400  text-[16px]">Unlock endless opportunities and take the next step in your career journey. Whether you&rsquo;re chasing your passion or exploring new paths, we&rsquo;re here to help you find the perfect fit. Your dream job is just a click away—let&rsquo;s make it happen together!</p>
                    </div>
                </div>
            </div>
            <QuickSearch />
            <div className='my-10'>
                <Marquee />
            </div>
        </div>
    )
}

export default HeroSection