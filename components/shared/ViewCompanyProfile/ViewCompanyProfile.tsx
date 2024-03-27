import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ViewCompanyProfile = () => {
    return (
        <div className='bg-white p-8 rounded-md mt-6'>
            <div className='flex items-center gap-5'>
                <div>
                    <Image src="/assets/images/company-logo.webp" alt='company_logo' width={50} height={50} />
                </div>
                <div>
                    <h3 className='text-purple font-medium text-[18px]'>Catalyst</h3>
                    <Link href="/"><p className='text-primary cursor-pointer text-[14px]'>View company profile</p></Link>
                </div>
            </div>
        </div>
    )
}

export default ViewCompanyProfile