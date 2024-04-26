"use client"
import { Button } from '@/components/ui/button'
import { skills } from '@/utils/data'
import { Bookmark, Briefcase, Clock4, DollarSign, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { CiBadgeDollar } from 'react-icons/ci'
import { FaUsers } from 'react-icons/fa'
import { MdHistory, MdOutlineBookmarkBorder } from 'react-icons/md'
import { RiCalendar2Line, RiVerifiedBadgeFill } from 'react-icons/ri'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link'
import { TiStar } from 'react-icons/ti'
import { IoBookmarkOutline, IoLocationOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

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


const JobCard = ({ data }: any) => {
    const router = useRouter()

    const requiredSkillList = [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Node Js",
    ]


    console.log("data> >>> >", data)

    const calculateDaysLeftApplication = (targetDateString: any) => {
        const today = new Date();
        const targetDate = new Date(targetDateString);
        const difference = targetDate.getTime() - today.getTime();
        const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

        return daysLeft

    }

    const calculateTimeAgo = (dateString: string): string => {
        const currentDate = new Date();
        const pastDate = new Date(dateString);
        const timeDifference = currentDate.getTime() - pastDate.getTime(); // Explicitly casting to number
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years > 0) {
            return `${years} year${years === 1 ? '' : 's'} ago`;
        } else if (months > 0) {
            return `${months} month${months === 1 ? '' : 's'} ago`;
        } else if (weeks > 0) {
            return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
        } else if (days > 0) {
            return `${days} day${days === 1 ? '' : 's'} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours === 1 ? '' : 's'} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
        } else {
            return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
        }
    };


    return (
        <div className='group relative overflow-hidden bg-white shadow hover:shadow-md shadow-gray_light_400  hover:-mt-2 rounded-md transition-all duration-500 h-fit'>
            <div className=' w-full p-6'>
                <div className='flex items-center'>
                    <div className='w-14 h-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md'>
                        <Image loading='lazy' src={"/assets/images/company-logo.webp"} alt='profile' width={32} height={32} className='' />
                    </div>
                    <div className='ms-3'>
                        <button onClick={() => router.push(`/jobs/detail/${data?.id}`)} className='inline-block text-[16px] font-semibold hover:text-primary transition-all duration-500 me-1'>Facebook</button>
                        <span className='inline-block text-sm text-slate-400'>2 days ago</span>
                        <div>
                            <span className='bg-primary/10 inline-block text-primary text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 capitalize'>{data?.job_type}</span>
                            <span className='text-sm font-medium inline-block me-1'>
                                Est. time:
                                <span className='text-slate-400'> 1 to 3 months</span>
                            </span>
                            <span className='text-sm font-medium inline-block me-1'>
                                Monthly:
                                <span className='text-slate-400'> ${data.salary_range_min} - ${data.salary_range_max}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <p className='text-slate-400 py-3'>{data?.job_title}</p>
                <div>
                    {data?.required_skills.map((skill: any) =>
                        <span key={skill} className='bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1'>{skill}</span>
                    )}
                </div>
            </div>
            <div className='px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center'>
                <div className=' flex justify-between gap-1 w-full'>
                    <div className='flex items-center  gap-2'>
                        <span className=' me-1 font-semibold flex items-center text-[14px] gap-1'>
                            <RiVerifiedBadgeFill className='text-primary' size={16} />
                            Verified
                        </span>
                        <ul className='list-none  me-1 text-yellow-400 flex items-center'>
                            <li><TiStar /></li>
                            <li><TiStar /></li>
                            <li><TiStar /></li>
                            <li><TiStar /></li>
                            <li><TiStar /></li>
                        </ul>
                        <span className=' me-1 text-blue-steel_blue  items-center text-[14px] flex gap-1'>
                            <IoLocationOutline className='text-blue-midnight_blue' size={16} />
                            {data?.office_location}
                        </span>
                    </div>
                    <button className='btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 px-3 py-1'>
                        Apply Now
                    </button>
                </div>
            </div>


            <button className='btn btn-icon rounded-full  hover:bg-primary border-primary/10 hover:border-primary text-primary hover:text-white absolute top-0 w-[2.25rem] h-[2.25rem] flex items-center justify-center end-0 m-3 bg-primary/10  transition-all ease-in-out duration-200'><IoBookmarkOutline size={20} strokeWidth={1} /></button>

        </div>
    )
}

export default JobCard