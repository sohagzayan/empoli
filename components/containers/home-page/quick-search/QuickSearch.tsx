"use client"
import { Select } from '@/components/common'
import { Category } from '@/components/icons/svg'
import PopularSearches from '@/components/shared/popular-searches/PopularSearches'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiBriefcase } from 'react-icons/hi'

const QuickSearch = () => {

    const handleJobType = () => { }

    return (
        <div className='md:w-3/4 mx-auto mt-4 text-[14px] relative  '>
            <div>
                <div
                    className=' bg-transparent  border-0 shadow rounded-md p-3'>
                    <form action="">
                        <div className='registration-form text-dark text-start bg-customWhiteTransparent lg:rounded-md '>
                            <div className='flex lg:flex-row md:flex-row flex-col items-center w-full gap-6'>
                                <div className='flex items-center lg:flex-row md:flex-row  w-full'>
                                    <div className='w-full md:w-[200px] lg:w-[200px] border-r border-r-text8 h-full'>
                                        <Select
                                            name="category"
                                            placeholder="Category"
                                            options={[
                                                { value: "United States", label: "United States" },
                                                { value: "banana", label: "Banana" },
                                                { value: "blueberry", label: "Blueberry" },
                                                { value: "grapes", label: "Grapes" },
                                                { value: "pineapple", label: "Pineapple" },
                                            ]}
                                            // defaultValue="banana"
                                            onChange={handleJobType}
                                            triggerClassName="bg-transparent border-transparent text-text5 h-full"
                                            icon={<Category />}
                                            contentClassName="bg-[#181C3B] text-white"
                                        />

                                    </div>

                                    <div className='w-full md:w-[200px] lg:w-[200px] md:border-r lg:border-r border-r-text8 h-full'>
                                        <Select
                                            name="fruits"
                                            placeholder="Part-time/Full-time"
                                            options={[
                                                { value: "United States", label: "United States" },
                                                { value: "banana", label: "Banana" },
                                                { value: "blueberry", label: "Blueberry" },
                                                { value: "grapes", label: "Grapes" },
                                                { value: "pineapple", label: "Pineapple" },
                                            ]}
                                            defaultValue="banana"
                                            onChange={handleJobType}
                                            triggerClassName="bg-transparent text-text5 border-transparent"
                                            icon={<HiBriefcase className='text-2xl text-text5' />
                                            }
                                            contentClassName="bg-white"
                                        />
                                    </div>

                                </div>

                                <div className="w-full flex items-center gap-1 relative bg-transparent   px-2 ">
                                    <input type="text" id="job-keyword" className="text-text5 placeholder:text-text6  filter-input-box bg-transparent   w-full  border-0 pl-[10px] pr-[6px] pb-[15px] pt-[13px] focus:outline-none focus:border-none h-[60px]" placeholder="Search for your next adventure..." name="name" />
                                </div>
                                <button
                                    type='submit'
                                    className='bg-theme1   font-600 w-full md:w-[200px]  lg:w-[300px] flex items-center justify-center ml-auto h-[60px] py-2  text-white text-[14px]'
                                >
                                    <FiSearch size={30} />
                                </button>
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