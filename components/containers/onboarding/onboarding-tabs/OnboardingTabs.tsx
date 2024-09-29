'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FiCheck } from 'react-icons/fi';

const tabs = [
  { label: 'Profile', path: '/jobs/onboarding/extended_profile' },
  { label: 'Preferences', path: '/jobs/onboarding/preferences' },
  { label: 'Culture', path: '/jobs/onboarding/culture' },
  { label: 'Resume/CV', path: '/jobs/onboarding/resume' },
];

const OnboardingTabs = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const activeIndex = tabs.findIndex((tab) => pathname === tab.path);

  return (
    <nav>
      <ul className="mx-auto mt-10 flex w-[520px] items-center justify-between rounded-full border bg-white px-[42px] py-[14px] text-sm">
        {tabs.map((tab, index) => (
          <li
            key={tab.path}
            className={`relative ${index < activeIndex ? 'text-green-500' : index === activeIndex ? 'text-primary' : 'text-gray-500'} after:absolute after:right-[-25px] after:top-[9px] after:h-[1px] after:w-[20px] after:border after:border-[#8fa3bf]`}
          >
            <Link href={tab.path}>{tab.label}</Link>
          </li>
        ))}
        <li className={`text-green-500 relative ml-1 flex items-center gap-1`}>
          <FiCheck />
          Done
        </li>
      </ul>
    </nav>
  );
};

export default OnboardingTabs;
