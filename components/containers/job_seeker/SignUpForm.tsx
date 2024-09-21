"use client"
import { Divider } from '@/components/common'
import SocialLogin from '@/components/common/auth/social-login'
import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle'
import { Button } from '@/components/ui/button'
import { registerValidationAsCandidateSchema } from '@/utils/validation-schemas'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Formik, FormikHelpers } from 'formik'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { MdErrorOutline } from 'react-icons/md'
import { PiGoogleLogo } from 'react-icons/pi'
import { toast } from 'sonner'


interface SignUpFormType {
    selectRole: string | null
}

const SignUpForm = ({ selectRole }: SignUpFormType) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false)
    const [termsCondition, setTermsCondition] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState(0);

    const handleTermsChange = (e: any) => {
        setTermsCondition(e.target.checked);
    };


    // Function to evaluate password strength
    const evaluatePasswordStrength = (password: string) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[@$!%*?&#]/.test(password)) strength += 1;
        setPasswordStrength(strength);
    };


    // Function to dynamically set the strength bar class
    const getStrengthBarClass = () => {
        switch (passwordStrength) {
            case 1:
                return 'bg-[#FF0000] w-1/4'; // Weak (Red)
            case 2:
                return 'bg-[#FFD700] w-1/2'; // Medium (Yellow)
            case 3:
                return 'bg-[#008000] w-3/4'; // Strong (Green)
            case 4:
                return 'bg-theme1 w-full'; // Very Strong (Teal)
            default:
                return 'bg-[#D3D3D3] w-1/4'; // Default (Light Gray)
        }
    };


    const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
        setLoading(true)
        try {
            const { email, password, fullName } = values
            let response: any = await fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    fullName,
                    selectRole
                }),
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message)
            }
            // await signIn('credentials', {
            //     redirect: false,
            //     email,
            //     password,
            //     // role: 'role',
            //     // callbackUrl: '/',
            // })
            setLoading(false)
            toast.success(data.message)
            router.push("/ab/account-security/login")


        } catch (error: any) {
            setLoading(false)
            toast.error(error.message, {
                duration: 4000, // Time in milliseconds (5000ms = 5 seconds)
            });

            actions.setErrors({ email: error.message || 'An error occurred' })
        }
        actions.setSubmitting(false)
    }


    const signInWithGoogle = async (event: any) => {
        try {
            event.preventDefault()
            const res = await signIn('google', { callbackUrl: '/' })
            console.log("res goolge auth > ", res)
        } catch (error: any) {
            console.error(error)
        }
    }

    return (
        <div>
            <Formik
                initialValues={{ email: '', fullName: '', password: '', cPassword: "", }}
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
                }) => {

                    const isPasswordMatching = values.password === values.cPassword
                    const isFormDisabled = loading || !isPasswordMatching


                    return (
                        <div className=' '>
                            <form onSubmit={(e) => {
                                e.stopPropagation()
                                handleSubmit(e)
                            }}>



                                <div className='flex-1 flex  my-5 flex-col justify-center w-[90%] mx-auto md:w-[400px] lg:w-[500px]'>

                                    <div className='mb-8 text-center'>
                                        <h3 className=' text-white mt-8 mb-2 text-xl font-700'>Sign Up</h3>
                                        <p className='text-sm text-text6 font-400'>Use social media accounts</p>
                                    </div>



                                    <div>
                                        <div className=' bg-transparent w-full flex items-center justify-center'>
                                            <SocialLogin />
                                        </div>
                                    </div>


                                    <Divider text='Or with emails' />

                                    <div className='mb-6 '>
                                        <div className='relative'>
                                            {/* <label htmlFor="fullName" className='block text-primary font-apercu-regular text-sm mb-1'>Full Name</label> */}
                                            <input
                                                autoFocus={true}
                                                autoComplete='fullName'
                                                name='fullName'
                                                id='fullName'
                                                value={values.fullName}
                                                onChange={handleChange}
                                                type="text"
                                                style={{ backgroundColor: "rgba(255,255,255,.1)" }}
                                                className={`block p-3 w-full rounded-md ${errors.fullName ? 'border-red-600' : ''} py-1.5  shadow-sm  rounded-md focus:ring-indigo-500 sm:text-base sm:leading-6 border-none outline-none text-white text-sm font-400`}
                                                placeholder='Full Name' />

                                            {errors.fullName && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                    <MdErrorOutline size={18} />
                                                </div>
                                            </div>}
                                        </div>

                                        <p className='text-rose-500 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.fullName}</p>
                                    </div>



                                    <div className='mb-6'>
                                        <div className='relative'>
                                            {/* <label htmlFor="email" className='block text-primary font-apercu-regular text-sm mb-1'>Email</label> */}
                                            <input
                                                autoFocus={true}
                                                autoComplete='email'
                                                name='email'
                                                id='email'
                                                type="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                style={{ backgroundColor: "rgba(255,255,255,.1)" }}
                                                className={`block p-3 w-full rounded-md ${errors.fullName ? 'border-red-600' : ''} py-1.5  shadow-sm  rounded-md focus:ring-indigo-500 sm:text-base sm:leading-6 border-none outline-none text-white text-sm font-400`}
                                                placeholder='Email' />

                                            {errors.email && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                    <MdErrorOutline size={18} />
                                                </div>
                                            </div>}
                                        </div>
                                        <p className='text-rose-500 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.email}</p>
                                    </div>

                                    <div className='mb-4'>
                                        <div className='relative'>
                                            {/* <label htmlFor="password" className='block text-primary font-apercu-regular text-sm mb-1'>Password</label> */}
                                            <input
                                                autoFocus={true}
                                                autoComplete='new-password'
                                                id='password'
                                                name='password'
                                                type={showPassword ? "text" : "password"}
                                                value={values.password}
                                                onChange={(e) => {
                                                    evaluatePasswordStrength(e.target.value)
                                                    handleChange(e)

                                                }}
                                                style={{ backgroundColor: "rgba(255,255,255,.1)" }}
                                                className={`block p-3 w-full rounded-md ${errors.fullName ? 'border-red-600' : ''} py-1.5  shadow-sm  rounded-md focus:ring-indigo-500 sm:text-base sm:leading-6 border-none outline-none text-white text-sm font-400`}
                                                placeholder='Password' />

                                            {errors.password && <div className='absolute inset-y-0 right-10 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                    <MdErrorOutline size={18} />
                                                </div>
                                            </div>}

                                            <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-0'>
                                                <button
                                                    type='button'
                                                    onClick={() => setShowPassword((prev) => !prev)}
                                                    className=' relative text-white border-none justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover shadow-sm text-xs px-2.5 py-1 !mr-1'>
                                                    {showPassword ? <BsEyeSlash size={18} /> : <BsEye size={18} />}

                                                </button>
                                            </div>
                                        </div>
                                        <div>

                                            <div className="flex mt-2 -mx-1">
                                                <div className="flex-auto rounded-full h-2 bg-gray-300 opacity-50 mx-1 relative">
                                                    <div
                                                        className={`h-2 rounded-full transition-all duration-300 ${getStrengthBarClass()}`}
                                                    ></div>
                                                </div>
                                            </div>

                                            <div className="text-sm mt-1 text-white">
                                                {passwordStrength === 0 ? 'Enter a password' :
                                                    passwordStrength === 1 ? 'Weak password' :
                                                        passwordStrength === 2 ? 'Medium password' :
                                                            passwordStrength === 3 ? 'Strong password' :
                                                                'Very strong password'}
                                            </div>
                                        </div>
                                        <p className='text-rose-500 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.password}</p>
                                    </div>

                                    <div>
                                        <p className='text-sm text-text6 mb-4'>
                                            Use 8 or more characters with a mix of letters, numbers & symbols.
                                        </p>
                                    </div>

                                    <div className='mb-6'>
                                        <div className='relative'>
                                            {/* <label htmlFor="password" className='block text-primary font-apercu-regular text-sm mb-1'>Password</label> */}
                                            <input
                                                autoFocus={true}
                                                autoComplete='cPassword'
                                                id='cPassword'
                                                name='cPassword'
                                                type={showCPassword ? "text" : "password"}
                                                value={values.cPassword}
                                                onChange={handleChange}
                                                style={{ backgroundColor: "rgba(255,255,255,.1)" }}
                                                className={`block p-3 w-full rounded-md ${errors.fullName ? 'border-red-600' : ''} py-1.5  shadow-sm  rounded-md focus:ring-indigo-500 sm:text-base sm:leading-6 border-none outline-none text-white text-sm font-400`}
                                                placeholder='Password' />

                                            {errors.cPassword && <div className='absolute inset-y-0 right-10 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                    <MdErrorOutline size={18} />
                                                </div>
                                            </div>}

                                            <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-0'>
                                                <button
                                                    type='button'
                                                    onClick={() => setShowCPassword((prev) => !prev)}
                                                    className=' relative text-white border-none justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover shadow-sm text-xs px-2.5 py-1 !mr-1'>
                                                    {showCPassword ? <BsEyeSlash size={18} /> : <BsEye size={18} />}

                                                </button>
                                            </div>
                                        </div>
                                        <p className='text-rose-500 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.cPassword}</p>
                                    </div>

                                    <div className='flex items-center gap-3 mb-6 cursor-pointer'>
                                        {/* <input
                                        type="radio"
                                        id='terms-condition'
                                    // checked={termsCondition ? true : false}
                                    /> */}
                                        <input
                                            type='checkbox'
                                            id="terms"
                                            checked={termsCondition}
                                            onChange={handleTermsChange}
                                            className=""
                                        />
                                        <label
                                            htmlFor="terms"
                                            className='text-text6 text-sm cursor-pointer'>I Agree & <Link href="/" className='text-primaryRgb'>Terms and conditions.</Link></label>
                                    </div>

                                    <Button
                                        disabled={isFormDisabled}
                                        type='submit'
                                        className={`relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-full outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 flex items-center gap-2 font-600 bg-theme1 hover:bg-primary text-white border-brand shadow-sm opacity-50 ${loading ? ' bg-theme1  opacity-40' : ''
                                            }`}>
                                        {loading && <MiniLoadingCircle width="20" />}
                                        Register
                                    </Button>


                                    <div className='my-8 self-center text-sm  font-light'>
                                        <span className='text-text6'>Already a Member? </span>
                                        <Link
                                            href='/ab/account-security/login'
                                            className='font-600 text-theme1 ml-1'
                                        >
                                            Sign in
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Formik>
        </div>
    )
}

export default SignUpForm