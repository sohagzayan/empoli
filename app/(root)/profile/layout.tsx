"use client"
import Header from '@/components/shared/Nav/Header'
import AuthNav from '@/components/shared/auth-nav/AuthNav'
import HeaderController from '@/components/shared/header-controller/HeaderController'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { sidebarItems } from '@/constants/sidebaritems'
import { usePathname } from 'next/navigation'
import { IoSearchOutline, IoSettingsOutline } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'

export default function RootLayouts({
    children,
}: {
    children: React.ReactNode
}) {

    const [isExpanded, setIsExpanded] = useState(false)
    const [isOpenSideBar, setIsOpenSideBar] = useState(false)
    const pathname = usePathname()

    const handleExpandSideBar = () => {
        setIsExpanded((prev) => !prev)
    }

    let sideBarItem = sidebarItems('candidate')

    return (
        <div className='h-screen min-h-[0px] basis-0 flex-1   '>
            <div className='flex h-full  '>

                <div className={`w-14 h-full cursor-pointer flex flex-col   `}>
                    <nav
                        onMouseEnter={handleExpandSideBar}
                        onMouseLeave={handleExpandSideBar}
                        data-state={isExpanded ? 'expanded' : 'collapsed'} className={`group py-2 z-10 h-full w-14  data-[state=expanded]:w-[13rem] border-r bg-studio border-default data-[state=expanded]:shadow-xl transition-width duration-200 hide-scrollbar flex flex-col justify-between overflow-y-auto bg-white overflow-x-hidden`}>
                        <ul className='flex flex-col gap-y-1 justify-start px-2'>

                            <Link href="/" className='mx-2 flex items-center h-[40px]' >
                                <Image src="/assets/images/supabase-logo.svg" height={40} width={20} alt='logo' />
                            </Link>

                            {sideBarItem.map((item) =>
                                <>
                                    <Link href={item?.key} className={`relative h-10 w-10 group-data-[state=expanded]:w-full transition-all duration-200 flex items-center rounded group-data-[state=collapsed]:justify-center group-data-[state=expanded]:-space-x-2 text-foreground-lighter hover:text-foreground hover:bg-surface-200 !bg-selection !text-foreground group/item  ${pathname == item.key ? 'bg-gray_light_400' : 'bg-transparent'} hover:bg-light_gray`} key={item.key}>
                                        <span className='absolute left-0 top-0 flex rounded h-10 w-10 items-center justify-center text-[20px]'>{item.icon}</span>
                                        <span className='min-w-[128px] text-sm text-foreground-light group-hover/item:text-foreground group-aria-current/item:text-foreground absolute left-7 group-data-[state=expanded]:left-12 opacity-0 group-data-[state=expanded]:opacity-100 transition-all'>{item.label}</span>
                                    </Link>
                                </>
                            )}
                        </ul>
                        <div className='flex flex-col gap-y-1 justify-start px-2'>
                            <Link href="/" className={`relative h-10 w-10 group-data-[state=expanded]:w-full transition-all duration-200 flex items-center rounded group-data-[state=collapsed]:justify-center group-data-[state=expanded]:-space-x-2 text-foreground-lighter hover:text-foreground hover:bg-surface-200 !bg-selection !text-foreground group/item   hover:bg-light_gray`}>
                                <span className='absolute left-0 top-0 flex rounded h-10 w-10 items-center justify-center'>
                                    <IoSettingsOutline />
                                </span>

                                <span className='min-w-[128px] text-sm text-foreground-light group-hover/item:text-foreground group-aria-current/item:text-foreground absolute left-7 group-data-[state=expanded]:left-12 opacity-0 group-data-[state=expanded]:opacity-100 transition-all'>Profile Settings</span>
                            </Link>
                            <Link href="/" className={`relative h-10 w-10 group-data-[state=expanded]:w-full transition-all duration-200 flex items-center rounded group-data-[state=collapsed]:justify-center group-data-[state=expanded]:-space-x-2 text-foreground-lighter hover:text-foreground hover:bg-surface-200 !bg-selection !text-foreground group/item   hover:bg-light_gray`}>
                                <span className='absolute left-0 top-0 flex rounded h-10 w-10 items-center justify-center'>
                                    <IoSearchOutline />
                                </span>
                                <span className='min-w-[128px] text-sm text-foreground-light group-hover/item:text-foreground group-aria-current/item:text-foreground absolute left-7 group-data-[state=expanded]:left-12 opacity-0 group-data-[state=expanded]:opacity-100 transition-all'>Search</span>
                            </Link>
                            <Link href="/" className={`relative h-10 w-10 group-data-[state=expanded]:w-full transition-all duration-200 flex items-center rounded group-data-[state=collapsed]:justify-center group-data-[state=expanded]:-space-x-2 text-foreground-lighter hover:text-foreground hover:bg-surface-200 !bg-selection !text-foreground group/item   hover:bg-light_gray`}>
                                <span className='absolute left-0 top-0 flex rounded h-10 w-10 items-center justify-center'>
                                    <LuUser2 />
                                </span>
                                <span className='min-w-[128px] text-sm text-foreground-light group-hover/item:text-foreground group-aria-current/item:text-foreground absolute left-7 group-data-[state=expanded]:left-12 opacity-0 group-data-[state=expanded]:opacity-100 transition-all'>dajor98633@bizatop.com</span>
                            </Link>
                        </div>
                    </nav>
                </div>



                <div data-panel-group data-panel-group-direction="horizontal" className='w-full data-[panel-group-direction=vertical]:flex-col flex h-full' style={{ display: "flex", flexDirection: "row", height: "100%", overflow: "hidden", width: "100%" }}>
                    {/* <Header variant='primary' /> */}
                    <div style={{ flex: "1 1 0", overflow: "hidden" }} className='h-full'>
                        <main className='h-full flex flex-col flex-1 w-full overflow-x-hidden'>

                            <div className='flex h-12 max-h-12 items-center justify-between py-2 px-5 border-b border-default'>
                                <nav className='relative flex items-center justify-between w-full py-2 '>
                                    <div className='flex items-center gap-2'>
                                        <Image src="/assets/images/logo.png" width={100} height={100} alt='logo' />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <HeaderController />
                                    </div>
                                </nav>
                            </div>

                            <main className='flex-1 overflow-y-auto' style={{ maxHeight: "100vh" }}>
                                <div className='w-full mx-auto my-16 space-y-16 max-w-7xl overscroll-y-auto'>
                                    {children}
                                </div>
                            </main>


                        </main>
                    </div>
                </div>


            </div>
        </div>
    )
}
// overflow-y-auto