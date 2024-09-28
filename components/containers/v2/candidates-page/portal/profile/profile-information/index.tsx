import { Button, InputField, SelectDropdown } from '@/components/common'
import TextArea from '@/components/common/text-area'
import React from 'react'
import { FaRegUser, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { IoLocationOutline } from 'react-icons/io5'
import { MdLocationCity } from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri'
import { TiSocialFacebook } from 'react-icons/ti'

const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
];
const ProfileInformation = () => {
    return (
        <div>
            <div>
                <h2 className='text-2xl text-white font-500 my-8'>Welcome Admin!</h2>
                <form action="">
                    <div>
                        <div className='flex  flex-col md:flex-row lg:flex-row items-center justify-between gap-10'>
                            <InputField
                                showLabel={true}
                                icon={FaRegUser}
                                label='First Name'
                                placeholder='First Name'
                            />
                            <InputField
                                showLabel={true}
                                icon={FaRegUser}
                                label='Last Name'
                                placeholder='Last Name'
                            />
                        </div>

                        <div className='mt-4 w-full'>
                            <InputField
                                className='w-full'
                                inputClassName='w-full'
                                showLabel={true}
                                label='Email'
                                placeholder='Email'
                                icon={HiOutlineMail}

                            />
                        </div>
                        <div className='mt-4 w-full flex items-center justify-between gap-10'>
                            <InputField
                                className='w-full'
                                inputClassName='w-full'
                                showLabel={true}
                                label='Facebook'
                                placeholder='Facebook'
                                icon={RiFacebookFill}

                            />
                            <InputField
                                className='w-full'
                                inputClassName='w-full'
                                showLabel={true}
                                label='Twitter'
                                placeholder='Twitter'
                                icon={FaTwitter}

                            />
                        </div>
                        <div className='mt-4 w-full flex items-center justify-between gap-10'>
                            <InputField
                                className='w-full'
                                inputClassName='w-full'
                                showLabel={true}
                                label='Phone'
                                placeholder='Phone'
                                icon={HiOutlinePhone}

                            />
                            <SelectDropdown
                                options={genderOptions}
                                label='Gender'
                                showLabel={true}

                            />
                        </div>
                        <div className='mt-4 w-full flex items-center justify-between gap-10'>
                            <InputField
                                className='w-full'
                                inputClassName='w-full'
                                showLabel={true}
                                label='Address'
                                placeholder='Address'
                                icon={IoLocationOutline}
                            />
                        </div>
                        <div className='mt-4 w-full flex items-center justify-between gap-10'>
                            <InputField
                                className='w-full'
                                inputClassName='w-full'
                                showLabel={true}
                                label='City'
                                placeholder='City'
                                icon={MdLocationCity}

                            />

                            <SelectDropdown
                                options={genderOptions}
                                label='Country'
                                showLabel={true}

                            />
                        </div>
                        <div className='mt-4 w-full flex items-center justify-between gap-10'>
                            <TextArea />
                        </div>
                        <div className='mt-5'>
                            <Button text='Update' variant='secondary' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileInformation