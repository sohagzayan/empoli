'use client'
import SignUpForm from '@/components/containers/job_seeker/SignUpForm'
import AuthTimeline from '@/components/shared/auth-timeline/AuthTimeline'
import { useRouter } from 'next/navigation'
import React from 'react'


const SignUp = () => {
    const router = useRouter()
    6
    return (
        <div className='bg-white min-h-full'>
            <div className='grid grid-cols-12 h-screen'>
                <div
                    className='col-span-12 md:col-span-6 lg:col-span-5 bg-[#F8F8F8] border-r shadow-r  flex items-center justify-center     w-full '>
                    <SignUpForm />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-7 hidden md:block lg:block'>
                    <div className='flex items-center justify-center h-full'>
                        <div>
                            <h2 className='text-5xl font-semibold text-primary font-apercu-regular'>How its work</h2>
                            <p className='text-primary font-apercu-regular font-light mt-4 ' >Pick up where you left off.</p>
                            <AuthTimeline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp