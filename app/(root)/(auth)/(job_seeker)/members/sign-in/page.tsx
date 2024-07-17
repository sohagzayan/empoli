'use client'

import HowItsWork from '@/components/containers/job_seeker/HowItsWork'
import SignInForm from '@/components/containers/job_seeker/SignInForm'
import Header from '@/components/shared/Nav/Header'
import AuthNav from '@/components/shared/auth-nav/AuthNav'
import AuthTimeline from '@/components/shared/auth-timeline/AuthTimeline'
import HeaderController from '@/components/shared/header-controller/HeaderController'
import LoadingCircle from '@/components/shared/loading-circle/LoadingCircle'
import { Button } from '@/components/ui/button'
import { loginValidationSchema, registerValidationAsCandidateSchema } from '@/utils/validation-schemas'
import { Formik, FormikHelpers } from 'formik'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'
import { PiGoogleLogo } from 'react-icons/pi'
import { TbNotes } from 'react-icons/tb'
import { toast } from 'sonner'

const SignInPage = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
        setLoading(true)

        const loadingToast = toast.loading("Signing in...", {
            position: 'top-left',
            // autoClose: false
        })

        try {
            const { email, password } = values
            console.log("login values", values)

            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
                // callbackUrl: '/',
            })

            if (res?.error) {
                toast.error(res.error, {
                    className: 'text-primary',
                    duration: 100000
                })


            }
            if (res?.ok) {
                toast.success("Login successful")
            }

            toast.dismiss(loadingToast);


            console.log("res > signin ", res)
            setLoading(false)
            // toast.success(data.message)

        } catch (error: any) {
            setLoading(false)
            toast.error(error.message)
            actions.setErrors({ email: error.message || 'An error occurred' })
        }
        actions.setSubmitting(false)
    }


    const signInWithGoogle = async (event: any) => {
        try {
            event.preventDefault()
            await signIn('google', { callbackUrl: '/' })
        } catch (error: any) {
            console.error(error)
        }
    }



    return (
        <div className='bg-white min-h-full'>
            <div className='grid grid-cols-12 '>
                <div className='col-span-4 h-screen bg-[#F8F8F8] border-r shadow-r '>

                    <div
                        className='  flex items-center justify-center     w-full '>
                        <div>
                            <div className='flex items-center  gap-1 font-bold text-primary py-2 ml-10'>
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