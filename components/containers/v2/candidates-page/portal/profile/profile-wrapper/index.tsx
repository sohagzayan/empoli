"use client"
import React, { useState } from 'react'
import SideProfileMenu from '../side-profile-menu'
import SideProfileContent from '../side-profile-content'
import { ProfileInsightsMenu } from '../profile-insights'

const ProfileWrapper = () => {
    const [activeInsightsTab, setActiveInsightsTab] = useState<number>(1)

    return (
        <div className='relative'>
            <div className=''>
                <div className='my-8'>
                    <ProfileInsightsMenu
                        activeInsightsTab={activeInsightsTab}
                        setActiveInsightsTab={setActiveInsightsTab}
                    />
                </div>
                <SideProfileContent  {...{ activeInsightsTab, setActiveInsightsTab }} />
            </div>
        </div>
    )
}

export default ProfileWrapper


// old version layout

// < div className = 'grid grid-cols-12 gap-2 lg:gap-14 relative' >
//         <div className='col-span-12 md:col-span-4 lg:col-span-3 my-10 md:my-0 lg:my-0 sticky top-0 left-0 '>
//             <SideProfileMenu  {...{ activeProfileTab, setActiveProfileTab }} />
//         </div>
//         <div className='col-span-12 md:col-span-8 lg:col-span-9'>
//             <SideProfileContent  {...{ activeProfileTab, setActiveProfileTab }} />
//         </div>
//     </ >