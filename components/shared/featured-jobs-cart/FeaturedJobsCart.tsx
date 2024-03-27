import { Bookmark, Briefcase, Clock4, DollarSign, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface FeaturedJobsCartType {
    data: {
        image: string,
        job_title: string,
        company: string,
        location: string,
        posted_time: string,
        salary_range: string,
        employment_type: string,
        visibility: string,
        urgency: string,
    }
}

const FeaturedJobsCart = ({ data }: FeaturedJobsCartType) => {
    return (
        <div className='relative p-[30px] border bg-white shadow-shadow1 bg-opacity-30 rounded-[10px]'>
            <div className='flex gap-6'>
                <div>
                    <Image src={`/assets/images/${data.image}`} alt='profile' width={50} height={50} />
                </div>
                <div>
                    <h3 className='text-[18px] text-purple font-bold pb-2'>{data.job_title}</h3>
                    <ul className='flex items-center gap-2 font-light text-purple py-1 w-full'>
                        <li className='flex items-center gap-1 text-[14px]'><Briefcase size={20} strokeWidth={1} />{data.company}</li>
                        <li className='flex items-center gap-1 text-[14px]'><MapPin size={20} strokeWidth={1} />{data.location}</li>
                        <li className='hidden md:block'>
                            <div className='flex items-center gap-1 text-[14px]'>
                                <Clock4 size={20} strokeWidth={1} />{data.posted_time}
                            </div>
                        </li>
                        <li className=' hidden md:block'>
                            <div className='flex items-center gap-1 text-[14px] '>
                                <DollarSign size={20} strokeWidth={1} />{data.salary_range}
                            </div>
                        </li>
                    </ul>
                    <ul className='flex items-center gap-4 py-2'>
                        <li className='text-[14px] font-light bg-primary text-primary py-[2px] px-[15px] rounded-full bg-opacity-10'>{data.employment_type}</li>
                        <li className='text-[14px] font-light bg-[#34a853] text-[#34a853] py-[2px] px-[15px] rounded-full bg-opacity-10'>{data.visibility}</li>
                        <li className='text-[14px] font-light bg-[#f9ab00] text-[#f9ab00] py-[2px] px-[15px] rounded-full bg-opacity-10'>{data.urgency}</li>
                    </ul>
                </div>
            </div>
            <div className='absolute top-4 right-4 cursor-pointer w-[30px] h-[30px] hover:bg-primary bg-transparent text-primary-500 hover:text-white flex items-center justify-center rounded-full transition-all ease-in-out duration-300 '><Bookmark size={20} strokeWidth={1} /></div>
        </div>
    )
}

export default FeaturedJobsCart