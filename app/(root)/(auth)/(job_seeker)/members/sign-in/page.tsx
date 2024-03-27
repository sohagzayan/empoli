'use client'

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
            <div>
                <AuthNav />
            </div>
            <div className='grid grid-cols-12 '>
                <div
                    className='col-span-4 bg-[#F8F8F8] border-r shadow-r  flex items-center justify-center   h-screen  w-full '>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={loginValidationSchema}
                        validateOnChange={false}
                        validateOnBlur={false}
                        onSubmit={(values, actions) => {
                            onSubmit(values, actions)
                        }}
                    >
                        {({ values,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <div className=' '>
                                <form action=""
                                    onSubmit={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                        handleSubmit(e)
                                    }}>

                                    <div className='flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]'>

                                        <div className='mb-6'>
                                            <h3 className=' text-blue-midnight_blue mt-8 mb-2 text-2xl lg:text-3xl'>Welcome back</h3>
                                            <p className='text-sm text-foreground-light'>Sign in to your account</p>
                                        </div>



                                        <div>
                                            <div className=' bg-transparent w-full flex items-center justify-center'>
                                                <button
                                                    onClick={signInWithGoogle}
                                                    className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-transparent border-strong hover:border-stronger focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong w-full flex items-center justify-center text-base px-4 py-2'>
                                                    <PiGoogleLogo size={22} />
                                                    Continue with google
                                                </button>
                                            </div>
                                        </div>


                                        <div className='relative my-4'>
                                            <div className='absolute inset-0 flex items-center'>
                                                <div className='w-full border-t border-strong'></div>
                                            </div>
                                            <div className='relative flex justify-center text-sm'>
                                                <span className='px-2 text-sm bg-studio text-foreground bg-[#F8F8F8]'>or</span>
                                            </div>
                                        </div>




                                        <div className='mb-4'>
                                            <label
                                                htmlFor="email" className='block text-foreground-light text-sm mb-1'>Email</label>
                                            <input
                                                id='email'
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                type="email"
                                                className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border text-sm px-4 py-2 ${errors.email ? 'border-red-500' : 'border-control '}`}
                                                placeholder='you@example.com' />
                                            <p data-state="show" className="text-red-500 mt-1 transition-all  data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm">
                                                {errors.email}
                                            </p>
                                        </div>

                                        <div className='mb-4'>
                                            <label htmlFor="password" className='block text-foreground-light text-sm mb-1'>Password</label>
                                            <input
                                                id='password'
                                                type="password"
                                                name='password'
                                                onChange={handleChange}
                                                className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border  text-sm px-4 py-2 ${errors.password ? 'border-red-500' : 'border-control'}`}
                                                placeholder='you@example.com' />
                                            <p data-state="show" className="text-red-500 mt-1 transition-all  data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm">
                                                {errors.password}
                                            </p>
                                        </div>

                                        <Button className={`relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-white border-brand shadow-sm  ${loading ? 'bg-primary/60  hover:bg-primary/60 pointer-events-none  ' : 'bg-primary  hover:bg-primary pointer-events-auto'
                                            }`}>
                                            {loading && <LoadingCircle />}
                                            Sign In</Button>


                                        <div className='my-8 self-center text-sm text-blue-midnight_blue font-light'>
                                            <span className='text-foreground-light'>Have an account? </span>
                                            <Link href='/members/sign-up' className='font-medium'> Sign Up Now</Link>
                                        </div>
                                        <div className='sm:text-center'>
                                            <p className='text-xs text-foreground-lighter text-blue-midnight_blue sm:mx-auto sm:max-w-sm'>
                                                By continuing, you agree to Supabases
                                                <Link href="/" className='underline hover:text-foreground-light'> Terms of Service </Link>
                                                and
                                                <Link href="/" className='underline hover:text-foreground-light'> Privacy Policy </Link>
                                                , and to receive periodic emails with updates.
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </Formik>
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

export default SignInPage