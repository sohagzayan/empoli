import { Button } from '@/components/common'
import Image from 'next/image'
import React from 'react'

const MeetRecruiterCloud = () => {
    return (
        <div className='custom-container my-20'>
            <div className='mt-20'>
                <div className='grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2'>

                    <div className='flex items-center '>
                        <div>
                            <h3 className='font-600 text-theme1  mb-2'>Early Access</h3>
                            <h3 className='text-3xl text-white my-4 font-400 '>
                                Meet <strong>RecruiterCloud</strong>.
                                JobJoy AI recruiter.
                            </h3>
                            <p className='text-white text-sm mb-4'>Here to help with all the logistics. RecruiterCloud finds best fit candidates, vets for interest, and schedules your favorites on your calendar — all in a matter of days. It{"'"}s that easy.</p>
                            <Button text='Learn more' variant='secondary' />
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <img
                            src={"/assets/images/cloud-rechuiter.png"}
                            // width={300}
                            // height={300}
                            alt='rechuitar cloude'
                            className='w-[300px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetRecruiterCloud