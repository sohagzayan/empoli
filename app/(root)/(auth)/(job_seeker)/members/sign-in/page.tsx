'use client'
import HowItsWork from '@/components/containers/job_seeker/HowItsWork'
import SignInForm from '@/components/containers/job_seeker/SignInForm'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignInPage = () => {
    const router = useRouter()
    return (
        <div className='bg-white min-h-full'>
            <div className='grid grid-cols-12 '>
                <div className='col-span-4 h-screen bg-[#F8F8F8] border-r shadow-r '>
                    <div
                        className='  flex items-center justify-center     w-full '>
                        <div>
                            <div onClick={() => router.push("/")} className='flex items-center cursor-pointer  gap-1 font-bold text-primary py-2 ml-10'>
                                <div className='bg-primary text-secondary font-bold w-[25px] h-[25px] rounded-full flex items-center justify-center'>
                                    J
                                </div>
                                obber
                            </div>
                            <SignInForm />
                        </div>
                    </div>
                </div>
                <div className='col-span-8'>
                    <HowItsWork />
                </div>
            </div>
        </div>
    )
}

export default SignInPage