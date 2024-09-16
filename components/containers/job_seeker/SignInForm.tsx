"use client"
import LoadingCircle from '@/components/shared/loading-circle/LoadingCircle'
import { Button } from '@/components/ui/button'
import { loginValidationSchema } from '@/utils/validation-schemas'
import { Formik, FormikHelpers } from 'formik'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { PiGoogleLogo } from 'react-icons/pi'
import { toast } from 'sonner'

const SignInForm = () => {
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
                router.push("/")
            }
            toast.dismiss(loadingToast);
            setLoading(false)
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
        <div
            className="w-full">
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

                            <div className='flex-1 flex flex-col justify-center w-[90%] mx-auto pt-10 md:w-[350px] lg:w-[450px]'>

                                <div className='mb-8 text-center'>
                                    <h3 className=' text-white mt-8 mb-2 text-xl font-700'>Sign In</h3>
                                    <p className='text-sm text-gray500 font-400'>
                                        Use social media accounts
                                    </p>
                                </div>


                                <div>
                                    <div className=' bg-transparent w-full flex items-center justify-center'>
                                        <button
                                            onClick={signInWithGoogle}
                                            className='relative cursor-pointer space-x-2 text-sm text-center border border-gray400 font-500 text-white ease-out duration-200  outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 rounded-[5px] text-foreground  border-strong hover:border-stronger focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong w-full flex items-center justify-center text-base px-4 py-2 gap-3 bg-transparent font-apercu-regular'>
                                            <PiGoogleLogo size={22} className='mr-2' />
                                            Continue with google
                                        </button>
                                    </div>
                                </div>


                                <div className='relative my-8'>
                                    <div className='absolute inset-0 flex items-center'>
                                        <div className='w-full border-t border-gray400 border-strong'></div>
                                    </div>
                                    <div className='relative flex justify-center text-sm'>
                                        <span className='px-2 text-sm bg-studio text-gray500 font-500 bg-customDarkBg'>
                                            Or with email
                                        </span>
                                    </div>
                                </div>


                                <div className='mb-4'>
                                    {/* <label
                                        htmlFor="email" className='block text-primary  text-sm font-apercu-medium  mb-1'>Email</label> */}
                                    <input
                                        id='email'
                                        name='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        type="email"
                                        style={{ backgroundColor: "rgba(255,255,255,.1)" }}
                                        className={`  block p-3 w-full   py-1.5  shadow-sm  rounded-md focus:ring-indigo-500 sm:text-base sm:leading-6 border-none outline-none text-white text-sm font-400 ${errors.email ? 'border-red-500' : 'border '}`}
                                        placeholder='Email' />
                                    <p data-state="show" className="text-red-500 mt-1 transition-all  data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm">
                                        {errors.email}
                                    </p>
                                </div>

                                <div className='mb-1'>
                                    <div className='flex items-center justify-between mb-1'>
                                        {/* <label htmlFor="password" className='block text-foreground-light text-sm mb-1'>Password</label> */}
                                    </div>
                                    <input
                                        id='password'
                                        type="password"
                                        name='password'
                                        onChange={handleChange}
                                        style={{ backgroundColor: "rgba(255,255,255,.1)" }}
                                        className={`  block p-3 w-full  py-1.5  shadow-sm  rounded-md focus:ring-indigo-500 sm:text-base sm:leading-6 border-none outline-none text-white text-sm font-400 ${errors.password ? 'border-red-500' : 'border-control'}`}
                                        placeholder='Password' />
                                    <p data-state="show" className="text-red-500 mt-1 transition-all  data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm">
                                        {errors.password}
                                    </p>
                                </div>
                                <div className='text-end mb-6'>
                                    <Link href="/" className='text-primaryRgb font-600 text-sm'>Forgot Password?</Link>
                                </div>

                                <Button
                                    className={`relative cursor-pointer  space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 py-5 text-white border-brand shadow-sm  ${loading ? '  hover:bg-primary/60 pointer-events-none  ' : 'bg-primary  hover:bg-primary pointer-events-auto'
                                        }`}>
                                    {loading && <LoadingCircle />}
                                    Sign In
                                </Button>


                                <div className='my-8 self-center text-sm text-blue-midnight_blue font-light'>
                                    <span
                                        className='text-gray400 font-400 '>
                                        Not a Member yet?
                                    </span>
                                    <Link
                                        href='/members/sign-up'
                                        className='font-600 ml-1 cursor-pointer text-primaryRgb'>
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </Formik>
        </div >
    )
}

export default SignInForm