"use client"
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import QuickSearch from '../quick-search/QuickSearch';

const HeroSection = () => {
    return (
        <div className='container lg:px-16 xl:px-20  relative'>

            <div className='mx-auto lg:col-span-6 lg:flex lg:items-center justify-center text-center'>
                <div className='relative z-10 pt-[90px] lg:pt-[120px]  flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8'>
                    <div className='flex flex-col items-center '>
                        <h1 className='text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl'>
                            <span className="block font-semibold bg-clip-text bg-gradient-to-b from-foreground to-foreground-light">  Explore a <span className='text-primary inline-block relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:rounded-full after:bg-primary'>World</span>  of Opportunities!</span>

                            <span className="block font-semibold bg-clip-text bg-gradient-to-b from-foreground to-foreground-light text-7xl mt-4">Open Doors to Your  <span className='text-primary inline-block relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:rounded-full after:bg-primary mt-4'>Future!</span></span>
                        </h1>
                        <p className="pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">Supabase is an open source Firebase alternative. <br className="hidden md:block" />Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.</p>
                    </div>

                </div>
            </div>
            <QuickSearch />
        </div>
    )
}

export default HeroSection