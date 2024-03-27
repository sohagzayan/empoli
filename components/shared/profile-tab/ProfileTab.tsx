"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const ProfileTab = () => {
    const pathname = usePathname()
    const router = useRouter()
    console.log("pathname", pathname)
    return (
        <div>
            <div>
                <h1 className='text-3xl font-medium mb-6'>Edit your Wellfound profile</h1>
                <div className='flex items-center justify-between border-b border-gray-100'>
                    <ul className='flex items-center gap-4'>
                        <li
                            onClick={() => router.push("/profile/edit/overview")}
                            className={`border-b-2 font-medium  transition-all duration-150 ease-out  pb-3 cursor-pointer  ${pathname === "/profile/edit/overview" ? 'border-blue-midnight_blue text-blue-midnight_blue' : ' border-transparent text-blue-midnight_blue/80 hover:border-light_gray'}`}
                        >
                            Overview

                        </li>
                        <li
                            onClick={() => router.push("/profile/edit")}
                            className={`border-b-2 font-medium  transition-all duration-150 ease-out pb-3 cursor-pointer  ${pathname === "/profile/edit" ? 'border-blue-midnight_blue text-blue-midnight_blue' : ' border-transparent text-blue-midnight_blue/80 hover:border-light_gray'}`}>
                            Profile
                        </li>
                        <li
                            onClick={() => router.push("/profile/edit/resume")}
                            className={`border-b-2 transition-all duration-150 ease-out font-medium pb-3 cursor-pointer  ${pathname === "/profile/edit/resume" ? 'border-blue-midnight_blue text-blue-midnight_blue' : ' border-transparent text-blue-midnight_blue/80 hover:border-light_gray'}`}>
                            Resume / CV
                        </li>
                        <li
                            onClick={() => router.push("/profile/edit/preferences")}
                            className={`border-b-2 font-medium  transition-all duration-150 ease-out pb-3 cursor-pointer  ${pathname === "/profile/edit/preferences" ? 'border-blue-midnight_blue text-blue-midnight_blue' : ' border-transparent text-blue-midnight_blue/80 hover:border-light_gray'}`}>
                            Preferences
                        </li>
                        <li
                            onClick={() => router.push("/profile/edit/culture")}
                            className={`border-b-2  transition-all duration-150 ease-out font-medium pb-3 cursor-pointer  ${pathname === "/profile/edit/culture" ? 'border-blue-midnight_blue text-blue-midnight_blue' : ' border-transparent text-blue-midnight_blue/80 hover:border-light_gray'}`}>
                            Culture

                        </li>
                    </ul>
                    <div className='flex items-center gap-4'>
                        <button className='text-sm text-primary font-bold'>Profile views</button>
                        <button className='text-sm text-primary font-bold'>View public profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileTab
