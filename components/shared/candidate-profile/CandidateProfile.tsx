import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import { IoEyeOutline, IoLocationOutline } from 'react-icons/io5'
import { LiaMoneyBillWaveSolid } from 'react-icons/lia'
import { IoMdCheckmark, IoMdCloseCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from 'react-icons/ri'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import GetTooltip from '../get-tooltip/GetTooltip'



const CandidateProfile = () => {
    return (
        <Card className="px-2 py-4">
            <CardContent className='grid grid-cols-12 mb-0 pb-0  '>
                <div className='col-span-3'>
                    <Image src="/assets/images/candidate-1.webp" width={80} height={80} alt="candidate" />
                </div>
                <div className='col-span-9'>
                    <h3 className='text-[18px] font-medium text-blue mb-1'>Darlene Robertson</h3>
                    <div className='flex items-center gap-2 text-[14px] mb-2'>
                        <span className='text-primary'>Ui Designer</span>
                        <span className='flex items-center'><IoLocationOutline /> London, UK</span>
                        <span className='flex items-center'><LiaMoneyBillWaveSolid className='mr-1' />  $44 / hour</span>
                    </div>
                    <ul className='flex items-center gap-4 text-[12px] mb-4'>
                        <li className='bg-primary-50 px-4 py-1 rounded-lg'>App</li>
                        <li className='bg-primary-50 px-4 py-1 rounded-lg'>Design</li>
                        <li className='bg-primary-50 px-4 py-1 rounded-lg'>Digital</li>
                    </ul>
                    <ul className='flex items-center gap-3'>
                        <GetTooltip tooltipContent="View Application">
                            <li className='bg-primary-50 w-[28px] h-[28px] text-[14px] rounded-lg flex items-center justify-center text-primary-500 cursor-pointer hover:bg-primary transition-all duration-200 hover:text-white'><IoEyeOutline /></li>
                        </GetTooltip>
                        <GetTooltip tooltipContent="Approve Application">
                            <li className='bg-primary-50 w-[28px] h-[28px] text-[14px] rounded-lg flex items-center justify-center text-primary-500 cursor-pointer hover:bg-primary transition-all duration-200 hover:text-white'><IoMdCheckmark /></li>
                        </GetTooltip>
                        <GetTooltip tooltipContent="Reject Application">
                            <li className='bg-primary-50 w-[28px] h-[28px] text-[14px] rounded-lg flex items-center justify-center text-primary-500 cursor-pointer hover:bg-primary transition-all duration-200 hover:text-white'><IoMdCloseCircleOutline /></li>
                        </GetTooltip>
                        <GetTooltip tooltipContent="Delete Application">
                            <li className='bg-primary-50 w-[28px] h-[28px] text-[14px] rounded-lg flex items-center justify-center text-primary-500 cursor-pointer hover:bg-primary transition-all duration-200 hover:text-white'><RiDeleteBinLine /></li>
                        </GetTooltip>



                    </ul>
                </div>
            </CardContent>

        </Card>
    )
}

export default CandidateProfile