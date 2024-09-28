import React from 'react'
import { RiEditLine } from 'react-icons/ri'

const AllPersonalInfoOverview = () => {
    return (
        <div className='mx-auto p-6 bg-[rgba(255,255,255,0.06)] rounded-xl mt-6'>
            <div>
                <div className='flex items-center justify-between mb-8'>
                    <h3 className='text-white text-xl font-600'>All Personal Information</h3>
                    <button className='text-theme1 text-xl font-600 flex items-center gap-2 cursor-pointer '>
                        <RiEditLine />
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AllPersonalInfoOverview