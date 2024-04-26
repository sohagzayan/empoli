import EmployersMultiLogo from '@/components/shared/employers-multi-logo/EmployersMultiLogo'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MillionsOfJobs = () => {
    return (
        <div className='container lg:px-16 xl:px-20  my-5'>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-6 gap-10'>
                <div className='relative '>
                    <Image src="/assets/images/millions-of-jobs-banner.webp" width={500} height={500} alt="Ranch Investor" className='md:w-[500] w-full' />
                    <EmployersMultiLogo />
                </div>
                <div>
                    <h3 className='text-[35px] text-purple font-bold'>Millions of Jobs. Find the one that <span className='text-primary'>suits you.</span></h3>
                    <p className='tex5-[15px] font-light text-purple py-5'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
                    <ul className='flex flex-col gap-3 text-[14px] text-purple font-light py-5'>
                        <li className='flex  items-center gap-4'> <Check strokeWidth={1} /> Bring to the table win-win survival</li>
                        <li className='flex  items-center gap-4'> <Check strokeWidth={1} /> Capitalize on low hanging fruit to identify</li>
                        <li className='flex  items-center gap-4'><Check strokeWidth={1} /> But I must explain to you how all this</li>
                    </ul>
                    <Button className='py-[25px] px-[30px]'>Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default MillionsOfJobs