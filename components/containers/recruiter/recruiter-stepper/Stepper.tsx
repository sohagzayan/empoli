'use client'
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import "@/styles/recruter-stepper/recruter-stepper.css"
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineAccountBalance, MdOutlineAccountBox } from "react-icons/md";

const Stepper = ({ }: any) => {

    const pathname = usePathname()
    const { data: session } = useSession()

    let activeIcon = <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
    </svg>

    const isActiveSignUpStep = pathname == '/members/recruiter/sign-up'
    const isActiveSurvey = pathname == '/members/recruiter/survey'
    const isActiveBilling = pathname == '/members/recruiter/billing'


    console.log("session", session)


    return (
        <>
            <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className={`mb-10 ms-6 ${isActiveSignUpStep || session || isActiveSurvey ? 'text-primary' : ''}`}>
                    <div className="absolute flex items-center justify-center w-8 h-8  bg-gray-100 rounded-full -start-4 ring-4 ring-white ">
                        <span className={`${isActiveSignUpStep && 'pulse'}`}>
                            {!isActiveSignUpStep ? activeIcon : <MdOutlineAccountBox />
                            }
                        </span>
                    </div>
                    <h3 className="font-medium leading-tight">Sign Up</h3>
                    <p className="text-sm">Create account as a recruiter</p>
                </li>
                <li className={`mb-10 ms-6 ${session && isActiveSurvey || isActiveBilling ? 'text-primary' : ''}`}>
                    <div className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white ">
                        <span className={`${isActiveSurvey && 'pulse'}`}>
                            {!isActiveSurvey && !isActiveSignUpStep ? activeIcon : <IoBriefcaseOutline />
                            }
                        </span>
                    </div>
                    <h3 className="font-medium leading-tight">Company Info</h3>
                    <p className="text-sm">Add Your company information</p>
                </li>
                <li className={`mb-10 ms-6 ${isActiveBilling && session ? 'text-primary' : ''}`}>
                    <div className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        <span className={`${isActiveBilling && 'pulse'}`}>
                            {!isActiveBilling && !isActiveSignUpStep && !isActiveSurvey ? activeIcon : <MdOutlineAccountBalance />
                            }
                        </span>
                    </div>
                    <h3 className="font-medium leading-tight">Billing</h3>
                    <p className="text-sm">add your account information</p>
                </li>

            </ol >


        </>
    );
};

export default Stepper;
