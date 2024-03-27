'use client'
import React from 'react'
import Header from '@/components/shared/Nav/Header'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const RecruiterPostJobs = () => {
    const router = useRouter()

    return (
        <div>
            <Header variant='primary' />
            <div className='container lg:px-16 xl:px-20 '>
                <div className='mx-auto max-w-4xl lg:col-span-6 lg:flex lg:items-center justify-center text-center'>
                    <div className='relative z-10 lg:h-auto pt-[90px] lg:pt-[90px]  flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8'>
                        <div className='flex flex-col items-center'>
                            <h1 className="text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl font-medium">
                                Discover <span className='text-primary'> a better way </span>
                                to recruit remote talent
                            </h1>
                            <p className="pt-2 text-foreground my-3  sm:mt-5 lg:mb-0 sm:text-base lg:text-lg text-blue-midnight_blue text-[14px] font-normal">
                                Apper, a pioneer in remote, hybrid, and flexible work solutions since 2007, is dedicated to supporting your hiring needs. With over a decade of expertise, we offer a comprehensive platform and a vast network of qualified candidates to streamline your recruitment process. Let us assist you in finding the perfect fit for your organization today.
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Button
                                onClick={() => router.push("/members/recruiter/sign-up")}
                                className='relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4  focus-visible:outline-offset-1 border bg-primary hover:bg-primary/80 border-brand focus-visible:outline-brand-600 shadow-sm data-[state=open]:bg-brand-button/80 data-[state=open]:outline-brand-600 text-sm px-4 py-2 text-white'>Create an account</Button>
                            <Button
                                onClick={() => router.push("/members/recruiter/sign-in")}
                                className='relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover shadow-sm text-sm px-4 py-2'>Already have account?</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RecruiterPostJobs
