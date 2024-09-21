'use client'

import Header from '@/components/shared/Nav/Header'
import AuthTimeline from '@/components/shared/auth-timeline/AuthTimeline'
import { Button } from '@/components/ui/button'
import { registerValidationAsCandidateSchema } from '@/utils/validation-schemas'
import { Formik, FormikHelpers } from 'formik'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
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
    const router = useRouter()
    const searchParams = useSearchParams()
    let sign_up_as = searchParams.get('as')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
        setLoading(true)
        try {
            const { email, password, firstName, lastName } = values
            console.log("all signup values:", values)
            let response: any = await fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    // role: "candidate"
                }),
            })
            const data = await response.json()
            console.log("res data", data)
            if (!response.ok) {
                throw new Error(data.message)
            }
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/',
            })
            setLoading(false)
            toast.success(data.message)

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
            <div className='absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 mt-6'>
                <nav className='relative flex items-center justify-between sm:h-10'>
                    <div>
                        <Image src="/assets/images/logo.png" width={100} height={100} alt='logo' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button onClick={() => router.push('/jobs')} className='bg-transparent text-blue-midnight_blue hover:bg-gray-50 whitespace-nowrap cursor-pointer font-bold flex items-center rounded-md'> <BiSearchAlt2 size={22} className='text-blue-midnight_blue mr-1' />
                            Find Jobs
                        </Button>

                        <Button
                            onClick={() => router.push('/sign-in')}
                            className='bg-transparent text-blue-midnight_blue hover:bg-gray-50 whitespace-nowrap cursor-pointer font-bold flex items-center rounded-md'>
                            <LuUser2 size={22} className='text-blue-midnight_blue mr-1' />
                            Login
                        </Button>

                        <Button
                            onClick={() => router.push('/sign-up')}
                            className='bg-blue-midnight_blue text-white  hover:bg-blue-midnight_blue whitespace-nowrap cursor-pointer font-bold flex items-center uppercase px-3 py-0 rounded-md'>
                            Sign Up
                        </Button>

                        <Button className='bg-transparent text-blue-midnight_blue hover:bg-gray-50 whitespace-nowrap cursor-pointer font-bold flex items-center rounded-md'>
                            <IoBriefcaseOutline size={22} className='text-blue-midnight_blue mr-1' />

                            For recruiter
                        </Button>
                    </div>
                </nav>
            </div>
            <div className='grid grid-cols-12 '>
                <div
                    className='col-span-4 bg-[#F8F8F8] border-r shadow-r  flex items-center justify-center   h-screen  w-full '>
                    <Formik
                        initialValues={{ email: '', fullName: '', password: '' }}
                        validationSchema={registerValidationAsCandidateSchema}
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
                                <form onSubmit={(e) => {
                                    e.stopPropagation()
                                    handleSubmit(e)
                                }}>

                                    <div className='flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]'>

                                        <div className='mb-6'>
                                            <h3 className=' text-blue-midnight_blue mt-8 mb-2 text-2xl lg:text-3xl'>Welcome back</h3>
                                            <p className='text-sm text-foreground-light'>Sign in to your account</p>
                                        </div>



                                        <div>
                                            <div className=' bg-transparent w-full flex items-center justify-center'>
                                                <Button
                                                    onClick={signInWithGoogle}
                                                    className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-transparent border-strong hover:border-stronger focus-visible:outline-border-strong data-[state=open]:border-stronger hover:bg-transparent data-[state=open]:outline-border-strong w-full flex items-center justify-center text-base px-4 py-2'>
                                                    <PiGoogleLogo size={22} />
                                                    Continue with google
                                                </Button>
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


                                        <div className='mb-4 '>
                                            <div className='relative'>
                                                <label htmlFor="fullName" className='block text-foreground-light text-sm mb-1'>Full Name</label>
                                                <input
                                                    name='fullName'
                                                    id='fullName'
                                                    value={values.fullName}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.fullName && 'border-red-600'}`}
                                                    placeholder='enter text' />

                                                {errors.fullName && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                        <MdErrorOutline size={18} />
                                                    </div>
                                                </div>}
                                            </div>

                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.fullName}</p>
                                        </div>


                                        {/* <div className='mb-4'>
                                            <div className=' relative'>
                                                <label htmlFor="lastName" className='block text-foreground-light text-sm mb-1'>Last Name</label>
                                                <input
                                                    name='lastName'
                                                    id='lastName'
                                                    type="text"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.lastName && 'border-red-600'}`}
                                                    placeholder='hossain' />

                                                {errors.lastName && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                        <MdErrorOutline size={18} />
                                                    </div>
                                                </div>}
                                            </div>
                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.lastName}</p>
                                        </div> */}

                                        <div className='mb-4'>
                                            <div className='relative'>
                                                <label htmlFor="email" className='block text-foreground-light text-sm mb-1'>
                                                    {sign_up_as == "recruiter" ? "Work Email" : "Email"}
                                                </label>
                                                <input
                                                    name='email'
                                                    id='email'
                                                    type="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.email && 'border-red-600'}`}
                                                    placeholder='you@example.com' />

                                                {errors.email && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                        <MdErrorOutline size={18} />
                                                    </div>
                                                </div>}
                                            </div>
                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.email}</p>
                                        </div>

                                        <div className='mb-4'>
                                            <div className='relative'>
                                                <label htmlFor="password" className='block text-foreground-light text-sm mb-1'>Password</label>
                                                <input
                                                    id='password'
                                                    name='password'
                                                    type={showPassword ? "text" : "password"}
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.password && 'border-red-600'}`}
                                                    placeholder='••••••••' />

                                                {errors.password && <div className='absolute inset-y-0 right-10 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                        <MdErrorOutline size={18} />
                                                    </div>
                                                </div>}

                                                <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-6'>
                                                    <button
                                                        onClick={() => setShowPassword((prev) => !prev)}
                                                        className=' relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover shadow-sm text-xs px-2.5 py-1 !mr-1'>
                                                        {showPassword ? <BsEyeSlash size={18} /> : <BsEye size={18} />}

                                                    </button>
                                                </div>
                                            </div>
                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.password}</p>
                                        </div>

                                        <Button
                                            type='submit'
                                            className={`relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-primary hover:bg-primary text-white border-brand shadow-sm opacity-50 ${true ? ' outline-brand-600 opacity-100' : ''
                                                }`}>Sign Up</Button>


                                        <div className='my-8 self-center text-sm text-blue-midnight_blue font-light'>
                                            <span className='text-foreground-light'>Have an account?</span>
                                            <Link
                                                href='/sign-in'
                                                className='font-medium'
                                            >
                                                sign in
                                            </Link>
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

export default SignUp