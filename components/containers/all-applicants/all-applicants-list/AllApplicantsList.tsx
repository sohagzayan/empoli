import React from 'react'
import PropTypes from 'prop-types'
import { candidatesDataSchema } from '@/utils/data'
import CandidateProfile from '@/components/shared/candidate-profile/CandidateProfile'

const AllApplicantsList = () => {



    return (
        <div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 mt-10'>
                {/* {candidatesDataSchema.map(()=> )} */}
                <CandidateProfile />
                <CandidateProfile />
                <CandidateProfile />
                <CandidateProfile />
                <CandidateProfile />
            </div>
        </div>
    )
}

export default AllApplicantsList