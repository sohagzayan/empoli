import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/'>
            <div className='flex items-center text-[1.5rem]   gap-1 text-white font-extrabold '>
                <span className='text-theme1 px-0  -mx-2'>Job</span>
                <sup>Joy.</sup>
            </div>
        </Link>
    )
}

export default Logo