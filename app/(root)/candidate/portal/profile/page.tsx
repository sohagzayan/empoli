
import ProfileBannerAvatar from '@/components/common/ProfileBannerAvatar/ProfileBannerAvatar'
import React from 'react'
import ProfileWrapper from './components/ProfileWrapper'

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