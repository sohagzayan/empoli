import { Briefcase, Clock4, DollarSign, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const JobDetailsHeader = () => {
    return (
        <div>
            <div className='flex items-center gap-6'>
                <div>
                    <Image
                        src="/assets/images/company-logo.webp"
                        alt="company-logo"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <h3 className='text-[22px] text-purple font-bold pb-2'>Recruiting Coordinator
                    </h3>
                    <ul className='flex flex-wrap items-center gap-2 font-light text-purple py-1 w-full'>
                        <li className='flex items-center gap-1 text-[14px]'><Briefcase size={15} strokeWidth={1} />Catalyst</li>
                        <li className='flex items-center gap-1 text-[14px]'><MapPin size={15} strokeWidth={1} />London, UK</li>
                        <li className='hidden md:block'>
                            <div className='flex items-center gap-1 text-[14px]'>
                                <Clock4 size={15} strokeWidth={1} />11 hours ago

                            </div>
                        </li>
                        <li className=' hidden md:block'>
                            <div className='flex items-center gap-1 text-[14px] '>
                                <DollarSign size={15} strokeWidth={1} />$35k - $45k

                            </div>
                        </li>
                    </ul>
                    <ul className='flex flex-wrap items-center gap-4 py-2'>
                        <li className='text-[14px] font-light bg-primary text-primary py-[2px] px-[15px] rounded-full bg-opacity-10'>Freelancer</li>
                        <li className='text-[14px] font-light bg-[#34a853] text-[#34a853] py-[2px] px-[15px] rounded-full bg-opacity-10'>Private</li>
                        <li className='text-[14px] font-light bg-[#f9ab00] text-[#f9ab00] py-[2px] px-[15px] rounded-full bg-opacity-10'>Urgent</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JobDetailsHeader