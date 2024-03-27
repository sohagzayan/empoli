'use client'


// import Stepper from "awesome-react-stepper";
// import { Step, Stepper } from 'react-form-stepper';
import CompanySignUpInfo from '@/components/containers/recruiter/recruiter-stepper/company-sign-up-info'
import Header from '@/components/shared/Nav/Header'
import AuthTimeline from '@/components/shared/auth-timeline/AuthTimeline'
import { Button } from '@/components/ui/button'
import { registerValidationAsCandidateSchema, signUpValidationAsRecruiterSchema } from '@/utils/validation-schemas'
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

const SignUp = () => {
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
    console.log("submiting")
    setLoading(true)
    try {
      const { email, password, firstName, lastName } = values
      console.log("all signup values:", values)
      let response: any = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          role: "RECRUITER",
          ...values,
        }),
      })
      const data = await response.json()
      console.log("res data", data)
      if (!response.ok) {
        throw new Error(data.message)
      }
      await signIn('credentials', {
        role: "RECRUITER",
        email: email,
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
        <div className='flex items-center lg:flex-row flex-col'>
          <div
            className='  flex items-center justify-center   w-full '>
            <div className=' '>
              <div className='flex-1 flex flex-col justify-center w-full'>

                <div className='mb-6'>
                  <h3 className=' text-blue-midnight_blue mt-4 mb-2 text-2xl lg:text-3xl'>Welcome backs</h3>
                  <p className='text-sm text-foreground-light'>To Get Started, Enter Your Company Information
                  </p>
                </div>


                <div>
                  <Formik
                    initialValues={{ firstName: '', lastName: '', companyName: '', companyWebsite: '', jobTitle: "", email: '', password: '', howDidYouHearAboutUs: '', }}
                    validationSchema={signUpValidationAsRecruiterSchema}
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

                          <div className='grid grid-cols-2 w-full gap-4 '>
                            <div className='mb-4 '>
                              <div className='relative'>
                                <label htmlFor="firstName" className='block text-foreground-light text-sm mb-1'>First Name</label>
                                <input
                                  name='firstName'
                                  id='firstName'
                                  value={values.firstName}
                                  onChange={handleChange}
                                  type="text"
                                  className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.firstName && 'border-red-600'}`}
                                  placeholder='sohag' />

                                {errors.firstName && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                  <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                    <MdErrorOutline size={18} />
                                  </div>
                                </div>}
                              </div>

                              <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.firstName}</p>
                            </div>

                            <div className='mb-4'>
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
                            </div>



                            <div className='mb-4'>
                              <div className='relative'>
                                <label htmlFor="companyName" className='block text-foreground-light text-sm mb-1'>Company Name</label>
                                <input
                                  name='companyName'
                                  id='companyName'
                                  type="text"
                                  value={values.companyName}
                                  onChange={handleChange}
                                  className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.companyName && 'border-red-600'}`}
                                  placeholder='apper' />

                                {errors.companyName && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                  <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                    <MdErrorOutline size={18} />
                                  </div>
                                </div>}
                              </div>
                              <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.companyName}</p>
                            </div>


                            <div className='mb-4'>
                              <div className='relative'>
                                <label htmlFor="companyWebsite" className='block text-foreground-light text-sm mb-1'>Company Website</label>
                                <input
                                  name='companyWebsite'
                                  id='companyWebsite'
                                  type="text"
                                  value={values.companyWebsite}
                                  onChange={handleChange}
                                  className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.companyWebsite && 'border-red-600'}`}
                                  placeholder='https://www.company.com/' />

                                {errors.companyWebsite && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                  <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                    <MdErrorOutline size={18} />
                                  </div>
                                </div>}
                              </div>
                              <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.companyWebsite}</p>
                            </div>

                            <div className='mb-4'>
                              <div className='relative'>
                                <label htmlFor="jobTitle" className='block text-foreground-light text-sm mb-1'>Job Title
                                </label>
                                <input
                                  name='jobTitle'
                                  id='jobTitle'
                                  type="text"
                                  value={values.jobTitle}
                                  onChange={handleChange}
                                  className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.jobTitle && 'border-red-600'}`}
                                  placeholder='https://www.company.com/' />

                                {errors.jobTitle && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                  <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                    <MdErrorOutline size={18} />
                                  </div>
                                </div>}
                              </div>
                              <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.jobTitle}</p>
                            </div>

                            <div className='mb-4'>
                              <div className='relative'>
                                <label htmlFor="email" className='block text-foreground-light text-sm mb-1'>Work Email Address
                                </label>
                                <input
                                  name='email'
                                  id='email'
                                  type="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.email && 'border-red-600'}`}
                                  placeholder='name@gmail.com' />

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
                                    onClick={() => setShowPassword((prev: any) => !prev)}
                                    className=' relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover shadow-sm text-xs px-2.5 py-1 !mr-1'>
                                    {showPassword ? <BsEyeSlash size={18} /> : <BsEye size={18} />}

                                  </button>
                                </div>
                              </div>
                              <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.password}</p>
                            </div>


                            <div className='mb-4'>
                              <div className='relative'>
                                <label htmlFor="workEmailAddress" className='block text-foreground-light text-sm mb-1'>How did you hear about us
                                </label>
                                <select
                                  name='howDidYouHearAboutUs'
                                  value={values.howDidYouHearAboutUs}
                                  onChange={handleChange}
                                  className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.howDidYouHearAboutUs && 'border-red-600'}`}>
                                  <option selected>Choose any one</option>
                                  <option value="US">Internet Search</option>
                                  <option value="CA">Referral</option>
                                  <option value="FR">Sales Outreach</option>
                                  <option value="DE">Press/PR</option>
                                  <option value="DE">Tradeshow/Event</option>
                                  <option value="DE">Webinar</option>
                                  <option value="DE">Advertisement</option>
                                  <option value="DE">Remote.co</option>
                                  <option value="DE">Association</option>
                                  <option value="DE">Social Media</option>
                                  <option value="DE">Remote.co</option>
                                  <option value="DE">Returning Customer</option>
                                  <option value="DE">Others</option>
                                </select>


                                {errors.howDidYouHearAboutUs && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                  <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                    <MdErrorOutline size={18} />
                                  </div>
                                </div>}
                              </div>
                              <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.howDidYouHearAboutUs}</p>
                            </div>
                            <Button>Next</Button>
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
            <Stepper />
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp