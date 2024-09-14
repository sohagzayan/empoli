import React from 'react'

const navItems = (role: any) => {

    const defaultNavItems = [

        {
            label: "Discover",
            key: `/discover`,
        },
        {
            label: "For job seekers",
            key: `/candidates/overview`,
        },
        {
            label: "For companies",
            key: `/recruit/overview`,
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
        },
        {
            label: 'Find talent',
            key: `/recruit/all-features/find-talent`,
        },
        {
            label: 'Post a jobs',
            key: `/recruit/all-features/post-a-job`,
        },
        {
            label: 'Free ATS',
            key: `/recruit/all-features/free-ats`,
        },
        {
            label: 'Customers',
            key: `/recruit/customers`,
        },
        {
            label: 'Join Directory',
            key: `/recruit/plans/recruit-plans`,
        },
        {
            label: 'For job seekers',
            key: `/candidates/overview`,
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
        },

        {
            label: 'Jobs',
            key: `/jobs`,
        },
        {
            label: 'Featured',
            key: `/candidates/featured`,
        },
        {
            label: 'Remote',
            key: `/candidates/remote`,
        },
        {
            label: 'For companies',
            key: `/recruit/overview`,
        },
    ]

    const adminNavItem = [{
        label: 'Discover',
        key: `/discover`,
    },
    {
        label: 'Overview',
        key: `/candidates/overview`,
    },]

    console.log("role >", role)

    if (role === 'recruit') return recruitNavItem
    else if (role === 'candidates') return candidateNavItem
    else if (role === 'admin') return adminNavItem
    else {
        return defaultNavItems
    }
}

export default navItems