"use client"
import React, { useState } from 'react'
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { Check, Circle } from 'lucide-react';
import { CiCircleCheck } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import MultiSelect from '@/components/shared/multi-select/MultiSelect';
import LoadingCircle from '@/components/shared/loading-circle/LoadingCircle';
import { currencies, most_important_next_job, required_skills } from '@/utils/data';



const Culture = () => {
    const [activeCurrenciesSymbol, setActiveCurrenciesSymbol] = useState<any>(currencies[0].symbol)
    const [selectedMostInterestedWorkingWith, setSelectedMostInterestedWorkingWith] = useState<string[]>([]);
    const [selectedTechnologiesNotWilling, setSelectedTechnologiesNotWilling] = useState<string[]>([]);
    const [selectedMostImportantNextJob, setSelectedMostImportantNextJob] = useState<string[]>([]);


    const handleSelectMostInterestedWorkingWithRemove = (role: string) => {
        setSelectedMostInterestedWorkingWith(selectedMostInterestedWorkingWith.filter((selected: any) => selected !== role));
    };

    const handleSelectTechnologiesNotWillingRemove = (role: string) => {
        setSelectedTechnologiesNotWilling(selectedTechnologiesNotWilling.filter((selected: any) => selected !== role));
    };
    const [loading, setLoading] = useState(false)
    const router = useRouter()






    const formik = useFormik({
        initialValues: {
            technology_interests: [],
            unpreferred_technologies: [],
            primary_motivators: "",
            future_career_aspirations: "",
            preferred_work_environment: "",
            most_important_to_you_for_next_job: [],
            remote_work_flexibility_preference: "",
            quiet_office_preference_priority: "",
            next_job_desires: "",
        },
        validationSchema: Yup.object({
            technology_interests: Yup.array().of(Yup.string()),
            unpreferred_technologies: Yup.array().of(Yup.string()),
            primary_motivators: Yup.string(),
            future_career_aspirations: Yup.string(),
            preferred_work_environment: Yup.string(),
            most_important_to_you_for_next_job: Yup.array().of(Yup.string()),
            remote_work_flexibility_preference: Yup.string(),
            quiet_office_preference_priority: Yup.string(),
            next_job_desires: Yup.string().required("Please tell us what you're looking for in your next role.").max(300, "You over the 300 characters"),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            try {
                console.log("values >", values)
                console.log("all values >", values);
                const res = await axios.post("/api/onboarding/culture", values)
                if (res.statusText) {
                    router.push("/jobs/onboarding/resume")
                    setLoading(false)
                }
                console.log("res", res)
                setLoading(false)

            } catch (error: any) {
                console.log("error > ", error.message)
                setLoading(false)
            }

        },
    });


    const technology_interests_roleValidation = (value: any) => {
        formik.setFieldValue("technology_interests", value)
    }

    const unpreferred_technologies_roleValidation = (value: any) => {
        formik.setFieldValue("unpreferred_technologies", value)
    }



    const handleMostImportantNextJob = (next: string) => {
        const valueToAdd = next.toLowerCase();
        const isValueSelected = selectedMostImportantNextJob.includes(valueToAdd);
        if (selectedMostImportantNextJob.length === 2 && !isValueSelected) {
            // If the maximum limit is reached and the value is not already selected, do nothing
            return;
        }

        if (isValueSelected) {
            // If the value is already selected, remove it from the array
            const excludesValue = selectedMostImportantNextJob.filter(next => next.toLowerCase() !== valueToAdd)
            setSelectedMostImportantNextJob(excludesValue);
            formik.setFieldValue("most_important_to_you_for_next_job", excludesValue)

        } else {
            // If the value is not selected, add it to the array
            setSelectedMostImportantNextJob(prev => [...prev, valueToAdd]);
            formik.setFieldValue("most_important_to_you_for_next_job", [...selectedMostImportantNextJob, valueToAdd])

        }

    }



    return (
        <div className='container lg:px-16 xl:px-20 mt-10'>
            <div className='w-[900px] bg-white border rounded-[8px] p-[30px] mx-auto'>
                <form onSubmit={formik.handleSubmit}>


                    <div className="relative mb-6">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            Which technologies are you <span className="text-primary">most</span> interested in working with?                        </h2>
                        <div className=' mt-2 flex items-center gap-4'>
                            <div>
                                <ul className='flex flex-wrap items-center gap-4 mb-2'>
                                    {selectedMostInterestedWorkingWith.map((role: any) =>
                                        <li
                                            className='bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2'

                                            onClick={() => handleSelectMostInterestedWorkingWithRemove(role)}
                                            key={role + 160}>
                                            <CiCircleCheck strokeWidth={1.25} size={20} /> {role}
                                        </li>)}
                                </ul>
                                <div className='w-[260px]'>
                                    <MultiSelect
                                        allSelectList={required_skills}
                                        placeholder="Select up to 5 technologies "
                                        setSelected={setSelectedMostInterestedWorkingWith}
                                        selected={selectedMostInterestedWorkingWith}
                                        searchIcon={true}
                                        maximumSelect={5}
                                        validationFunc={technology_interests_roleValidation}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="relative mb-6">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            Which technologies are you <span className='text-red-500'>not</span> willing to work with?
                        </h2>
                        <div className=' mt-2 flex items-center gap-4'>
                            <div>
                                <ul className='flex flex-wrap items-center gap-4 mb-2'>
                                    {selectedTechnologiesNotWilling.map((role: any) =>
                                        <li
                                            className='bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2'

                                            onClick={() => handleSelectTechnologiesNotWillingRemove(role)}
                                            key={role + 170}>
                                            <CiCircleCheck strokeWidth={1.25} size={20} /> {role}
                                        </li>)}
                                </ul>
                                <div className='w-[260px]'>
                                    <MultiSelect
                                        allSelectList={required_skills}
                                        placeholder="Select up to 5 technologies "
                                        setSelected={setSelectedTechnologiesNotWilling}
                                        selected={selectedTechnologiesNotWilling}
                                        searchIcon={true}
                                        validationFunc={unpreferred_technologies_roleValidation}
                                        maximumSelect={5}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">What motivates you more?
                        </h2>
                        <div className='flex items-center gap-3 flex-wrap md:flex-nowrap mt-2'>
                            <div className='flex items-center gap-2 border p-2 px-4 rounded-full'>
                                <input
                                    id='Solving technical problems'
                                    type="checkbox"
                                    className='w-4 h-4 rounded-full  border-light_gray'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("primary_motivators", e.target.checked ? 'solving technical problems' : "")
                                        }
                                    }}
                                    value="solving technical problems"
                                    name='primary_motivators'
                                    checked={formik.values.primary_motivators === "solving technical problems"}

                                />
                                <label className="block  text-foreground-light text-sm" htmlFor="Solving technical problems">
                                    Solving technical problems
                                </label>
                            </div>
                            <div className='flex items-center gap-2 border px-4 p-2 rounded-full'>
                                <input
                                    id='building products'
                                    type="checkbox"
                                    className='w-4 h-4  rounded-full  border-light_gray'
                                    value="building products"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("primary_motivators", e.target.checked ? 'building products' : "")
                                        }
                                    }}
                                    name='primary_motivators'
                                    checked={formik.values.primary_motivators === "building products"}

                                />
                                <label className="block  text-foreground-light text-sm" htmlFor="building products">
                                    building products
                                </label>
                            </div>


                        </div>
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">Over the next five years, what career track do you want to follow?
                        </h2>
                        <div className='flex items-center gap-3 flex-wrap md:flex-nowrap mt-2'>
                            <div className='flex items-center gap-2 border p-2 px-4 rounded-full'>
                                <input
                                    id='individual contributor'
                                    name='future_career_aspirations'
                                    type="checkbox"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("future_career_aspirations", e.target.checked ? 'individual contributor' : "")
                                        }
                                    }}
                                    checked={formik.values.future_career_aspirations === "individual contributor"}
                                    value='individual contributor'
                                    className='w-4 h-4 rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm cursor-pointer" htmlFor="individual contributor">
                                    Individual contributor
                                </label>
                            </div>
                            <div className='flex items-center gap-2 border px-4 p-2 rounded-full'>
                                <input
                                    id='manager'
                                    name='future_career_aspirations'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("future_career_aspirations", e.target.checked ? 'manager' : "")
                                        }
                                    }}
                                    checked={formik.values.future_career_aspirations === "manager"}
                                    value='manager'
                                    type="checkbox"
                                    className='w-4 h-4 
                                    rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm cursor-pointer" htmlFor="manager">
                                    Manager
                                </label>
                            </div>


                        </div>
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            What environment do you work better in?
                        </h2>
                        <div className='flex items-center gap-3 flex-wrap mt-2'>
                            <div className='flex items-center gap-2 border font-semibold bg-light_gray p-2 px-4 rounded-full'>
                                <input
                                    id='clear_role'
                                    name='preferred_work_environment'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("preferred_work_environment", e.target.checked ?
                                                'clear role and set of responsibilities. Consistent feedback from management.' : "")
                                        }
                                    }}
                                    checked={formik.values.preferred_work_environment === "clear role and set of responsibilities. Consistent feedback from management."}
                                    value='clear role and set of responsibilities. Consistent feedback from management. '
                                    type="checkbox"
                                    className='w-4 h-4  rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="clear_role">
                                    Clear role and set of responsibilities. Consistent feedback from management.
                                </label>
                            </div>
                            <div className='flex items-center gap-2 bg-light_gray font-semibold border px-4 p-2 rounded-full'>
                                <input
                                    id='employees_wear'
                                    name='preferred_work_environment'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("preferred_work_environment", e.target.checked ? 'employees wear a lot of hats. Assignments often require employees to figure it out on their own.' : "")
                                        }
                                    }}
                                    checked={formik.values.preferred_work_environment === "employees wear a lot of hats. Assignments often require employees to figure it out on their own."}
                                    value='employees wear a lot of hats. Assignments often require employees to figure it out on their own.'
                                    type="checkbox"
                                    className='w-4 h-4 rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="employees_wear">
                                    Employees wear a lot of hats. Assignments often require employees to figure it out on their own.
                                </label>
                            </div>


                        </div>
                    </div>


                    <div className="relative mb-6 ">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            Whats most important to you in your next job? (Max 2)
                        </h2>
                        <div className='flex items-center gap-3 flex-wrap mt-2'>
                            {most_important_next_job.map((next) => {
                                const isExits = selectedMostImportantNextJob.includes(next.toLowerCase())
                                return <div onClick={() => handleMostImportantNextJob(next)} key={next} className={`flex items-center cursor-pointer gap-2 font-semibold  p-2 px-4 rounded-full ${isExits ? 'bg-primary text-white border-primary' : 'border text-blue-midnight_blue bg-light_gray'}`}>
                                    {isExits ? <span className='text-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                                    </span>
                                        :
                                        <Circle strokeWidth={1.25} size={18} className='text-blue-steel_blue' />
                                    }


                                    <label className="block  text-foreground-light text-sm cursor-pointer" htmlFor={next}>
                                        {next}
                                    </label>
                                </div>
                            })}
                        </div>
                    </div>

                    <div className="relative mb-6 ">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            How important is it that your next job has a flexible remote work policy?                        </h2>
                        <div className='flex items-center gap-3 flex-wrap mt-2'>

                            <div className='flex items-center gap-2 border font-semibold bg-light_gray p-2 px-4 rounded-full'>
                                <input
                                    id='very important'
                                    name='remote_work_flexibility_preference'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("remote_work_flexibility_preference", e.target.checked ?
                                                'very important' : "")
                                        }
                                    }}
                                    checked={formik.values.remote_work_flexibility_preference === "very important"}
                                    value='very important'
                                    type="checkbox"
                                    className='w-4 h-4  rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="very important">
                                    Very important
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border font-semibold bg-light_gray p-2 px-4 rounded-full'>
                                <input
                                    id='important'
                                    name='remote_work_flexibility_preference'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("remote_work_flexibility_preference", e.target.checked ?
                                                'important' : "")
                                        }
                                    }}
                                    checked={formik.values.remote_work_flexibility_preference === "important"}
                                    value='important'
                                    type="checkbox"
                                    className='w-4 h-4  rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="important">
                                    Important
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border font-semibold bg-light_gray p-2 px-4 rounded-full'>
                                <input
                                    id='not important'
                                    name='remote_work_flexibility_preference'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("remote_work_flexibility_preference", e.target.checked ?
                                                'not important' : "")
                                        }
                                    }}
                                    checked={formik.values.remote_work_flexibility_preference === "not important"}
                                    value='not important'
                                    type="checkbox"
                                    className='w-4 h-4  rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="not important">
                                    Not important
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className="relative mb-6 ">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            How important is it that you work in a quiet office?                       </h2>
                        <div className='flex items-center gap-3 flex-wrap mt-2'>

                            <div className='flex items-center gap-2 border font-semibold bg-light_gray p-2 px-4 rounded-full'>
                                <input
                                    id='very important quiet_office'
                                    name='quiet_office_preference_priority'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("quiet_office_preference_priority", e.target.checked ?
                                                'very important' : "")
                                        }
                                    }}
                                    checked={formik.values.quiet_office_preference_priority === "very important"}
                                    value='very important'
                                    type="checkbox"
                                    className='w-4 h-4  rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="very important quiet_office">
                                    Very important
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border font-semibold bg-light_gray p-2 px-4 rounded-full'>
                                <input
                                    id='important quiet_office'
                                    name='quiet_office_preference_priority'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("quiet_office_preference_priority", e.target.checked ?
                                                'important' : "")
                                        }
                                    }}
                                    checked={formik.values.quiet_office_preference_priority === "important"}
                                    value='important'
                                    type="checkbox"
                                    className='w-4 h-4  rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="important quiet_office">
                                    Important
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border font-semibold bg-light_gray p-2 px-4 rounded-full'>
                                <input
                                    id='not important quiet_office'
                                    name='quiet_office_preference_priority'
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("quiet_office_preference_priority", e.target.checked ?
                                                'not important' : "")
                                        }
                                    }}
                                    checked={formik.values.quiet_office_preference_priority === "not important"}
                                    value='not important'
                                    type="checkbox"
                                    className='w-4 h-4  rounded-full  border-light_gray'
                                />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="not important quiet_office">
                                    Not important
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className="relative mb-6 ">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            Describe what you are looking for in your next job
                        </h2>
                        <p className='text-sm'>Startups tell us this is one of the first things they look at in a profile</p>
                        <div className='flex items-center gap-3 flex-wrap mt-2'>
                            <span className={`text-blue-midnight_blue text-sm -mb-2 ${formik.touched.next_job_desires && formik.errors.next_job_desires ? "text-red-500" : null}`}> {formik.values.next_job_desires.length} / 300</span>
                            <textarea
                                onChange={formik.handleChange}
                                value={formik.values.next_job_desires}
                                className=' block box-border min-h-[120px] rounded-md w-full shadow-sm transition-all text-foreground   group  border  border-control text-sm px-4 py-2 '
                                name="next_job_desires"
                                id="next_job_desires"
                                placeholder='e.g., What drives my work ethic is building products that are user centered. I hope to see real impact from the work that I take on. I am looking for a small to medium sized company near Boston, ideally working on design systems and/or building out product features while working closely with design and PM.'
                            ></textarea>
                            {formik.touched.next_job_desires && formik.errors.next_job_desires ? (
                                <p className='text-sm text-red-500 '>{formik.errors.next_job_desires}</p>
                            ) : null}
                        </div>
                    </div>

                    <div className='my-4'>
                        <p className='flex items-center gap-2 text-green-500 text-sm'> <Check strokeWidth={1.25} size={20} /> <strong>You are almost done!</strong> Complete profile and start searching for your dream job.</p>
                    </div>

                    <Button className=''>
                        {loading ? <div>
                            <LoadingCircle />
                            Loading
                        </div> : "Save and continue"}
                    </Button>
                </form>
            </div >
        </div >
    )
}

export default Culture