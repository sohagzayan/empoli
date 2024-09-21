'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Stepper from '@/components/containers/recruiter/recruiter-stepper/Stepper'
import { Button } from '@/components/ui/button'
import AuthNav from '@/components/shared/auth-nav/AuthNav'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { MdErrorOutline } from 'react-icons/md'
import { Formik, FormikHelpers } from 'formik'
import { registerSurveyValidationSchema } from '@/utils/validation-schemas'
import { CountryDropdown } from 'react-country-region-selector';
import { FaCheck } from 'react-icons/fa'


let jobOffer = [
    { label: "100% Remote", value: "any_level" },
    { label: "Hybrid Remote", value: "partial" },
    { label: "Flexible Schedule", value: "flexschedule" },
    { label: "Freelance", value: "freelance" },
    { label: "others", value: "other" },
]


const Survey = () => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [countryState, setCountryState] = useState<any>({ country: null })
    const [selectedOffer, setSelectedOffer] = useState<string[]>([]);
    const [selectedRequirementsOption, setSelectedRequirementsOption] = useState(null);
    const [selectedRequirementsOptionError, setSelectedRequirementsOptionError] = useState<any>(null)

    const { data: session } = useSession()

    console.log("session form survy", session?.user?.id)


    const selectCountry = (val: any) => {
        setCountryState({ country: val });
    }


    const handleConfirmationSelection = (option: any) => {
        setSelectedRequirementsOption(option);
    };

    const handleCheckboxChange = (event: any) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelectedOffer((prevSelectedItems) => [...prevSelectedItems, value]);
        } else {
            setSelectedOffer((prevSelectedItems) =>
                prevSelectedItems.filter((item) => item !== value)
            );
        }
    };


    const validate_requirements_option = (option: any) => {
        // Check if skills array is not empty
        if (!option) {
            setSelectedRequirementsOptionError("This  field is required")
            return false;
        }
        // If all validations pass, return null (indicating no error)
        setSelectedRequirementsOptionError(null)
        return true;
    };






    const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
        console.log("submiting")
        setLoading(true)
        const isPass = validate_requirements_option(selectedRequirementsOption)
        if (!isPass) {
            return
        }
        try {
            console.log("all signup values:", values)
            let response: any = await fetch(`/api/recruiter/job/update/${session?.user?.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    ...values,
                    selectedRequirementsOption,
                    selectedOffer,
                    countryState
                }),
            })

            console.log("response", response)
            const data = await response.json()
            console.log("res data", data)
            if (!response.ok) {
                throw new Error(data.message)
            }
            // await signIn('credentials', {
            //     email: values.workEmailAddress,
            //     password,
            //     callbackUrl: '/members/recruiter/survey',
            // })
            setLoading(false)
            toast.success(data.message)

        } catch (error: any) {
            setLoading(false)
            console.log("error >", error)
            toast.error(error.message)
            actions.setErrors({ email: error.message || 'An error occurred' })
        }
        actions.setSubmitting(false)
    }



    console.log("countryState", countryState)


    return (
        <div className='bg-[#F8F8F8] min-h-full'>
            <AuthNav />
            <div className='container lg:px-16 xl:px-20 py-20'>
                <div className='mb-6'>
                    <h3 className=' text-blue-midnight_blue  mb-2 text-2xl lg:text-3xl'>Welcome </h3>
                    <p className='text-sm text-foreground-light'>Enter Your Company Information

                    </p>
                </div>

                <div className='grid grid-cols-12 gap-20'>
                    <div
                        className='w-full col-span-9'>
                        <div className=' '>
                            <div className='flex-1 flex flex-col justify-center w-full'>
                                {/* flexible_job_types_offered */}
                                {/* company_based */}
                                {/* flexible_job_requirements_agreement */}
                                <div>
                                    <Formik
                                        initialValues={{ company_approach: '', flexible_jobs_6months: '', desired_job_sample: '', }}
                                        validationSchema={registerSurveyValidationSchema}
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
                                                    e.preventDefault()
                                                    // validate_requirements_option(selectedRequirementsOption)

                                                    handleSubmit(e)
                                                }}>

                                                    <div className='flex flex-col w-full'>

                                                        <div className='mb-4 '>
                                                            <div className='relative'>
                                                                <label htmlFor="company_based" className='block text-foreground-light text-sm mb-1'>Where is your company based?
                                                                </label>
                                                                <CountryDropdown
                                                                    classes="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2"
                                                                    value={countryState.country}
                                                                    onChange={selectCountry} />


                                                                {/* {errors.firstName && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                                        <MdErrorOutline size={18} />
                                                                    </div>
                                                                </div>} */}
                                                            </div>

                                                            {/* <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.firstName}</p> */}
                                                        </div>

                                                        <div className='mb-4 '>
                                                            <div className='relative'>
                                                                <label htmlFor="company_approach" className='block text-foreground-light text-sm mb-1'>What level of remote work best describes your company’s approach?
                                                                </label>

                                                                <select
                                                                    name='company_approach'
                                                                    value={values.company_approach}
                                                                    onChange={handleChange}
                                                                    className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.company_approach && 'border-red-600'}`}>
                                                                    <option selected>Please select...</option>
                                                                    <option value="US">Remote-Only (100%)</option>
                                                                    <option value="CA">Remote-First</option>
                                                                    <option value="FR">Hybrid (Remote & In-Office)</option>
                                                                    <option value="DE">Partial Remote Options</option>
                                                                    <option value="DE">A Range of Remote Options</option>
                                                                </select>

                                                                {errors.company_approach && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                                        <MdErrorOutline size={18} />
                                                                    </div>
                                                                </div>}
                                                            </div>

                                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.company_approach}</p>
                                                        </div>

                                                        <div className='mb-4 '>
                                                            <div className='relative'>
                                                                <label htmlFor="flexible_jobs_6months" className='block text-foreground-light text-sm mb-1'>WHow many remote or other flexible jobs do you plan to fill in the next six months?
                                                                </label>

                                                                <select
                                                                    name='flexible_jobs_6months'
                                                                    value={values.flexible_jobs_6months}
                                                                    onChange={handleChange}
                                                                    className={`peer/input w-2/4 block box-border  rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.flexible_jobs_6months && 'border-red-600'}`}>
                                                                    <option selected value="1-5">1-5</option>
                                                                    <option value="6-10">6-10</option>
                                                                    <option value="11-24">11-24</option>
                                                                    <option value="25-49">25-49</option>
                                                                    <option value="50+">50+</option>
                                                                </select>

                                                                {errors.flexible_jobs_6months && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                                        <MdErrorOutline size={18} />
                                                                    </div>
                                                                </div>}
                                                            </div>

                                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.flexible_jobs_6months}</p>
                                                        </div>


                                                        <div className='mb-4'>
                                                            <div className=' relative'>
                                                                <label htmlFor="desired_job_sample" className='block text-foreground-light text-sm mb-1'>If you have one, please provide a sample of a job you’d like to post.
                                                                </label>
                                                                <input
                                                                    name='desired_job_sample'
                                                                    id='desired_job_sample'
                                                                    type="text"
                                                                    value={values.desired_job_sample}
                                                                    onChange={handleChange}
                                                                    className={`peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2  ${errors.desired_job_sample && 'border-red-600'}`}
                                                                    placeholder='https://Company.com/job/' />

                                                                {errors.desired_job_sample && <div className='absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center top-5'>
                                                                    <div className=' flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-600 '>
                                                                        <MdErrorOutline size={18} />
                                                                    </div>
                                                                </div>}
                                                            </div>
                                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.desired_job_sample}</p>
                                                        </div>


                                                        <div className='mb-4'>
                                                            <label htmlFor="flexible_job_requirements_agreement" className='block text-foreground-light text-sm mb-1'>
                                                                What types of flexible jobs do you plan to offer?
                                                            </label>
                                                            <div className='flex items-center justify-between gap-3'>
                                                                {jobOffer.map((offer, index) => <div key={offer.value + index}
                                                                    className='w-full'
                                                                >
                                                                    <input
                                                                        onChange={handleCheckboxChange}
                                                                        type="checkbox" className="hidden " autoComplete="off" name="" id={offer.value} value={offer.value}
                                                                    />
                                                                    <label
                                                                        className={`border border-primary font-medium px-[0.25rem] w-full text-center text-[14px] text-primary py-2 capitalize rounded-md 
                                                                        transition-all ease-in-out duration-200 cursor-pointer hover:bg-primary hover:text-white  flex items-center justify-center gap-2 last:only: ${selectedOffer.includes(offer.value) ? "bg-primary text-white " : "bg-transparent "}`}
                                                                        htmlFor={offer.value}><i className="fa fa-fw fa-check text-white"></i>
                                                                        {selectedOffer.includes(offer.value) && <span> <FaCheck /></span>
                                                                        }
                                                                        {offer.label}
                                                                    </label>
                                                                </div>
                                                                )}
                                                                {/* <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{errors.}</p> */}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h3 className='text-primary  mb-2 text-2xl lg:text-xl '>Flexible Job Requirements</h3>
                                                            <p className='text-blue-midnight_blue  mb-2 text-[14px] font-light '>FlexJobs is committed to working with employers who are high-quality and offer professionally-oriented remote and flexible jobs. We vet every organization along these lines and ask you to review the following terms:</p>
                                                            <ul>
                                                                <li className='text-[14px] font-normal text-blue-midnight_blue mb-4'>1. <strong>Every job you post or recruit for on FlexJobs must offer a flexible work option</strong> such as remote, freelance, part-time, alternative, or flexible schedule.</li>
                                                                <li className='text-[14px] font-normal text-blue-midnight_blue mb-4'>2. Every job you post or recruit for on FlexJobs must be <strong>professional-level or career-oriented.</strong>
                                                                </li>
                                                                <li className='text-[14px] font-normal text-blue-midnight_blue mb-4'>1. Every job you post or recruit for on FlexJobs <strong>must be immediately available</strong> (no pool jobs), must offer a base rate of pay (no commission-only), and must have no fees/investments to apply or get started (no independent sales representative or multi-level marketing roles).</li>
                                                                <li className='text-[14px] font-normal text-blue-midnight_blue mb-4'>1. <Link href="/ff" className='text-primary hover:underline'>Job Posting Rules</Link></li>
                                                            </ul>
                                                        </div>

                                                        <div className='mb-4'>
                                                            <div className='text-[14px] font-medium text-blue-midnight_blue flex items-center justify-between '>
                                                                <p>Please Confirm:</p>
                                                                <div className='flex items-center gap-3'>
                                                                    <input
                                                                        type="radio"
                                                                        id="yes"
                                                                        name="confirmation"
                                                                        value="Yes, I agree"
                                                                        checked={selectedRequirementsOption === "Yes, I agree"}
                                                                        onChange={() => handleConfirmationSelection("Yes, I agree")}
                                                                    />
                                                                    <label htmlFor="yes">Yes, I agree</label>
                                                                </div>
                                                                <div className='flex items-center gap-3'>
                                                                    <input
                                                                        type="radio"
                                                                        id="no"
                                                                        name="confirmation"
                                                                        value="No, I don't agree"
                                                                        checked={selectedRequirementsOption === "No, I don't agree"}
                                                                        onChange={() => handleConfirmationSelection("No, I don't agree")}
                                                                    />
                                                                    <label htmlFor="no">No, I don&apos;t agree</label>
                                                                </div>
                                                                <div className='flex items-center gap-3'>
                                                                    <input
                                                                        type="radio"
                                                                        id="notSure"
                                                                        name="confirmation"
                                                                        value="I'm not sure I understand"
                                                                        checked={selectedRequirementsOption === "I'm not sure I understand"}
                                                                        onChange={() => handleConfirmationSelection("I'm not sure I understand")}
                                                                    />
                                                                    <label htmlFor="notSure">I&apos;m not sure I understand</label>
                                                                </div>
                                                            </div>
                                                            <p className='text-red-600 transition-all data-show:mt-2 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal text-sm mt-1'>{selectedRequirementsOptionError}</p>
                                                        </div>

                                                        <div className='flex justify-end'>
                                                            <Button
                                                                type='submit'
                                                                className='w-2/6'>Next</Button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </Formik>
                                </div>

                            </div>
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


export default Survey
