"use client"
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Stepper from '@/components/containers/recruiter/recruiter-stepper/Stepper'
import Link from 'next/link'
import CompanySignUpInfo from '@/components/containers/recruiter/recruiter-stepper/company-sign-up-info'
import AuthNav from '@/components/shared/auth-nav/AuthNav'
import { Button } from '@/components/ui/button'
import { Formik, FormikHelpers } from 'formik'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'
import { registerValidationAsCandidateSchema } from '@/utils/validation-schemas'
import { MdErrorOutline } from 'react-icons/md'
import { IoCheckmark } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa'

const Billing = () => {
    const [loading, setLoading] = useState(false)




    const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
        console.log("submiting")
        setLoading(true)
        try {
            const { email, password, firstName, lastName } = values
            console.log("all signup values:", values)
            let response: any = await fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({
                    role: "RECRUITER",
                    ...values
                    // role: "candidate"
                }),
            })
            const data = await response.json()
            console.log("res data", data)
            if (!response.ok) {
                throw new Error(data.message)
            }
            await signIn('credentials', {
                email: values.workEmailAddress,
                password,
                callbackUrl: '/members/recruiter/survey',
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





    return (
        <div className='bg-[#F8F8F8] min-h-full'>
            <AuthNav />
            <div className='container lg:px-16 xl:px-20 py-20'>

                <div className='relative z-10 pt-8 pb-6 xl:py-16'>
                    <div className='mx-auto max-w-7xl px-8 text-center sm:px-6 lg:px-8 '>
                        <div className='mx-auto max-w-3xl space-y-2 lg:max-w-none'>
                            <h1 className='h1 text-blue-midnight_blue mt-4 mb-2  lg:text-3xl'>Predictable pricing, designed to scale
                            </h1>
                            <p className='p text-lg leading-5 text-blue-steel_blue'>Start building for free, collaborate with a team, then scale to millions of users.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-20'>
                    <div
                        className='col-span-9 w-full '>
                        <div className='mx-auto max-w-md grid lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-0'>
                            <div className='flex flex-col border xl:border-r-0 last:border-r bg-surface-100 rounded-xl xl:rounded-none first:rounded-l-xl last:rounded-r-xl px-8 xl:px-4 2xl:px-8 pt-6'>
                                <h3 className='text-2xl font-normal uppercase flex items-center gap-4 font-mono'>FREE</h3>
                                <p className='text-foreground-light mb-4 text-sm 2xl:pr-4'>Perfect for passion projects & simple websites.</p>
                                <button className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-primary hover:bg-primary/80 text-white border-brand focus-visible:outline-brand-600 shadow-sm data-[state=open]:bg-brand-button/80 data-[state=open]:outline-brand-600 w-full flex items-center justify-center text-sm leading-4 px-3 py-2'>Start for Free</button>

                                <div className='text-foreground flex items-baseline text-5xl font-normal lg:text-4xl xl:text-4xl border-b border-default lg:min-h-[175px] py-8 lg:pb-0 lg:pt-10'>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-end gap-2'>
                                            <div className='flex items-end'>
                                                <p className="mt-2 pb-1 font-mono text-5xl">$0</p>
                                                <p className="text-foreground-lighter mb-1.5 ml-1 text-[13px] leading-4">/ month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='border-default flex rounded-bl-[4px] rounded-br-[4px] flex-1 flex-col px-8 xl:px-4 2xl:px-8 py-6'>
                                    <p className='text-foreground-lighter text-[13px] mt-2 mb-4'>Get started with:</p>

                                    <ul className='text-[13px] flex-1 text-foreground-lighter'>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>Unlimited API requests</span>
                                            </div>
                                        </li>
                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>50,000 monthly active users</span>
                                            </div>
                                        </li>
                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>500 MB database space</span>
                                            </div>
                                            <p className='ml-6 text-blue-steel_blue'>2 Core shared CPU • 1 GB RAM</p>
                                        </li>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>5 GB bandwidth
                                                </span>
                                            </div>

                                        </li>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>1 GB file storage
                                                </span>
                                            </div>

                                        </li>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>Community support
                                                </span>
                                            </div>

                                        </li>


                                    </ul>

                                </div>

                            </div>
                            <div className='flex flex-col  xl:border-r-0 last:border-r bg-surface-100 xl:rounded-none first:rounded-l-xl last:rounded-r-xl border-primary !border-2 !rounded-xl xl:-my-8  px-8 xl:px-4 2xl:px-8 pt-6'>
                                <div className='flex items-center gap-2 pb-2'>
                                    <h3 className='text-2xl font-normal uppercase flex items-center gap-4 font-mono'>PRO</h3>
                                    <p className='bg-primary text-primary rounded-md bg-opacity-30 py-0.5 px-2 text-[13px] leading-4 inline-flex gap-1 items-center'>Most Popular</p>
                                </div>
                                <p className='text-foreground-light mb-4 text-sm 2xl:pr-4'>Perfect for passion projects & simple websites.</p>
                                <button className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-primary hover:bg-primary/80 text-white border-brand focus-visible:outline-brand-600 shadow-sm data-[state=open]:bg-brand-button/80 data-[state=open]:outline-brand-600 w-full flex items-center justify-center text-sm leading-4 px-3 py-2'>Get Stared</button>

                                <div className='text-foreground flex items-baseline text-5xl font-normal lg:text-4xl xl:text-4xl border-b border-default lg:min-h-[175px] py-8 lg:pb-0 lg:pt-10'>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-end gap-2'>
                                            <div className='flex items-end'>
                                                <p className="mt-2 pb-1 font-mono text-5xl">$25</p>
                                                <p className="text-foreground-lighter mb-1.5 ml-1 text-[13px] leading-4">/ month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='border-default flex rounded-bl-[4px] rounded-br-[4px] flex-1 flex-col px-8 xl:px-4 2xl:px-8 py-6'>
                                    <p className='text-foreground-lighter text-[13px] mt-2 mb-4'>Get started with:</p>

                                    <ul className='text-[13px] flex-1 text-foreground-lighter'>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>Unlimited API requests</span>
                                            </div>
                                        </li>
                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>50,000 monthly active users</span>
                                            </div>
                                        </li>
                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>500 MB database space</span>
                                            </div>
                                            <p className='ml-6 text-blue-steel_blue'>2 Core shared CPU • 1 GB RAM</p>
                                        </li>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>5 GB bandwidth
                                                </span>
                                            </div>

                                        </li>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>1 GB file storage
                                                </span>
                                            </div>

                                        </li>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>Community support
                                                </span>
                                            </div>

                                        </li>


                                    </ul>

                                </div>

                            </div>
                            <div className='flex flex-col border xl:border-r-0 last:border-r bg-surface-100 rounded-xl xl:rounded-none first:rounded-l-xl last:rounded-r-xl xl:border-l-0 px-8 xl:px-4 2xl:px-8 pt-6'>
                                <h3 className='text-2xl font-normal uppercase flex items-center gap-4 font-mono'>TEAM</h3>
                                <p className='text-foreground-light mb-4 text-sm 2xl:pr-4'>Perfect for passion projects & simple websites.</p>
                                <button className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-primary hover:bg-primary/80 text-white border-brand focus-visible:outline-brand-600 shadow-sm data-[state=open]:bg-brand-button/80 data-[state=open]:outline-brand-600 w-full flex items-center justify-center text-sm leading-4 px-3 py-2'>Get Stared</button>

                                <div className='text-foreground flex items-baseline text-5xl font-normal lg:text-4xl xl:text-4xl border-b border-default lg:min-h-[175px] py-8 lg:pb-0 lg:pt-10'>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-end gap-2'>
                                            <div className='flex items-end'>
                                                <p className="mt-2 pb-1 font-mono text-5xl">$599</p>
                                                <p className="text-foreground-lighter mb-1.5 ml-1 text-[13px] leading-4">/ month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='border-default flex rounded-bl-[4px] rounded-br-[4px] flex-1 flex-col px-8 xl:px-4 2xl:px-8 py-6'>
                                    <p className='text-foreground-lighter text-[13px] mt-2 mb-4'>Get started with:</p>

                                    <ul className='text-[13px] flex-1 text-foreground-lighter'>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>Unlimited API requests</span>
                                            </div>
                                        </li>
                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>50,000 monthly active users</span>
                                            </div>
                                        </li>
                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>500 MB database space</span>
                                            </div>
                                            <p className='ml-6 text-blue-steel_blue'>2 Core shared CPU • 1 GB RAM</p>
                                        </li>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>5 GB bandwidth
                                                </span>
                                            </div>

                                        </li>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>1 GB file storage
                                                </span>
                                            </div>

                                        </li>

                                        <li className='flex flex-col py-2 first:mt-0'>
                                            <div className='flex items-center'>
                                                <div className='flex w-6'>
                                                    <FaCheck className='text-primary' />
                                                </div>
                                                <span className='text-foreground mb-0'>Community support
                                                </span>
                                            </div>

                                        </li>


                                    </ul>

                                </div>

                            </div>
                        </div>
                        <div className='text-center mt-10 xl:mt-16 mx-auto max-w-lg flex flex-col gap-1'>
                            <p className='text-foreground-lighter'>We will only bill extra for resources consumed
                                <br className="hidden md:block" />
                                exceeding the inclusive quota limits in your paid plan
                            </p>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <Stepper />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Billing
