import React from 'react'
import PropTypes from 'prop-types'
import { FaBookmark, FaTachometerAlt, FaUser } from 'react-icons/fa'
import { MdOutlineBallot } from 'react-icons/md'
import { PiBrowserFill } from "react-icons/pi";
import { IoMdSettings } from 'react-icons/io';
import { HiOutlineLogout } from "react-icons/hi";
import { IoNewspaperOutline } from 'react-icons/io5';


const ProfileLeftMenu = ({ activeProfileTab, setActiveProfileTab }: any) => {


    const handleTabChange = (tab: number) => {
        setActiveProfileTab(tab)
    }


    return (
        <div>
            <ul className='bg-white p-[8px]'>
                <li
                    onClick={() => handleTabChange(0)}
                    className={`${activeProfileTab == 0 ? "text-primary" : "text-gray-500"}`}>
                    <button className='flex items-center gap-2 py-[12px] px-[15px] rounded-[5px]  text-[16px]'>
                        <FaTachometerAlt size={18} />
                        Dashboard
                    </button>
                </li>
                <li
                    onClick={() => handleTabChange(1)}
                    className={`${activeProfileTab == 1 ? "text-primary" : "text-gray-500"}`}>
                    <button className='flex items-center gap-2 py-[12px] px-[15px] rounded-[5px]  text-[16px]'>
                        <MdOutlineBallot size={18} />
                        Sort Listed Job
                    </button>
                </li>
                <li
                    onClick={() => handleTabChange(2)}
                    className={`${activeProfileTab == 2 ? "text-primary" : "text-gray-500"}`}>
                    <button className='flex items-center gap-2 py-[12px] px-[15px] rounded-[5px]  text-[16px]'>
                        <PiBrowserFill size={18} />
                        Applied Job
                    </button>
                </li>
                <li
                    onClick={() => handleTabChange(3)}
                    className={`${activeProfileTab == 3 ? "text-primary" : "text-gray-500"}`}>
                    <button className='flex items-center gap-2 py-[12px] px-[15px] rounded-[5px]  text-[16px]'>
                        <FaBookmark size={18} />
                        Saved Job
                    </button>
                </li>
                <li
                    onClick={() => handleTabChange(4)}
                    className={`${activeProfileTab == 4 ? "text-primary" : "text-gray-500"}`}>
                    <button className='flex items-center gap-2 py-[12px] px-[15px] rounded-[5px]  text-[16px]'>
                        <IoNewspaperOutline size={18} />
                        Post Job
                    </button>
                </li>
                <li
                    onClick={() => handleTabChange(5)}
                    className={`${activeProfileTab == 5 ? "text-primary" : "text-gray-500"}`}>
                    <button className='flex items-center gap-2 py-[12px] px-[15px] rounded-[5px]  text-[16px]'>
                        <FaUser size={18} />
                        My Profile
                    </button>
                </li>
                <li
                    onClick={() => handleTabChange(6)}
                    className={`${activeProfileTab == 6 ? "text-primary" : "text-gray-500"}`} >
                    <button className='flex items-center gap-2 py-[12px] px-[15px] rounded-[5px]  text-[16px]'>
                        <IoMdSettings size={18} />
                        Settings
                    </button>
                </li>
                <li
                    onClick={() => handleTabChange(7)}
                    className={`${activeProfileTab == 7 ? "text-primary" : "text-gray-500"}`}>
                    <button className='flex items-center gap-2 py-[12px] px-[15px] rounded-[5px]  text-[16px]'>
                        <HiOutlineLogout size={18} />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default ProfileLeftMenu