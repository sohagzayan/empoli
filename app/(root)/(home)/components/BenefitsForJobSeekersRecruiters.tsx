import React from 'react'
import WhyJobSeekersLoveUs from './whyJobSeekersLoveUs'
import WhyRecruitersLoveUs from './WhyRecruitersLoveUs'

const BenefitsForJobSeekersAndRecruiters = () => {
    return (
        <div className='custom-container my-20'>
            <div className='grid col-span-1 md:col-span-2 lg:grid-cols-2 gap-4'>
                <WhyJobSeekersLoveUs />
                <WhyRecruitersLoveUs />
            </div>
        </div>
    )
}

export default BenefitsForJobSeekersAndRecruiters