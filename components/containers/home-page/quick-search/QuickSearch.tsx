import PopularSearches from '@/components/shared/popular-searches/PopularSearches'
import { Button } from '@/components/ui/button'
import { MapPin, Search } from 'lucide-react'
import React from 'react'
import { HiBriefcase } from 'react-icons/hi'

const QuickSearch = () => {
    return (
        <div className='md:w-5/6 mx-auto mt-4 text-[14px]  '>
            <div>
                <div className='bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3'>
                    <form action="">
                        <div className='registration-form text-dark text-start lg:bg-[rgb(249,250,251,1)] lg:rounded-md '>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full'>
                                <div className="flex items-center gap-1 relative lg:bg-transparent bg-[rgb(249,250,251,1)] rounded-md px-2">
                                    <div className='absolute top-4 left-2 '>
                                        <HiBriefcase className='text-2xl text-primary' />
                                    </div>
                                    <input type="text" id="job-keyword" className=" filter-input-box bg-transparent   w-full  border-0 pl-[40px] pr-[6px] pb-[15px] pt-[13px] focus:outline-none focus:border-none h-[60px]" placeholder="Search your Keywords" name="name" />
                                </div>

                                <div className='flex items-center gap-1 relative lg:bg-transparent bg-[rgb(249,250,251,1)] rounded-md px-2'>
                                    <div className='absolute top-4 left-2 '>
                                        <HiBriefcase className='text-2xl text-primary' />
                                    </div>
                                    <select
                                        id="countries"
                                        className=" filter-input-box bg-transparent  w-full  border-0 pl-[40px] pr-[6px] pb-[15px] pt-[13px] focus:outline-none focus:border-none  h-[60px]">
                                        <option selected>Jobs type</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>


                                <div className='flex items-center gap-1 relative lg:bg-transparent bg-[rgb(249,250,251,1)] rounded-md px-2'>
                                    <div className='absolute top-4 left-2 '>
                                        <HiBriefcase className='text-2xl text-primary' />
                                    </div>
                                    <select
                                        id="countries"
                                        className="filter-input-box bg-transparent w-full  border-0 pl-[40px] pr-[6px] pb-[15px] pt-[13px] focus:outline-none focus:border-none h-[60px]">
                                        <option selected>Part-time/Full-time</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>


                                <input
                                    type='submit'
                                    className='bg-primary rounded-md  w-full h-[60px] py-2  text-white font-semibold'
                                    value="Search"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <PopularSearches />
            </div>
        </div>
    )
}

export default QuickSearch