"use client"
import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { BiSearchAlt2 } from 'react-icons/bi'
import { signOut, useSession } from 'next-auth/react'
import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import { CreditCard, User } from 'lucide-react'
import ActiveLoginUserProfile from '../active-login-user-profile/ActiveLoginUserProfile'
import VisibilitySetting from '../visibility-setting/VisibilitySetting'

const HeaderController = () => {
    const router = useRouter()
    const { data: session } = useSession()
    return (
        <div>
            <div className='flex items-center gap-2'>




                {session && <>

                    <VisibilitySetting />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button onClick={() => router.push('/jobs')} className='bg-transparent text-blue-midnight_blue hover:bg-gray-50 whitespace-nowrap cursor-pointer font-bold flex items-center rounded-full border-none outline-none'>
                                {/* <AiOutlineUser size={22} className='text-blue-midnight_blue mr-1' />   */}

                                <Image src="/assets/images/girl-user.webp" width={36} height={36} alt="user" className='rounded-full border-2 border-primary' />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={() => router.push("candidate/dashboard")}>
                                    Dashboard
                                    <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Pricing
                                    <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Settings
                                    <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Edit preferences</DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>Email</DropdownMenuItem>
                                            <DropdownMenuItem>Message</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuItem>
                                    Edit Resume
                                    <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>My Bookmarks</DropdownMenuItem>
                            <DropdownMenuItem>My Applications</DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>Manage Account</DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={async () => {
                                                await signOut()
                                            }}
                                        >Logout</DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuItem className='bg-primary/10 text-primary font-semibold flex justify-center items-center cursor-pointer mt-1'>Post a job</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>}

                {!session && <>

                    <Button
                        variant="outline"
                        onClick={() => router.push('/members/sign-in')}
                        className='bg-transparent text-blue-midnight_blue hover:bg-gray-50 whitespace-nowrap cursor-pointer font-bold flex items-center  rounded-xl border-translucent_black transition-all duration-200 ease-in-out hover:border-primary hover:text-primary  '>
                        Log in
                    </Button>

                    <Button
                        onClick={() => router.push('/members/sign-up')}
                        variant="outline" className='bg-blue-midnight_blue text-white   whitespace-nowrap cursor-pointer font-bold flex items-center  px-3 py-0 rounded-xl transition-all duration-200 ease-in-out hover:bg-primary hover:border-primary hover:text-white '>
                        Sign Up
                    </Button>

                </>}
            </div>
        </div>
    )
}



export default HeaderController

