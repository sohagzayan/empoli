import React from 'react'
import PropTypes from 'prop-types'
import ProfileTab from '@/components/shared/profile-tab/ProfileTab'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { WiEarthquake } from "react-icons/wi";
import { IoMdClose } from 'react-icons/io'

const Overview = () => {
    return (
        <div>
            <div>
                <ProfileTab />
            </div>
            <div className='mt-5'>
                <h3 className='text-2xl text-blue-midnight_blue font-medium '>What recruiters will see</h3>
            </div>
            <div className='border p-6 mt-3 rounded-md'>
                <div className='flex justify-between '>
                    <div className='flex items-center gap-5 '>
                        <Image src="/assets/images/avatar.webp"
                            width={64}
                            height={64}
                            className='rounded-full'
                            alt='profile'
                        />
                        <div>
                            <div className='flex gap-3 items-center'>
                                <h3 className='text-lg font-medium '>Sohag Hossain Zayan </h3>
                                <div className='bg-light_gray px-2 py-1 rounded-full text-sm'>
                                    <span>Active today</span>
                                </div>
                            </div>
                            <p className='text-sm text-blue-midnight_blue'>2 years of exp • Open to remote</p>
                        </div>
                    </div>
                    <div>
                        <Button className='text-sm bg-light_gray text-blue-midnight_blue p-1 h-auto hover:bg-light_gray'>Resume</Button>
                    </div>
                </div>
                <div>
                    <h3 className='text-sm text-blue-midnight_blue'>Looking for</h3>
                    <p className='text-sm text-blue-midnight_blue flex items-center gap-3 mt-2'>
                        <span>
                            <WiEarthquake />
                        </span>
                        Describe what you are looking for in your next job

                    </p>
                </div>
                <div className='mt-5'>
                    <h3 className='text-lg text-blue-midnight_blue font-medium'>Ideal next opportunity</h3>
                    <div className='mt-2'>
                        <div>
                            <h3 className='text-sm text-blue-midnight_blue'>Looking for</h3>
                            <span className='bg-light_gray text-sm py-1 px-2 mt-1 inline-block'>Flexible</span>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm text-blue-midnight_blue'>Desired Role</h3>
                            <span className='bg-light_gray text-sm py-1 px-2 mt-1 inline-block'>Full-Stack Engineer
                            </span>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm text-blue-midnight_blue'>Remote Work</h3>
                            <div className='flex items-center gap-2'>
                                <span className='bg-light_gray text-sm py-1 px-2 mt-1 inline-block'>Full-Stack Engineer
                                </span>
                                <p className='text-sm'>Prefers remote work, but is open to work onsite
                                </p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm text-blue-midnight_blue'>Desired Location</h3>
                            <div className='flex items-center gap-2'>
                                <span className='bg-light_gray text-sm py-1 px-2 mt-1 inline-block'>Dhaka (current)
                                </span>
                                <span className='bg-light_gray text-sm py-1 px-2 mt-1 inline-block'>
                                    United States
                                </span>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm text-blue-midnight_blue'>Desired Tech Stack</h3>
                            <div className='flex items-center gap-2'>
                                <span className='bg-light_gray text-sm py-1 px-2 mt-1 inline-block'>
                                    Express.js
                                </span>
                                <span className='bg-light_gray text-sm py-1 px-2 mt-1 inline-block'>
                                    Bootstrap
                                </span>
                            </div>
                        </div>
                        <div className='mt-2 flex items-center gap-2'>
                            <IoMdClose />
                            <p className='text-sm'>Prefers remote work, but is open to work onsite
                            </p>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm text-blue-midnight_blue'>Remote Work</h3>
                            <div className='flex items-center gap-2'>
                                <span className='bg-light_gray text-sm py-1 px-2 mt-1 inline-block'>
                                    51-200
                                </span>
                                <p className='text-sm'>
                                    Open to 1-10, 11-50, 201-500, 501-1000 or 1000+
                                </p>
                            </div>
                        </div>

                        <div className='mt-2'>
                            <h3 className='text-sm text-blue-midnight_blue'>Wants</h3>
                            <ul className='mt-2 gap-2 text-sm list-disc px-4 grid grid-cols-2'>
                                <li>To build products</li>
                                <li>Individual contributor track</li>
                                <li>Company with clear roles</li>
                                <li>Autonomy</li>
                                <li>A flexible remote work policy</li>
                                <li>Quiet office</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}


export default Overview
