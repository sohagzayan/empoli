'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'
import HeaderController from '../header-controller/HeaderController'

const AuthNav = () => {
    const router = useRouter()
    return (
        <div className='absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 mt-6'>
            <div className=' w-full px-8  mx-auto sm:px-6 lg:px-8 py-5'>
                <nav className='relative flex items-center justify-between '>
                    <div>
                        <Image src="/assets/images/logo.png" width={100} height={100} alt='logo' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <HeaderController />

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AuthNav