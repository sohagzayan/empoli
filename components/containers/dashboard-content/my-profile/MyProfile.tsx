import ProfileTitle from '@/components/shared/profile-title/ProfileTitle'
import React from 'react'

export default function MyProfile() {
    return (
        <div>
            <div>
                <ProfileTitle>Profile Info</ProfileTitle>
                <ul className='flex flex-col gap-6'>
                    <li className='flex '>
                        <h5 className='text-[16px] font-semibold text-blue-midnight_blue min-w-[230px]'>Registration Date :</h5>
                        <span className='text-blue-steel_blue font-light'>09/12/23 11:24 am</span>
                    </li>
                    <li className='flex '>
                        <h5 className='text-[16px] font-semibold text-blue-midnight_blue min-w-[230px]'>First Name :</h5>
                        <span className='text-blue-steel_blue font-light'>Jonathon Smith</span>
                    </li>
                    <li className='flex '>
                        <h5 className='text-[16px] font-semibold text-blue-midnight_blue min-w-[230px]'>Email :</h5>
                        <span className='text-blue-steel_blue font-light'>jhonathonsmith@gmail.com</span>
                    </li>
                    <li className='flex '>
                        <h5 className='text-[16px] font-semibold text-blue-midnight_blue min-w-[230px]'>Phone :</h5>
                        <span className='text-blue-steel_blue font-light'>+880125412624</span>
                    </li>
                    <li className='flex '>
                        <h5 className='text-[16px] font-semibold text-blue-midnight_blue min-w-[230px]'>Gender :</h5>
                        <span className='text-blue-steel_blue font-light'>Male</span>
                    </li>
                    <li className='flex '>
                        <h5 className='text-[16px] font-semibold text-blue-midnight_blue min-w-[230px]'>Biography :</h5>
                        <span className='text-blue-steel_blue font-light'>Alison Johnson is finishing her first year at DePaul University where she is interested in business. Although she has yet to declare a major, she’s considering finance or marketing. After watching her parents run a restaurant for years, she knew at a very young age that she also wanted to go into business.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
