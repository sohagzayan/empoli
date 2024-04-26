'use client'


// import Stepper from "awesome-react-stepper";
// import { Step, Stepper } from 'react-form-stepper';
import CompanySignUpInfo from '@/components/containers/recruiter/recruiter-stepper/company-sign-up-info'
import Header from '@/components/shared/Nav/Header'
import AuthTimeline from '@/components/shared/auth-timeline/AuthTimeline'
import { Button } from '@/components/ui/button'
import { registerValidationAsCandidateSchema } from '@/utils/validation-schemas'
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

const SignUp = () => {
  const router = useRouter()
  const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
  // const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

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

  const handleNext = () => {
    setCurrentStep((prevStep: any) => {
      if (prevStep === CHECKOUT_STEPS.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };



  return (
    <div className='bg-[#F8F8F8] min-h-full'>

      <div className=' w-full px-8  mx-auto sm:px-6 lg:px-8 py-5'>
        <nav className='relative flex items-center justify-between '>
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
      <div className='container lg:px-16 xl:px-20 py-20'>
        <div className='flex items-center lg:flex-row flex-col'>
          <div
            className='  flex items-center justify-center   w-full '>
            <div className=' '>
              <div className='flex-1 flex flex-col justify-center w-full'>

                <div className='mb-6'>
                  <h3 className=' text-blue-midnight_blue mt-4 mb-2 text-2xl lg:text-3xl'>Welcome back</h3>
                  <p className='text-sm text-foreground-light'>To Get Started, Enter Your Company Information
                  </p>
                </div>

                <Stepper
                  isComplete={isComplete}
                  setIsComplete={setIsComplete}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  stepsConfig={CHECKOUT_STEPS} >
                  <div>

                    <CompanySignUpInfo />

                  </div>
                </Stepper>


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

export default SignUp