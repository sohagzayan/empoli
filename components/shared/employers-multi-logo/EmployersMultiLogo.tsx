import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const EmployersMultiLogo = () => {
    return (
        <div className='bg-white absolute md:right-[-10px] right-[50%] bottom-[-40px] px-[30px] py-[20px] shadow-shadow1 rounded-[15px] border '>
            <div className='text-center'>
                <h3 className='text-[14px] text-purple font-bold py-2'>300k+ Employers</h3>
                <Image src="/assets/images/multi-logo.webp" width={150} height={150} alt="multi logo" />
            </div>
            <div className=' bg-primary w-[50px] h-[50px] absolute top-[-20px] left-[-20px]  flex items-center justify-center text-white rounded-full'>
                <Check strokeWidth={3} />
            </div>
        </div>
    )
}

export default EmployersMultiLogo