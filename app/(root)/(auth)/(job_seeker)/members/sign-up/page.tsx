'use client'
import SignUpForm from '@/components/containers/job_seeker/SignUpForm'
import AuthTimeline from '@/components/shared/auth-timeline/AuthTimeline'
import { useRouter } from 'next/navigation'
import React, { useRef, useEffect } from 'react'


const SignUp = () => {
    const router = useRouter();



    return (
        <div className='bg-white min-h-full'>
            <div className='bg-primary w-full text-white py-6 text-center text-xl font-700 block md:hidden lg:hidden'>
                JobJoy.
            </div>
            <div className='grid grid-cols-12 h-screen'>
                <div className='col-span-12 md:col-span-6 lg:col-span-7 bg-customDarkBg  flex items-center justify-center w-full'>

                    <SignUpForm />
                </div>
                <div className='col-span-12 md:col-span-6  lg:col-span-5 hidden md:block lg:block'>
                    <div className='flex items-center justify-center h-full bg-primary'>
                        <div className=''>
                            <div className='mb-6'>
                                <h2 className='text-5xl  font-700 text-white'>How it works</h2>
                            </div>
                            <AuthTimeline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
