import React from 'react'
import QuickSearch from '../quick-search/QuickSearch';
import DynamicTitle from './DynamicTitle';
import Image from 'next/image';



const HeroSection = () => {
    return (
        <div className='container lg:px-16 xl:px-20  relative z-0'>
            <div className='absolute w-full h-full top-28 left-0 -z-10'>
                <Image
                    src="/assets/images/hero/slider-bg.png"
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }} // optional to control how the image is scaled
                />
            </div>

            <div className='mx-auto lg:col-span-6 lg:flex lg:items-center justify-center text-center'>
                <div className='relative z-10 pt-[90px] lg:pt-[120px]  mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='flex flex-col items-center  mx-auto max-w-2xl text-center'>
                        <DynamicTitle />
                        <p className="pt-2 text-text6 font-400 my-3 text-sm">Unlock endless opportunities and take the next step in your career journey. Whether you&rsquo;re chasing your passion or exploring new paths, we&rsquo;re here to help you find the perfect fit. Your dream job is just a click away—let&rsquo;s make it happen together!</p>
                    </div>
                </div>
            </div>
            <QuickSearch />

        </div>
    )
}

export default HeroSection