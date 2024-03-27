import ProfileLeftMenu from '@/components/shared/profile-left-menu/ProfileLeftMenu'
import React from 'react'

const UserProfileSidebar = ({ setActiveProfileTab, activeProfileTab }: any) => {
    return (
        <div className='sticky top-20 h-fit rounded-lg border bg-background p-4 md:w-[260px]'>
            <ProfileLeftMenu {...{ activeProfileTab, setActiveProfileTab }} />
        </div>
    )
}

export default UserProfileSidebar
