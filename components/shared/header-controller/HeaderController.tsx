"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Image from 'next/image'
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
                        className='bg-transparent text-theme1 border border-theme2 hover:bg-primary hover:text-white whitespace-nowrap cursor-pointer font-bold flex items-center  rounded-md  transition-all duration-200 ease-in-out  '>
                        Log in
                    </Button>

                    <Button
                        onClick={() => router.push('/members/sign-up')}
                        variant="outline" className='bg-theme2 text-white border-transparent hover:bg-transparent  whitespace-nowrap cursor-pointer  flex items-center  px-3 py-0 rounded-md transition-all duration-200 ease-in-out hover:text-primary hover:border-theme1 hover:text-theme1 font-apercu-light  text-base '>
                        Be Part
                    </Button>

                </>}
            </div>
        </div>
    )
}



export default HeaderController

