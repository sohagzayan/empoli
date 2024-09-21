'use client'
import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import HeaderController from '../header-controller/HeaderController'
import Marquee from '../Marquee/Marquee'
import { Logo } from '@/components/common'
import { usePathname } from 'next/navigation'


interface HeaderType {
    variant?: string,
}

const Header = ({ variant }: HeaderType) => {
    const [scrollY, setScrollY] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollY(scrollY)
        };
        window.addEventListener('scroll', handleScroll);
    }, [])



    const isAuthPage =
        pathname.includes("/signup") || pathname.includes("/login") || pathname.includes("/reset-password")



    return (
        <>
            {!isAuthPage && <Marquee />}
            <div
                style={{ backdropFilter: scrollY >= 70 ? 'blur(5px)' : "" }}
                className={` bg-themeDark px-4 transition-all duration-300 z-[999] ${scrollY >= 70 ? `sticky top-0 left-0 header ` : ` z-40 relative top-0 left-0 right-0  `}`}>
                <div className='flex container lg:px-16 xl:px-20 relative items-center justify-between h-16 '>
                    <div className='flex items-center gap-10'>
                        <Logo />
                        {!isAuthPage && <NavItems variant={variant} scrollY={scrollY} />}
                    </div>
                    <div className='flex items-center gap-4'>
                        {
                            !isAuthPage
                                ? <HeaderController /> :
                                <div>
                                    <h3>Here to hire talent? </h3>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header