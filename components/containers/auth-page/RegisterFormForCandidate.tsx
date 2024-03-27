"use client"
import { registerValidationAsCandidateSchema } from '@/utils/validation-schemas';
import { Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react'
import { FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa'
import { Input } from "@/components/ui/input"
import { KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner"
import { signIn } from "next-auth/react"
import LoadingCircle from '@/components/shared/loading-circle/LoadingCircle';

const STRONG = 'Strong'
const MEDIUM = 'Medium'
const WEAK = 'Weak'
const MATCHED = 'Matched'
const UNMATCHED = 'Unmatched'


const RegisterFormForCandidate = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const [passwordState, setPasswordState] = useState({
        showPasswordCriteria: false,
        conditions: {
            lowercase: false,
            uppercase: false,
            number: false,
            specialChar: false,
            length: false,
        },
        passwordStrength: '',
        confirmPasswordStrength: '',
        progress: '',
    })

    const handlePasswordChange = (e: any) => {
        const password = e.target.value

        const checks: any = {
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            specialChar: /[!@#$%^&*()\-_=+{};:,<.>]/.test(password),
            length: password.length >= 6,
        }

        const verifiedListLength = Object.values(checks).filter(
            (value) => value
        ).length

        let passwordStrength =
            verifiedListLength == 5 ? STRONG : verifiedListLength >= 2 ? MEDIUM : WEAK

        setPasswordState({
            ...passwordState,
            conditions: checks,
            progress: `${(verifiedListLength / 5) * 100}%`,
            passwordStrength,
            showPasswordCriteria: verifiedListLength < 5,
        })
    }



    const handleConfirmPasswordChange = (password: string, cpassword: string) => {
        if (password !== '' && cpassword !== '') {
            if (password === cpassword) {
                setPasswordState({
                    ...passwordState,
                    progress: '',
                    passwordStrength: MATCHED,
                    confirmPasswordStrength: MATCHED,
                    showPasswordCriteria: false,
                })
            } else
                setPasswordState({
                    ...passwordState,
                    confirmPasswordStrength: UNMATCHED,
                })
        } else
            setPasswordState({
                ...passwordState,
                confirmPasswordStrength: UNMATCHED,
            })
    }


    const getActiveColor = (strength: string) => {
        if (strength === STRONG || strength === MATCHED) return '#00bc8c'
        if (strength === MEDIUM) return '#f39c12'
        if (strength === WEAK || strength === UNMATCHED) return '#e74c3c'
        return ''
    }

    const renderPasswordIcon = (strength: string) => {
        if (strength === STRONG || strength === MATCHED) {
            return <FaCheck className="h-5 w-5" />
        } else if (strength === MEDIUM) {
            return <FaExclamationTriangle className="h-5 w-5" />
        } else if (strength === WEAK || strength === UNMATCHED) {
            return <FaTimes className="h-5 w-5" />
        } else return
    }


    const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
        setLoading(true)
        try {
            const { email, password, role, firstName, lastName } = values

            let response: any = await fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    role: "CANDIDATE",
                    firstName,
                    lastName
                }),
            })
            const data = await response.json()
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

    const {
        showPasswordCriteria,
        conditions,
        passwordStrength,
        confirmPasswordStrength,
        progress,
    } = passwordState


    return (
        <div >
            <div className='bg-white w-[600px] mx-auto p-10 shadow-shadow_dark rounded-[30px] my-4 relative z-50'>
                <Formik
                    initialValues={{ email: '', firstName: '', lastName: '', password: '', cpassword: '', country: '' }}
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
                        <div>
                            <form
                                onSubmit={(e) => {
                                    e.stopPropagation()
                                    handleSubmit(e)
                                }}
                            >
                                <legend className='text-[35px] text-purple font-extrabold text-center mb-2'>User Registration</legend>
                                <span className='text-purple text-light text-[14px] my-4 block' >* Required field</span>
                                <div className='mb-5'>
                                    <label htmlFor="name" className='text-[14px] mb-2 block text-purple'>Official Email Id</label>
                                    <input
                                        name='email'
                                        id='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        type="email"
                                        placeholder="name@company.com"
                                        className='border-purple-light border h-[60px] py-[5px] px-[20px] rounded-[12px] text-purple text-[16px] font-medium outline-8 focus:border-primary focus:outline-0 focus:text-primary  w-full placeholder:font-light placeholder:text-[14px]' />
                                    <p className="text-red-500 text-[14px] font-light py-1">{errors.email}</p>
                                </div>
                                <div className='flex items-center gap-5 mb-5'>
                                    <div className=''>
                                        <label htmlFor="name" className='text-[14px] mb-2 block text-purple'>Fast Name *</label>
                                        <input
                                            name='firstName'
                                            id='firstName'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                            type="text"
                                            placeholder="Your Fast Name"
                                            className='border-purple-light border h-[60px] py-[5px] px-[20px] rounded-[12px] text-purple text-[16px] font-medium outline-8 focus:border-primary focus:outline-0 focus:text-primary  w-full placeholder:font-light placeholder:text-[14px]' />
                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.firstName}</p>
                                    </div>
                                    <div className=''>
                                        <label htmlFor="name" className='text-[14px] mb-2 block text-purple'>Last Name *</label>
                                        <input
                                            name='lastName'
                                            id='lastName'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                            type="text"
                                            placeholder="Your Last Name"
                                            className='border-purple-light border h-[60px] py-[5px] px-[20px] rounded-[12px] text-purple text-[16px] font-medium outline-8 focus:border-primary focus:outline-0 focus:text-primary  w-full placeholder:font-light placeholder:text-[14px]' />
                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.lastName}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 mb-10 relative'>
                                    <div className='relative'>
                                        <label htmlFor="password" className='text-[14px] mb-2 block text-purple'>Password *</label>
                                        {passwordStrength && (
                                            <div
                                                className="absolute top-0 right-10 rounded-sm p-1 text-sm font-bold text-white"
                                                style={{
                                                    backgroundColor: getActiveColor(passwordStrength),
                                                }}
                                            >
                                                {passwordStrength}
                                            </div>
                                        )}
                                        <div className='flex '>
                                            <button className='bg-[#e9ecef] p-2 rounded-tl-[5px] rounded-bl-[5px]'><KeyRound size={20} /></button>

                                            <input

                                                name='password'
                                                id='password'
                                                onChange={(e) => {
                                                    handlePasswordChange(e)
                                                    handleChange(e)
                                                }}
                                                onFocus={() =>
                                                    setPasswordState({
                                                        ...passwordState,
                                                        showPasswordCriteria: true,
                                                    })
                                                }
                                                onBlur={handleBlur}
                                                value={values.password}
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Minimum 6 characters"
                                                className='border-purple-light border h-[60px] py-[5px] px-[20px] rounded-tr-[12px] rounded-br-[12px] text-purple text-[16px] font-medium outline-8 focus:border-primary focus:outline-0 focus:text-primary  w-full  placeholder:font-light placeholder:text-[14px]' />

                                            <button
                                                onClick={() => setShowPassword(prev => !prev)}
                                                className='bg-[#6c757d] w-[30px] h-[60px] block rounded-tr-[12px] rounded-br-[12px]'></button>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className='text-[14px] mb-2 block text-purple'>Confirm Password *</label>
                                        <div className='flex  '>
                                            <button className='bg-[#e9ecef] p-2 rounded-tl-[5px] rounded-bl-[5px]'><KeyRound size={20} /></button>
                                            <input
                                                name='cpassword'
                                                id='cpassword'
                                                // onChange={handleChange}
                                                onChange={(e) => {
                                                    handleConfirmPasswordChange(
                                                        values.password,
                                                        e.target.value
                                                    )
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                                value={values.cpassword}
                                                type={showCPassword ? "text" : "password"}
                                                placeholder="Re-Type password"
                                                className='border-purple-light border h-[60px] py-[5px] px-[20px] rounded-tr-[12px] rounded-br-[12px] text-purple text-[16px] font-medium outline-8 focus:border-primary focus:outline-0 focus:text-primary  w-full placeholder:font-light placeholder:text-[14px]' />
                                            <button
                                                onClick={() => setShowCPassword(prev => !prev)}
                                                className='bg-[#6c757d] w-[30px] h-[60px] block rounded-tr-[12px] rounded-br-[12px]'></button>
                                        </div>

                                    </div>

                                    {progress && (
                                        <div className="absolute -bottom-5 left-0 right-0 h-2 overflow-hidden rounded-md">
                                            <div
                                                className="h-full transition-all duration-500 ease-out"
                                                style={{
                                                    width: progress,
                                                    backgroundColor: getActiveColor(passwordStrength),
                                                }}
                                            ></div>
                                        </div>
                                    )}

                                </div>
                                <p className="text-red-500 text-[14px] font-light py-1">{errors.password}</p>
                                <p className="text-red-500 text-[14px] font-light py-1">{errors.cpassword}</p>

                                <div className='flex items-center gap-2'>
                                    <Button type="submit" className={`font-medium ${loading && 'pointer-events-none cursor-not-allowed'}`}>
                                        {loading ?
                                            <span>
                                                <LoadingCircle /> Loading...
                                            </span> :
                                            'Register'}

                                    </Button>
                                    <Button className='bg-[#6c757d] font-medium hover:bg-[#606971]'>Cancel</Button>
                                </div>
                            </form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default RegisterFormForCandidate