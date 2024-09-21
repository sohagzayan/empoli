'use client'


// import Stepper from "awesome-react-stepper";
// import { Step, Stepper } from 'react-form-stepper';
import CompanySignUpInfo from '@/components/containers/recruiter/recruiter-stepper/company-sign-up-info'
import Header from '@/components/shared/Nav/Header'
import AuthTimeline from '@/components/shared/auth-timeline/AuthTimeline'
import { Button } from '@/components/ui/button'
import { loginValidationAsRecruiterSchema, registerValidationAsCandidateSchema, signUpValidationAsRecruiterSchema } from '@/utils/validation-schemas'
import { Formik, FormikHelpers } from 'formik'
import { signIn } from 'next-auth/react'
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
import { TiTick } from "react-icons/ti";
import Stepper from '@/components/containers/recruiter/recruiter-stepper/Stepper'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import AuthNav from '@/components/shared/auth-nav/AuthNav'
import LoadingCircle from '@/components/shared/loading-circle/LoadingCircle'

const RecruiterSignIn = () => {
    const router = useRouter()
    const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
    // const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    const CHECKOUT_STEPS = [
        {
            name: "Sign Up",
            Component: () => <div>Provide your contact details.</div>,
        },
        {
            name: "Company Info",
            Component: () => <div>Enter your shipping address.</div>,
        },
        {
            name: "Billing",
            Component: () => <div>Complete payment for your order.</div>,
        },
    ];



    const signInWithGoogle = async (event: any) => {
        try {
            event.preventDefault()
            await signIn('google', { callbackUrl: '/' })
        } catch (error: any) {
            console.error(error)
        }
    }


    const checkIsValidSignUp = (values: any) => {
        // if (values.f)
    }






    const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
        setLoading(true)
        const loadingToast = toast.loading("Signing in...", {
            position: 'top-left',
            // autoClose: false
        })
        try {
            const { email, password } = values
            console.log("all signin values:", values)

            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
                role: "RECRUITER",
                // callbackUrl: '/',
            })

            if (res?.error) {
                toast.error(res.error)
            }


            if (res?.ok) {
                toast.success("Sign In successful")
            }

            console.log("res", res)
            toast.dismiss(loadingToast);

            setLoading(false)

        } catch (error: any) {
            setLoading(false)
            toast.error(error.message)
            actions.setErrors({ email: error.message || 'An error occurred' })
        }
        actions.setSubmitting(false)
    }





    return (
        <div className='bg-[#F8F8F8] min-h-screen '>
            <AuthNav />
            <div className='container lg:px-16 xl:px-20 py-20 '>
                <div className='lg:flex-row  relative z-10 lg:h-auto pt-[90px] lg:pt-[90px]  flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8'>
                    <div
                        className='  flex items-center justify-center   w-full '>
                        <div className=' '>
                            <div className='flex-1 flex flex-col justify-center w-full'>

                                <div className='mb-6'>
                                    <h3 className=' text-blue-midnight_blue mt-4 mb-2 text-2xl lg:text-3xl'>Welcome here</h3>
                                    <p className='text-sm text-foreground-light'>To Get Started, Enter Your credentials
                                    </p>
                                </div>


                                <div>
                                    <Formik
                                        initialValues={{ email: '', password: '' }}
                                        validationSchema={loginValidationAsRecruiterSchema}
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

                                                    <div className='flex flex-col w-full gap-2'>
                                                        <div className='mb-4 '>
                                                            <div className='relative'>
                                                                <label htmlFor="firstName" className='block text-foreground-light text-sm mb-1'>First Name</label>
                                                                <input
                                                                    name='email'
                                                                    id='email'
                                                                    value={values.email}
                                                                    onChange={handleChange}
                                                                    type="email"
                                                                    className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.email && 'border-red-600'}`}
                                                                    placeholder='sohag@gmail.com' />

                                                                {errors.email && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                                        <MdErrorOutline size={18} />
                                                                    </div>
                                                                </div>}
                                                            </div>

                                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.email}</p>
                                                        </div>

                                                        <div className='mb-4'>
                                                            <div className=' relative'>
                                                                <label htmlFor="lastName" className='block text-foreground-light text-sm mb-1'>Last Name</label>
                                                                <input
                                                                    name='password'
                                                                    id='password'
                                                                    type="password"
                                                                    value={values.password}
                                                                    onChange={handleChange}
                                                                    className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.password && 'border-red-600'}`}
                                                                    placeholder='hossain' />

                                                                {errors.password && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                                        <MdErrorOutline size={18} />
                                                                    </div>
                                                                </div>}
                                                            </div>
                                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.password}</p>
                                                        </div>


                                                        <Button className={`relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-white border-brand shadow-sm  ${loading ? 'bg-primary/60  hover:bg-primary/60 pointer-events-none  ' : 'bg-primary  hover:bg-primary pointer-events-auto'
                                                            }`}>
                                                            {loading && <LoadingCircle />
                                                            }
                                                            Sign In
                                                        </Button>
                                                    </div>
                                                </form>
                                            </div>
                                        )}



                                    </Formik>
                                </div>

                                <div className='my-8 self-center text-sm text-blue-midnight_blue font-light'>
                                    <span className='text-foreground-light'>Have an account?</span>
                                    <Link
                                        href='/sign-in'
                                        className='font-medium'
                                    >
                                        Sign In Now
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
                        </div>
                    </div>
                    <div>
                        <AuthTimeline />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecruiterSignIn