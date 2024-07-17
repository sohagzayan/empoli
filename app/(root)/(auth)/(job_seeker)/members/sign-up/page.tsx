'use client'

import SignUpForm from '@/components/containers/job_seeker/SignUpForm'
import Header from '@/components/shared/Nav/Header'
import AuthNav from '@/components/shared/auth-nav/AuthNav'
import AuthTimeline from '@/components/shared/auth-timeline/AuthTimeline'
import HeaderController from '@/components/shared/header-controller/HeaderController'
import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle'
import { Button } from '@/components/ui/button'
import { registerValidationAsCandidateSchema } from '@/utils/validation-schemas'
import { Formik, FormikHelpers } from 'formik'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'
import { MdErrorOutline } from 'react-icons/md'
import { PiGoogleLogo } from 'react-icons/pi'
import { TbNotes } from 'react-icons/tb'
import { toast } from 'sonner'

const SignUp = () => {

    // console.log("session from sign up", session)
    // absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 mt-6
    return (
        <div className='bg-white min-h-full'>
            <div className='grid grid-cols-12 '>

                <div
                    className='col-span-4 bg-[#F8F8F8] border-r shadow-r  flex items-center justify-center   h-screen  w-full '>
                    <div>
                        <div className='flex items-center  gap-1 font-bold text-primary'>
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