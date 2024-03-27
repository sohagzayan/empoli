"use client"
import React, { useEffect, useRef, useState } from 'react'
import { City, Country, State } from "country-state-city";
import { job_profile } from '@/utils/data';
import { Button } from '@/components/ui/button';


let countryList = [
    "China",
    "India",
    "United States",
    "Indonesia",
    "Brazil",
    "Nigeria",
    "Japan",
    "Russia",
    "Bangladesh",
    "Mexico",
    "Germany",
    "Philippines",
    "Turkey",
    "Vietnam",
    "United Kingdom",
    "Iran",
    "France",
    "Thailand",
    "Italy",
    "Egypt",
]

let onboarding_experience = [
    "< 1 Year",
    "1 Year",
    "2 Years",
    "3 Years",
    "4 Years",
    "5 Years",
    "6 Years",
    "7 Years",
    "8 Years",
    "9 Years",
    "10+ Years",
]

const ExtendedProfile = () => {

    return (
        <div className='container lg:px-16 xl:px-20 mt-10'>
            <div className='w-[900px] bg-white border rounded-[8px] p-[30px] mx-auto'>
                <form action="">
                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">Polyglot</h2>
                        <p className="text-foreground-light text-xs lg:text-sm">Broad skill sets. Growth mindset.</p>
                        <div className='w-[260px] mt-2'>
                            <select id="countries" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2">
                                {countryList.map((country) => <option key={country} selected>{country}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">What best describes your current role?
                            Software Engineer</h2>
                        <div className='w-[260px] mt-2'>
                            <select id="countries" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2">
                                {job_profile.map((country) => <option key={country} selected>{country}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">How many years of experience do you have in your current role?</h2>
                        <div className='w-[260px] mt-2'>
                            <select id="countries" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2">
                                {onboarding_experience.map((country) => <option key={country} selected>{country}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">Are you a student or new grad?</h2>
                        <div className='w-[260px] mt-2 flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <input id='student_or_new_grad' type="checkbox" className='w-4 h-4' />
                                <label htmlFor="student_or_new_grad">Yes</label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input id='student_or_new_grad' type="checkbox" className='w-4 h-4' />
                                <label htmlFor="student_or_new_grad">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">Where do you currently work?</h2>
                        <p className='text-blue-steel_blue text-sm'>Your company will never see that youre looking for a job</p>
                        <div className=' mt-2 flex  justify-between items-center gap-4'>
                            <div className='flex flex-col'>
                                <label className="block text-foreground-light text-sm" htmlFor="email">Job title
                                </label>
                                <input id='' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2'
                                    placeholder='s.g. Design Director'
                                />
                            </div>
                            <div className='flex  flex-col '>
                                <label className="block text-foreground-light text-sm" htmlFor="email">Company
                                </label>
                                <input id='' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2'
                                    placeholder='s.g. google'
                                />
                            </div>
                            <div className='flex items-center gap-2'>
                                <input id='student_or_new_grad' type="checkbox" className='' />
                                <label htmlFor="student_or_new_grad">Im not currently employed</label>
                            </div>
                        </div>
                    </div>

                    <div className="relative  mb-6 bg-light_gray p-6">
                        <div className=' mt-2 flex flex-col items-center gap-4 w-[260px]'>
                            <div className='flex flex-col'>
                                <label className="block text-foreground-light text-sm" htmlFor="email">
                                    Linkedin Profile
                                </label>
                                <input id='' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2'
                                    placeholder='https://linkedin.com/in/'
                                />
                            </div>
                            <div className='flex  flex-col '>
                                <label className="block text-foreground-light text-sm" htmlFor="email">Your Website
                                </label>
                                <input id='' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2'
                                    placeholder='https://mypersonalwebsite.com'
                                />
                            </div>

                        </div>
                    </div>

                    <Button className=''>Create you profile</Button>
                </form>
            </div >
        </div >
    )
}

export default ExtendedProfile