"use client"
import Header from '@/components/shared/Nav/Header'
import AuthNav from '@/components/shared/auth-nav/AuthNav'
import HeaderController from '@/components/shared/header-controller/HeaderController'
import Image from 'next/image'
import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { FaAngleRight } from 'react-icons/fa'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { sidebarItems } from '@/constants/sidebaritems'
import { usePathname } from 'next/navigation'
import { IoSearchOutline, IoSettingsOutline } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'

const Profile = () => {

    return (
        <div className=''>
            Profile
        </div>
    )
}

export default Profile