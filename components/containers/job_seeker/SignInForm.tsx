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
            className="">
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

                            <div className='flex-1 flex flex-col justify-center w-[90%] mx-auto pt-10 md:w-[450px]'>

                                <div className='mb-8'>
                                    {/* <h3 className=' text-primary font-apercu-medium  mb-1 text-lg'>JobJoy.</h3> */}
                                    <h3 className=' text-primary font-apercu-medium  mb-1 text-3xl'>Welcome back</h3>
                                    <p className='text-sm font-apercu-regular text-primary '>Sign in to your account</p>
                                </div>



                                <div>
                                    <div className=' bg-transparent w-full flex items-center justify-center'>
                                        <button
                                            onClick={signInWithGoogle}
                                            className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all  border-2 border-strong hover:border-stronger focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong w-full flex items-center justify-center text-base px-4 py-2 bg-white text-primary font-apercu-medium'>
                                            <PiGoogleLogo size={22} className='mr-2' />
                                            Continue with google
                                        </button>
                                    </div>
                                </div>


                                <div className='relative my-4'>
                                    <div className='absolute inset-0 flex items-center'>
                                        <div className='w-full border-t border-strong'></div>
                                    </div>
                                    <div className='relative flex justify-center text-sm'>
                                        <span className='px-2 text-sm bg-studio text-foreground font-apercu-medium bg-[#F8F8F8]'>or</span>
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <label
                                        htmlFor="email" className='block text-primary  text-sm font-apercu-medium  mb-1'>Email</label>
                                    <input
                                        id='email'
                                        name='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        type="email"
                                        className={`   bg-bgThird block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none  focus:outline-none  placeholder-foreground-muted bg-foreground/[.026] border-2 text-sm px-4 py-3 ${errors.email ? 'border-red-500' : 'border '}`}
                                        placeholder='you@example.com' />
                                    <p data-state="show" className="text-red-500 mt-1 transition-all  data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm">
                                        {errors.email}
                                    </p>
                                </div>

                                <div className='mb-4'>
                                    <div className='flex items-center justify-between mb-1'>
                                        <label htmlFor="password" className='block text-foreground-light text-sm mb-1'>Password</label>
                                        <Link href="/" className='text-primary font-apercu-light text-sm'>Forgot Password?</Link>
                                    </div>
                                    <input
                                        id='password'
                                        type="password"
                                        name='password'
                                        onChange={handleChange}
                                        className={`bg-bgThird block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none  focus:outline-none  placeholder-foreground-muted bg-foreground/[.026] border-2 text-sm px-4 py-3 ${errors.password ? 'border-red-500' : 'border-control'}`}
                                        placeholder='Password' />
                                    <p data-state="show" className="text-red-500 mt-1 transition-all  data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm">
                                        {errors.password}
                                    </p>
                                </div>

                                <Button
                                    className={`relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 py-6 font-apercu-medium  focus-visible:outline-4 focus-visible:outline-offset-1 border text-white border-brand shadow-sm  ${loading ? 'bg-primary/60  hover:bg-primary/60 pointer-events-none  ' : 'bg-bgSecondary  hover:bg-primary pointer-events-auto'
                                        }`}>
                                    {loading && <LoadingCircle />}
                                    Sign In
                                </Button>


                                <div className='my-8 self-center text-sm text-blue-midnight_blue font-light'>
                                    <span
                                        className='text-primary font-apercu-regular'>
                                        Don{"'"}t have an account?
                                    </span>
                                    <Link
                                        href='/members/sign-up'
                                        className='font-apercu-medium ml-1 cursor-pointer underline'>
                                        Sign Up Now
                                    </Link>
                                </div>
                                <div className='sm:text-center'>
                                    <p className='text-xs text-foreground-lighter text-blue-midnight_blue sm:mx-auto sm:max-w-sm'>
                                        By continuing, you agree to JobJoy
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
        </div >
    )
}

export default SignInForm