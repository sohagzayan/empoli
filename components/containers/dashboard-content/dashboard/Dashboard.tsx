import React from 'react'
import PropTypes from 'prop-types'
import ProfileTitle from '@/components/shared/profile-title/ProfileTitle'
import JobCard from '@/components/shared/job_card/JobCard'
import { featured_jobs } from '@/utils/data'

const Dashboard = () => {
    return (
        <div className='w-full'>
            <div>
                <ProfileTitle>dashboard</ProfileTitle>
                <div>
                    <div className='grid grid-cols-3 gap-8'>
                        <div className='py-[50px] px-[10px] bg-white text-blue-steel_blue flex items-center justify-center flex-col'>
                            <div>
                                <span className='text-[28px] font-semibold '>8</span>
                            </div>
                            <p className='text-[14px] font-light'>Total Applied</p>
                        </div>
                        <div className='py-[50px] px-[30px] bg-white text-blue-steel_blue flex items-center justify-center flex-col'>
                            <div>
                                <span className='text-[28px] font-semibold '>6</span>
                            </div>
                            <p className='text-[14px] font-light'>Saved Jobs</p>
                        </div>
                        <div className='py-[50px] px-[30px] bg-white text-blue-steel_blue flex items-center justify-center flex-col'>
                            <div>
                                <span className='text-[28px] font-semibold '>4</span>
                            </div>
                            <p className='text-[14px] font-light'>Sort Listed</p>
                        </div>
                    </div>

                    <div className='my-7'>
                        <ProfileTitle>Recent Applied Job</ProfileTitle>
                        <div>
                            <JobCard data={featured_jobs[0]} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard