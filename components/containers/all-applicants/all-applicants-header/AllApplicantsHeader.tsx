import React from 'react'
import PropTypes from 'prop-types'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

const AllApplicantsHeader = () => {
    return (
        <div>
            <div>
                <h3 className='text-blue text-[16px] '>Applicant</h3>
                <hr className='my-4' />
                <div className='grid grid-cols-12 items-center '>
                    <div className='col-span-4'>
                        <h3 className='text-gray-500 text-[14px]'>Select Your Job post here</h3>
                    </div>
                    <div className='col-span-8'>
                        <Select>
                            <SelectTrigger className="w-full text-gray-500 focus:outline-primary">
                                <SelectValue placeholder="Select a your job " />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="apple">
                                        Software Engineer (Android), Libraries</SelectItem>
                                    <SelectItem value="banana">Recruiting Coordinator</SelectItem>
                                    <SelectItem value="blueberry">
                                        Product Manager, Studio</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className='grid grid-cols-12 items-center mt-6  '>
                    <div className='col-span-4 '>
                        <h3 className='text-gray-500 text-[14px]'>Add Your job post id here</h3>
                    </div>
                    <div className='col-span-8 '>
                        <input className='w-full  rounded-md text-gray-500 focus:outline-primary border py-[8px] px-[10px] text-[14px]' type="text" placeholder='job id' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 bg-primary-50 p-4 rounded-md mt-8'>
                <div className='col-span-5'>
                    <h3 className='text-primary text-[14px]'>Senior Product Designer</h3>
                </div>
                <div className='col-span-7'>
                    <ul className='flex items-center justify-between'>
                        <li className='text-primary text-[14px]v'>Total(s): 6</li>
                        <li className='text-green-500 text-[14px]'>Approved: 2</li>
                        <li className='text-red-500 text-[14px]'>Rejected(s): 4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AllApplicantsHeader

