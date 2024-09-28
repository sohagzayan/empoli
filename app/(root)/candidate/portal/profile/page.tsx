
import { ProfileBannerAvatar, ProfileWrapper } from '@/components/containers/v2/candidates-page/portal/profile'
import React from 'react'

const UserProfileEdit = () => {
    return (
        <div className='min-h-screen bg-themeDark flex flex-col relative'>
            <ProfileBannerAvatar />
            <div className=' mx-4 md:mx-8 lg:mx-10'>
                <ProfileWrapper />
            </div>
        </div>
    )
}

export default UserProfileEdit