import { BadgeDollarSign, Calendar, Clock10, DollarSign, Hourglass, MapPin, UserRound } from 'lucide-react'
import React from 'react'
import JobSkills from '../JobSkills/JobSkills'
import ViewCompanyProfile from '@/components/shared/ViewCompanyProfile/ViewCompanyProfile'

const JobDetailsJobOverview = () => {
    return (
        <div className='bg-white p-10 mt-6 rounded-lg border  '>
            <div>
                <ul className='flex flex-col gap-10'>
                    <li className='flex gap-3'>
                        <div><Calendar className='text-primary' /></div>
                        <div className='flex flex-col '>
                            <h4 className='font-medium'>Date Posted:</h4>
                            <span className='text-[14px]'>Posted 1 hours ago</span>
                        </div>
                    </li>
                    <li className='flex gap-3'>
                        <div><Hourglass className='text-primary' /></div>
                        <div className='flex flex-col '>
                            <h4 className='font-medium'>Expiration date:</h4>
                            <span className='text-[14px]'>April 06, 2021</span>
                        </div>
                    </li>
                    <li className='flex gap-3'>
                        <div><MapPin className='text-primary' /></div>
                        <div className='flex flex-col '>
                            <h4 className='font-medium'>Location:</h4>
                            <span className='text-[14px]'>London, UK</span>
                        </div>
                    </li>
                    <li className='flex gap-3'>
                        <div><UserRound className='text-primary' /></div>
                        <div className='flex flex-col '>
                            <h4 className='font-medium'>Job Title:</h4>
                            <span className='text-[14px]'>Designer</span>
                        </div>
                    </li>
                    <li className='flex gap-3'>
                        <div><Clock10 className='text-primary' /></div>
                        <div className='flex flex-col '>
                            <h4 className='font-medium'>Hours:</h4>
                            <span className='text-[14px]'>50h / week</span>
                        </div>
                    </li>
                    <li className='flex gap-3'>
                        <div><BadgeDollarSign className='text-primary' /></div>
                        <div className='flex flex-col '>
                            <h4 className='font-medium'>Rate:</h4>
                            <span className='text-[14px]'>$15 - $25 / hour</span>
                        </div>
                    </li>
                    <li className='flex gap-3'>
                        <div><DollarSign className='text-primary' /></div>
                        <div className='flex flex-col '>
                            <h4 className='font-medium'>Salary:</h4>
                            <span className='text-[14px]'>$35k - $45k</span>
                        </div>
                    </li>
                </ul>
            </div>
            <JobSkills />
        </div>
    )
}

export default JobDetailsJobOverview