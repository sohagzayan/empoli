import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { GrAnalytics, GrOverview } from 'react-icons/gr'
import { HiOutlineCalendar } from 'react-icons/hi'
import { IoBriefcaseOutline, IoEyeOutline } from 'react-icons/io5'

const navItems = (role: any) => {


    const defaultNavItems = [

        {
            label: "Discover",
            key: `/discover`,
            icon: null
        },
        {
            label: "For job seekers",
            key: `/candidates/overview`,
            icon: null
        },
        {
            label: "For companies",
            key: `/recruit/overview`,
            icon: null
        },
    ]

    const recruitNavItem = [
        // {
        //     label: 'Discover',
        //     key: `/discover`,
        // },
        {
            label: 'Overview',
            key: `/recruit/overview`,
            icon: null
        },
        {
            label: 'Find talent',
            key: `/recruit/all-features/find-talent`,
            icon: null
        },
        {
            label: 'Post a jobs',
            key: `/recruit/all-features/post-a-job`,
            icon: null
        },
        {
            label: 'Free ATS',
            key: `/recruit/all-features/free-ats`,
            icon: null
        },
        {
            label: 'Customers',
            key: `/recruit/customers`,
            icon: null
        },
        {
            label: 'Join Directory',
            key: `/recruit/plans/recruit-plans`,
            icon: null
        },
        {
            label: 'For job seekers',
            key: `/candidates/overview`,
            icon: null
        },
    ]


    const candidateNavItem = [
        // {
        //     label: 'Discover',
        //     key: `/discover`,
        // },
        {
            label: 'Overview',
            key: `/candidates/overview`,
            icon: null
        },

        {
            label: 'Jobs',
            key: `/jobs`,
            icon: null
        },
        {
            label: 'Featured',
            key: `/candidates/featured`,
            icon: null
        },
        {
            label: 'Remote',
            key: `/candidates/remote`,
            icon: null
        },
        {
            label: 'For companies',
            key: `/recruit/overview`,
            icon: null
        },
    ]

    const adminNavItem = [{
        label: 'Discover',
        key: `/discover`,
        icon: null
    },
    {
        label: 'Overview',
        key: `/candidates/overview`,
        icon: null
    },]

    const dashboardNavItem = [
        {
            label: 'Profile',
            key: `/candidate/portal/profile`,
            icon: <AiOutlineUser />
        },
        {
            label: 'Overview',
            key: `/candidate/portal/overview`,
            icon: <GrOverview />

        },
        {
            label: 'Applied',
            key: `/candidate/portal/applied`,
            icon: <IoBriefcaseOutline />

        },
        {
            label: 'Calender',
            key: `/candidate/portal/calender`,
            icon: <HiOutlineCalendar />

        },
        {
            label: 'Analytics',
            key: `/candidate/portal/analytics`,
            icon: <GrAnalytics />

        },
        {
            label: 'Settings',
            key: `/candidate/portal/settings`,
            icon: <FiSettings />
        },
    ]

    console.log("role >", role)

    if (role === 'recruit') return recruitNavItem
    else if (`${role}/portal` === 'candidate/portal') return dashboardNavItem
    else if (role === 'candidates') return candidateNavItem
    else if (role === 'admin') return adminNavItem
    else {
        return defaultNavItems
    }
}

export default navItems