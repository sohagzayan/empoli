"use client"
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import QuickSearch from '../quick-search/QuickSearch';
import { motion } from 'framer-motion';



const HeroSection = () => {
    return (
        <div className='container lg:px-16 xl:px-20  relative'>



            <div className='mx-auto lg:col-span-6 lg:flex lg:items-center justify-center text-center'>
                <div className='relative z-10 pt-[90px] lg:pt-[120px]  mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='flex flex-col items-center  mx-auto max-w-2xl text-center'>
                        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                            Dream Job Awaits! Discover What{"’"}s Next!
                        </h1>
                        <p className="pt-2 text-gray400 font-400 my-3 text-sm">Unlock endless opportunities and take the next step in your career journey. Whether you're chasing your passion or exploring new paths, we’re here to help you find the perfect fit. Your dream job is just a click away—let's make it happen together!</p>
                    </div>

                </div>
            </div>
            <QuickSearch />
        </div>
    )
}

export default HeroSection