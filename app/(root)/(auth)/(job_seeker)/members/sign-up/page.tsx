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
            <div className='grid grid-cols-12 '>

                <div
                    className='col-span-4 bg-[#F8F8F8] border-r shadow-r  flex items-center justify-center   h-screen  w-full '>
                    <div>
                        <div onClick={() => router.push("/")} className='flex items-center  gap-1 font-bold text-primary'>
                            <div className='bg-primary text-secondary font-bold w-[25px] h-[25px] rounded-full flex items-center justify-center'>
                                J
                            </div>
                            obber
                        </div>
                        <SignUpForm />

                    </div>
                </div>
                <div className='col-span-8'>
                    <div className='flex items-center justify-center h-full'>
                        <div>
                            <h2 className='text-5xl font-semibold text-blue-midnight_blue '>How its work</h2>
                            <p className='text-blue-midnight_blue font-light mt-4 ' >Pick up where you left off.</p>
                            <AuthTimeline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp