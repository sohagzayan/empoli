"use client"
import React, { useEffect, useRef, useState } from 'react'
import { City, Country, State } from "country-state-city";
import { countryList, currencies, job_profile, required_skills } from '@/utils/data';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import JobProfileSelect from '@/components/containers/find_job_page/job_profile_select/JobProfileSelect';
import RequiredSkills from '@/components/containers/dashboard-content/post-new-job/required-skills/RequiredSkills';
import MultiSelect from '@/components/shared/multi-select/MultiSelect';
import { CiCircleCheck, CiSearch } from 'react-icons/ci';
import { Search } from 'lucide-react';




const Preferences = () => {
    const [activeCurrenciesSymbol, setActiveCurrenciesSymbol] = useState<any>(currencies[0].symbol)
    const [selectedRole, setSelectedRole] = useState<string[]>([]);


    const handleSelectToleRemove = (role: string) => {
        setSelectedRole(selectedRole.filter((selected: any) => selected !== role));
    };


    return (
        <div className='container lg:px-16 xl:px-20 mt-10'>
            <div className='w-[900px] bg-white border rounded-[8px] p-[30px] mx-auto'>
                <form action="">

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">Where are you in your job search?</h2>
                        <div className='flex items-center justify-between gap-3 flex-wrap md:flex-nowrap mt-2'>
                            <div className=''>
                                <div className='flex items-center gap-2 border p-2 rounded-full'>
                                    <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                    <label className="block  text-foreground-light text-sm" htmlFor="email">
                                        Ready to interview
                                    </label>
                                </div>
                                <div className='border-l px-2 mx-2 mt-1'>
                                    <span className='text-[12px] font-medium'>This means:</span>
                                    <p className='text-[12px]'>You’re actively looking for new work and ready to interview. Your job profile will be visible by startups.</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex items-center gap-2 border p-2 rounded-full'>
                                    <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                    <label className="block  text-foreground-light text-sm" htmlFor="email">
                                        Open to offers
                                    </label>
                                </div>
                                <div className='border-l px-2 mx-2 mt-1'>
                                    <span className='text-[12px] font-medium'>This means:</span>
                                    <p className='text-[12px]'>You’re not looking but open to hear about new opportunities. Your job profile will be visible to startups.</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex items-center gap-2 border p-2 rounded-full'>
                                    <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                    <label className="block  text-foreground-light text-sm" htmlFor="email">
                                        Closed to offers
                                    </label>
                                </div>
                                <div className='border-l px-2 mx-2 mt-1'>
                                    <span className='text-[12px] font-medium'>This means:</span>
                                    <p className='text-[12px]'>You’re not looking and don’t want to hear about new opportunities. Your job profile will be hidden to startups.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            What type of job are you interested in?
                        </h2>
                        <p className='text-[12px]'>Choose just one for now. You can change this or add more types later</p>

                        <div className='flex items-center gap-4 mt-2'>

                            <div className='flex items-center gap-2 border py-2 px-4 rounded-full'>
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Full-time Employee
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border py-2 px-4 rounded-full'>
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Contractor
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border py-2 px-4 rounded-full'>
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Intern
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border py-2 px-4 rounded-full'>
                                <input type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Co-founder
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className="relative mb-6">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            What is your desired salary?
                        </h2>
                        <p className='text-[12px]'>
                            This information will never be shown on your public profile
                        </p>
                        <div className=' mt-2'>
                            <div className='flex items-center gap-6'>
                                <div className='flex items-center gap-2'>
                                    <label htmlFor="">{activeCurrenciesSymbol}</label>
                                    <input type="text" className='peer/input block box-border  rounded-md w-[100px] shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border  border-control text-sm px-4 py-2'
                                    />
                                </div>
                                <select
                                    onChange={(e) => {
                                        console.log("e", e.target.value)
                                        setActiveCurrenciesSymbol(e.target.value)
                                    }}
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {currencies.map((c) =>
                                        <option key={c.name} value={c.symbol}>{c.name} ({c.symbol})</option>
                                    )}
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            What kind of role are you looking for?
                        </h2>
                        <p className='text-[12px]'>Tip: You can select more than one</p>
                        <div className=' mt-2 flex items-center gap-4'>
                            <div>
                                <ul className='flex flex-wrap items-center gap-4 mb-2'>
                                    {selectedRole.map((role: any) =>
                                        <li
                                            className='bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2'

                                            onClick={() => handleSelectToleRemove(role)}
                                            key={role + 10}>
                                            <CiCircleCheck strokeWidth={1.25} size={20} /> {role}
                                        </li>)}
                                </ul>
                                <div className='w-[260px]'>
                                    <MultiSelect
                                        allSelectList={required_skills}
                                        placeholder="Select a role.. "
                                        setSelected={setSelectedRole}
                                        selected={selectedRole}
                                        searchIcon={true}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">What locations do you want to work in?</h2>
                        <div className='w-[260px] mt-2'>
                            <select id="countries" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2">
                                {countryList.map((country) => <option key={country} selected>{country}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="relative mb-6 flex items-center gap-2">
                        <input type="checkbox" name="" id="open_to_working_remotely" className='w-4 h-4' />
                        <label htmlFor="open_to_working_remotely" className='text-sm text-blue-midnight_blue'>Im open to working remotely</label>
                    </div>
                    <Button className=''>Create you profile</Button>
                </form>
            </div >
        </div >
    )
}

export default Preferences