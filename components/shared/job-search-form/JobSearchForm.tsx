
import { MapPin, Search } from 'lucide-react'
import React from 'react'
import ChooseACategory from '../choose-a-category/ChooseACategory'
import { Button } from '@/components/ui/button'


const JobSearchForm = () => {
    return (
        <div className=' py-7 bg-primary-50 mb-6'>
            <div className='container lg:px-16 xl:px-20 '>
                <form action="">
                    <div className='w-full bg-white shadow-shadow_dark md:py-[10px] py-[30px] px-8 grid grid-cols-12 gap-3 rounded-[15px] border'>
                        <div className='md:col-span-4 col-span-12 flex items-center md:border-r'>
                            <Search strokeWidth={1} />
                            <input type="text" placeholder='Job title, keywords, or company' className="w-full h-[60px] text-[14px] text-purple border-none outline-none px-[15px]" />
                        </div>
                        <div className='md:col-span-3 col-span-12 flex items-center md:border-r'>
                            <MapPin strokeWidth={1} />
                            <input type="text" placeholder='City or postcode' className='w-full h-[60px] text-[14px] text-purple border-none outline-none px-[15px]' />
                        </div>
                        <div className='md:col-span-3 col-span-12 flex items-center w-full'>
                            <ChooseACategory />
                        </div>
                        <div className='md:col-span-2 col-span-12 flex items-center justify-center w-full'>
                            <Button className='w-full'>Find Jobs</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JobSearchForm