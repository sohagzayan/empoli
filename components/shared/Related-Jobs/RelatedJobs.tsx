import React from 'react'
import JobCart from '../job_card/JobCard'
import { featured_jobs } from '@/utils/data'

const RelatedJobs = () => {
    return (
        <div>
            <div>
                <h3 className='text-[22px] text-purple font-medium'>Related Jobs</h3>
                <p className='text-[14px] font-normal py-1'>2020 jobs live - 293 added today.</p>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4  mt-6'>
                        {featured_jobs.map((job, index) => <JobCart key={job.job_title + index} data={job} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedJobs