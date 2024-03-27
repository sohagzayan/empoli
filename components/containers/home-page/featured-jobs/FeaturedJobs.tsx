import FeaturedJobsCart from '@/components/shared/featured-jobs-cart/FeaturedJobsCart'
import { Button } from '@/components/ui/button'
import { featured_jobs } from '@/utils/data'
import React from 'react'

const FeaturedJobs = () => {
    return (
        <div className='container lg:px-16 xl:px-20 '>
            <div>
                <div className='text-center'>
                    <h2 className='primary-section-title'>Featured Jobs
                    </h2>
                    <p className='p-details'>Know your worth and find the job that qualify your life</p>
                </div>
                <div className='grid lg:grid-cols-2 mt-10 gap-3 lg:gap-5'>
                    {featured_jobs.map((job, index) => <FeaturedJobsCart key={job.job_title + index} data={job} />)}
                </div>
                <div className='flex justify-center py-10'>
                    <Button className='bg-primary-500'>Load More Listing</Button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedJobs