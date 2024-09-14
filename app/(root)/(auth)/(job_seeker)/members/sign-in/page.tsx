'use client'
import HowItsWork from '@/components/containers/job_seeker/HowItsWork'
import SignInForm from '@/components/containers/job_seeker/SignInForm'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignInPage = () => {
    const router = useRouter()
    return (
        <div className='bg-white min-h-full'>
            <div className='grid grid-cols-12 h-screen'>
                <div className=' col-span-12 md:col-span-5 lg:col-span-5 bg-bgPrimary border-r shadow-r '>
                    <div className='flex justify-center items-center h-full '>
                        <SignInForm />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-7 lg:col-span-7 hidden md:block lg:block'>
                    <HowItsWork />
                </div>
            </div>
        </div>
    )
}

export default SignInPage