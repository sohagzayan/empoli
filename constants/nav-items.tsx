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
        {
            label: 'Discover',
            key: `/discover`,
        },
        {
            label: 'Overview',
            key: `/recruit/overview`,
        },
        {
            label: 'Products',
            subMenu: [
                { id: 1, label: "Recruit Pro", details: "More filters, candidate information, & workflow tools", key: "/recruit/products/recruit-pro" },
                { id: 1, label: "Curated", details: "Vetted list of the top local & remote tech talent sent to you 2x week", key: "/recruit/products/curated" },
            ]
        },
        {
            label: 'Pricing',
            key: `/recruit/pricing`,
        },
        {
            label: 'For job seekers',
            key: `/candidates/overview`,
        },
    ]


    const candidateNavItem = [
        {
            label: 'Discover',
            key: `/discover`,
        },
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