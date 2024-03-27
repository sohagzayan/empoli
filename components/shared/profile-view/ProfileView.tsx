"use client"
import React, { useState } from 'react'
import ProfileLeftMenu from '../profile-left-menu/ProfileLeftMenu'
import Dashboard from '@/components/containers/dashboard-content/dashboard/Dashboard'
import { SortListedJobs } from '@/components/containers/dashboard-content/sort-listed-jobs/SortListedJobs'
import AppliedJob from '@/components/containers/dashboard-content/applied-job/AppliedJob'
import SavedJob from '@/components/containers/dashboard-content/saved-job/SavedJob'
import PostNewJob from '@/components/containers/dashboard-content/post-new-job/PostNewJob'

const ProfileView = () => {

    const [activeProfileTab, setActiveProfileTab] = useState(0)

    return (
        <div className='mt-10 relative'>
            <div className='grid grid-cols-12 gap-2 relative'>
                <div className='col-span-3 sticky top-0 left-0'>
                    <ProfileLeftMenu {...{ activeProfileTab, setActiveProfileTab }} />
                </div>
                <div className='col-span-9'>
                    <div className='px-[15px] py-[10px]'>
                        {activeProfileTab == 0 && <Dashboard />}
                        {activeProfileTab == 1 && <SortListedJobs />}
                        {activeProfileTab == 2 && <AppliedJob />}
                        {activeProfileTab == 3 && <SavedJob />}
                        {activeProfileTab == 4 && <PostNewJob />}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileView