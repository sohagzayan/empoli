'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import { openMenu, closeMenu } from "@/redux/slice/mobileMenu-slice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, useAppSelector } from '@/redux/store'
import { Spin as Hamburger } from 'hamburger-react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import ActiveLoginUserProfile from '../active-login-user-profile/ActiveLoginUserProfile'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FaUserTie } from 'react-icons/fa'
import { LuUser2 } from 'react-icons/lu'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { usePathname, useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import HeaderController from '../header-controller/HeaderController'
import { motion } from 'framer-motion';


interface HeaderType {
    variant?: string,
    bg?: string
}

const Header = ({ variant, bg }: HeaderType) => {
    const [scrollY, setScrollY] = useState(0)
    const dispatch = useDispatch<AppDispatch>()
    const isOpenMenu = useAppSelector((state) => state.mobileMenuReducer.value.isOpenMenu)
    const router = useRouter()

    const { data: session } = useSession()

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollY(scrollY)
        };
        window.addEventListener('scroll', handleScroll);
    }, [])


    return (
        <div
            style={{
                backdropFilter: scrollY >= 70 ? 'blur(5px)' : ""
            }}
            className={` px-4 transition-all duration-300 z-50    ${scrollY >= 70 ? `sticky top-0 left-0   header ` : ` z-40 relative top-0 left-0 right-0  `}`}>
            <div className='flex container lg:px-16 xl:px-20 relative items-center justify-between h-16 '>




                <div className='flex items-center gap-10'>
                    <Link href='/'>
                        <div className='flex items-center  gap-1 text-white font-700  '>
                            JobJoy.
                        </div>
                    </Link>
                    <div>
                        <NavItems variant={variant} scrollY={scrollY} />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    {/* <div className='flex justify-end lg:hidden ' >
                        <Hamburger
                            toggled={isOpenMenu}
                            toggle={() => dispatch(openMenu())}
                            color='#32236F'
                        />
                    </div> */}
                    <div>
                        <HeaderController />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header