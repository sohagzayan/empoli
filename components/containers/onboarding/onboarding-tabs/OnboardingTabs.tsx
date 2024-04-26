"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { FiCheck } from 'react-icons/fi';



const tabs = [
    { label: 'Profile', path: '/jobs/onboarding/extended_profile' },
    { label: 'Preferences', path: '/jobs/onboarding/preferences' },
    { label: 'Culture', path: '/jobs/onboarding/culture' },
    { label: 'Resume/CV', path: '/jobs/onboarding/resume' },
];

const OnboardingTabs = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const pathname = usePathname()

    const activeIndex = tabs.findIndex(tab => pathname === tab.path);

    return (
        <nav>
            <ul className='bg-white rounded-full py-[14px] px-[42px] border w-[520px] flex mx-auto items-center justify-between text-sm mt-10'>
                {tabs.map((tab, index) => (
                    <li
                        key={tab.path}
                        className={`relative ${index < activeIndex ? 'text-green-500' : index === activeIndex ? 'text-primary' : 'text-gray-500'} after:absolute after:border after:border-[#8fa3bf] after:h-[1px] after:w-[20px] after:right-[-25px] after:top-[9px]`}

                    >
                        <Link href={tab.path}>
                            {tab.label}
                        </Link>
                    </li>
                ))}
                <li className={`relative flex items-center gap-1 ml-1 text-green-500`}>
                    <FiCheck />
                    Done
                </li>
            </ul>
        </nav>
    )
}

export default OnboardingTabs