'use client'
import React, { useState } from 'react'

const PopularSearches = () => {
    const [keywords, setKeywords] = useState([
        "Designer",
        "Developer",
        "Web",
        "IOS",
        "Php",
        "Senior",
        "Engineer",
    ])
    return (
        <div className='py-4'>
            <div className='flex items-center'>
                <span className='text-[14px] text-textBody'>Popular Searches : </span>
                <div className='flex gap-2 text-white items-center ml-2'>
                    {keywords.map((k, i) => <span className='text-[13px] text-white' key={k + i}>{k},</span>)}
                </div>
            </div>
        </div>
    )
}

export default PopularSearches