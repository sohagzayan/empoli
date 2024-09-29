'use client';
import '@/styles/recruter-stepper/recruter-stepper.css';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdOutlineAccountBalance, MdOutlineAccountBox } from 'react-icons/md';

const Stepper = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const activeIcon = (
    <svg
      className="text-green-500 dark:text-green-400 h-3.5 w-3.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917 5.724 10.5 15 1.5"
      />
    </svg>
  );

  const isActiveSignUpStep = pathname == '/members/recruiter/sign-up';
  const isActiveSurvey = pathname == '/members/recruiter/survey';
  const isActiveBilling = pathname == '/members/recruiter/billing';

  return (
    <>
      <ol className="relative border-s border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <li
          className={`mb-10 ms-6 ${isActiveSignUpStep || session || isActiveSurvey ? 'text-primary' : ''}`}
        >
          <div className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white">
            <span className={`${isActiveSignUpStep && 'pulse'}`}>
              {!isActiveSignUpStep ? activeIcon : <MdOutlineAccountBox />}
            </span>
          </div>
          <h3 className="font-medium leading-tight">Sign Up</h3>
          <p className="text-sm">Create account as a recruiter</p>
        </li>
        <li
          className={`mb-10 ms-6 ${(session && isActiveSurvey) || isActiveBilling ? 'text-primary' : ''}`}
        >
          <div className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white">
            <span className={`${isActiveSurvey && 'pulse'}`}>
              {!isActiveSurvey && !isActiveSignUpStep ? (
                activeIcon
              ) : (
                <IoBriefcaseOutline />
              )}
            </span>
          </div>
          <h3 className="font-medium leading-tight">Company Info</h3>
          <p className="text-sm">Add Your company information</p>
        </li>
        <li
          className={`mb-10 ms-6 ${isActiveBilling && session ? 'text-primary' : ''}`}
        >
          <div className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
            <span className={`${isActiveBilling && 'pulse'}`}>
              {!isActiveBilling && !isActiveSignUpStep && !isActiveSurvey ? (
                activeIcon
              ) : (
                <MdOutlineAccountBalance />
              )}
            </span>
          </div>
          <h3 className="font-medium leading-tight">Billing</h3>
          <p className="text-sm">add your account information</p>
        </li>
      </ol>
    </>
  );
};

export default Stepper;
