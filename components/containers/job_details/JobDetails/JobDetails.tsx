"use client"
import React, { useState } from 'react'
import JobDetailsHeader from '../JobDetailsHeader/JobDetailsHeader'
import JobInsights from '../JobInsights/JobInsights'
import ShareThisJobOnSocial from '../../../shared/ShareThisJobOnSocial/ShareThisJobOnSocial'
import RelatedJobs from '@/components/shared/Related-Jobs/RelatedJobs'
import JobDetailsController from '../JobDetailsController/JobDetailsController'
import ApplyJobModal from '@/components/shared/apply-job-modal/ApplyJobModal'


const JobDetails = () => {
    const [applyJobModal, setApplyJobModal] = useState(false)
    return (
        <div className='container lg:px-16 xl:px-20 '>
            <ApplyJobModal {...{ applyJobModal, setApplyJobModal }} />
            <div className='grid grid-cols-12 gap-8'>
                <div className='lg:col-span-8 col-span-12'>
                    <JobDetailsHeader />
                    <JobInsights />
                    <ShareThisJobOnSocial />
                    {/* <RelatedJobs /> */}
                </div>
                <div className='lg:col-span-4 col-span-12'>
                    <JobDetailsController {...{ applyJobModal, setApplyJobModal }} />
                </div>
            </div>
        </div>
    )
}

export default JobDetails