"use client"
import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle'
import { Button } from '@/components/ui/button'
import { registerValidationAsCandidateSchema } from '@/utils/validation-schemas'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Formik, FormikHelpers } from 'formik'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { MdErrorOutline } from 'react-icons/md'
import { PiGoogleLogo } from 'react-icons/pi'
import { toast } from 'sonner'

const SignUpForm = () => {
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
                return 'bg-red-500 w-1/4'; // Weak
            case 2:
                return 'bg-yellow-500 w-1/2'; // Medium
            case 3:
                return 'bg-green-500 w-3/4'; // Strong
            case 4:
                return 'bg-teal-500 w-full'; // Very Strong
            default:
                return 'bg-gray-300 w-1/4'; // Default
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
            router.push("/members/sign-in")


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



                                <div className='flex-1 flex  my-10 flex-col justify-center w-[90%] mx-auto md:w-[350px] lg:w-[450px]'>

                                    <div className='mb-8 text-center'>
                                        <h3 className=' text-white mt-8 mb-2 text-xl font-700'>Sign Up</h3>
                                        <p className='text-sm text-gray500 font-400'>Use social media accounts</p>
                                    </div>



                                    <div>
                                        <div className=' bg-transparent w-full flex items-center justify-center'>
                                            <button
                                                onClick={signInWithGoogle}
                                                className='relative cursor-pointer space-x-2 text-sm text-center border border-gray400 font-500 text-white ease-out duration-200  outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 rounded-[5px] text-foreground  border-strong hover:border-stronger focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong w-full flex items-center justify-center text-base px-4 py-2 gap-3 bg-transparent font-apercu-regular' >
                                                <PiGoogleLogo size={22} className='text-white' />
                                                Sign in  with google
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

                                        <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.fullName}</p>
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
                                        <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.email}</p>
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
                                        <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.password}</p>
                                    </div>

                                    <div>
                                        <p className='text-sm text-gray700 mb-4'>Use 8 or more characters with a mix of letters, numbers & symbols.
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
                                        <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.cPassword}</p>
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
                                            className='text-gray700 text-sm cursor-pointer'>I Agree & <Link href="/" className='text-primaryRgb'>Terms and conditions.</Link></label>
                                    </div>

                                    <Button
                                        disabled={isFormDisabled}
                                        type='submit'
                                        className={`relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 flex items-center gap-2 font-600 bg-primary hover:bg-primary text-white border-brand shadow-sm opacity-50 ${true ? ' outline-brand-600 opacity-100' : ''
                                            }`}>
                                        {loading && <MiniLoadingCircle width="20" />}
                                        Sign Up
                                    </Button>


                                    <div className='my-8 self-center text-sm text-blue-midnight_blue font-light'>
                                        <span className='text-gray400'>Already a Member? </span>
                                        <Link
                                            href='/members/sign-in'
                                            className='font-600 text-primaryRgb'
                                        >
                                            Sign in
                                        </Link>
                                    </div>
                                    {/* <div className='sm:text-center'>
                                    <p className='text-xs text-foreground-lighter text-blue-midnight_blue sm:mx-auto sm:max-w-sm'>
                                        By continuing, you agree to Supabases
                                        <Link href="/" className='underline hover:text-foreground-light'> Terms of Service </Link>
                                        and
                                        <Link href="/" className='underline hover:text-foreground-light'> Privacy Policy </Link>
                                        , and to receive periodic emails with updates.
                                    </p>
                                </div> */}
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