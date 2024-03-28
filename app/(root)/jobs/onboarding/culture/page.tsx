"use client"
import React, { useRef, useState } from 'react'
import { countryList, currencies, flexible_remote_work_policy, job_profile, most_important_next_job, required_skills } from '@/utils/data';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import JobProfileSelect from '@/components/containers/find_job_page/job_profile_select/JobProfileSelect';
import RequiredSkills from '@/components/containers/dashboard-content/post-new-job/required-skills/RequiredSkills';
import MultiSelect from '@/components/shared/multi-select/MultiSelect';
import { CiCircleCheck, CiSearch } from 'react-icons/ci';
import { Check, Circle } from 'lucide-react';




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

    const handleMostImportantNextJob = (next: string) => {
        const valueToAdd = next.toLowerCase();
        const isValueSelected = selectedMostImportantNextJob.includes(valueToAdd);
        if (selectedMostImportantNextJob.length === 2 && !isValueSelected) {
            // If the maximum limit is reached and the value is not already selected, do nothing
            return;
        }

        if (isValueSelected) {
            // If the value is already selected, remove it from the array
            setSelectedMostImportantNextJob(prev => prev.filter(next => next.toLowerCase() !== valueToAdd));
        } else {
            // If the value is not selected, add it to the array
            setSelectedMostImportantNextJob(prev => [...prev, valueToAdd]);
        }

    }

    console.log("selectedMostImportantNextJob", selectedMostImportantNextJob)
    return (
        <div className='container lg:px-16 xl:px-20 mt-10'>
            <div className='w-[900px] bg-white border rounded-[8px] p-[30px] mx-auto'>
                <form action="">


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
                                            key={role + 10}>
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
                                            key={role + 10}>
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
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">Where are you in your job search?</h2>
                        <div className='flex items-center gap-3 flex-wrap md:flex-nowrap mt-2'>
                            <div className='flex items-center gap-2 border p-2 px-4 rounded-full'>
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Solving technical problems
                                </label>
                            </div>
                            <div className='flex items-center gap-2 border px-4 p-2 rounded-full'>
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
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
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Individual contributor
                                </label>
                            </div>
                            <div className='flex items-center gap-2 border px-4 p-2 rounded-full'>
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
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
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="email">
                                    Clear role and set of responsibilities. Consistent feedback from management.                              </label>
                            </div>
                            <div className='flex items-center gap-2 bg-light_gray font-semibold border px-4 p-2 rounded-full'>
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm text-blue-midnight_blue" htmlFor="email">
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
                            {flexible_remote_work_policy.map((next) => {
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
                            How important is it that you work in a quiet office?                       </h2>
                        <div className='flex items-center gap-3 flex-wrap mt-2'>
                            {flexible_remote_work_policy.map((next) => {
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
                            Describe what you are looking for in your next job
                        </h2>
                        <p className='text-sm'>Startups tell us this is one of the first things they look at in a profile</p>
                        <div className='flex items-center gap-3 flex-wrap mt-2'>
                            <span className='text-blue-midnight_blue text-sm -mb-2'>0 / 300</span>
                            <textarea
                                className='peer/input block box-border min-h-[120px] rounded-md w-full shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border  border-control text-sm px-4 py-2 '
                                name=""
                                id=""
                                placeholder='e.g., What drives my work ethic is building products that are user centered. I hope to see real impact from the work that I take on. I am looking for a small to medium sized company near Boston, ideally working on design systems and/or building out product features while working closely with design and PM.'
                            ></textarea>
                        </div>
                    </div>

                    <div className='my-4'>
                        <p className='flex items-center gap-2 text-green-500 text-sm'> <Check strokeWidth={1.25} size={20} /> <strong>You are almost done!</strong> Complete profile and start searching for your dream job.</p>
                    </div>

                    <Button className=''>Save and continue</Button>
                </form>
            </div >
        </div >
    )
}

export default Culture