import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Recruiting = () => {
    return (
        <div className='container lg:px-16 xl:px-20 '>
            <div className='bg-white rounded-[15px]'>
                <div className='relative'>
                    <div className='p-[60px]'>
                        <h3 className='text-primary text-[20px] font-bold pb-1'>Recruiting?</h3>
                        <p className='text-[14px] font-light text-purple '>Advertise your jobs to millions of monthly users and <br /> search 15.8 million CVs in our database.</p>
                        <Button className='mt-6'>Start Recruiting Now</Button>
                    </div>
                    <div className='absolute  bg-recruiting-banner right-0 top-0  lg:w-[360px] w-[150px] h-full bg-no-repeat'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recruiting