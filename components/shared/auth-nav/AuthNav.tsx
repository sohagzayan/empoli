'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'
import HeaderController from '../header-controller/HeaderController'
import { Link } from 'lucide-react'

const AuthNav = () => {
    const router = useRouter()
    return (
        <div className='sticky top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 mt-0 py-3'>
            <div className=''>
                <nav className='relative flex items-center justify-between '>
                    <div>
                        {/* <Image src="/assets/images/logo.png" width={100} height={100} alt='logo' /> */}
                        <div className='flex items-center  gap-1 font-bold text-primary'>
                            <div className='bg-primary text-secondary font-bold w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                                J
                            </div>
                            obber
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default AuthNav