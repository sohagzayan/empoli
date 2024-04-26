import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@/components/ui/button'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'
import { BiWorld } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'

const YourSkillsSection = () => {
    return (
        <div className='my-6 '>
            <div className='grid grid-cols-12 overflow-hidden'>
                <div className='col-span-4 '>
                    <div>
                        <h3 className='text-lg text-blue-midnight_blue font-semibold'>
                            Your Skills
                        </h3>
                        <p className='text-sm'>
                            This will help startups hone in on your strengths.
                        </p>
                    </div>
                </div>
                <div className='col-span-8'>
                    <ul className='flex items-center flex-wrap mb-2'>
                        <li className='bg-light_gray  px-2 py-1 inline-flex items-center gap-3'>
                            Javascript <IoMdClose />
                        </li>
                    </ul>
                    <div className='mb-6'>
                        <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2' value=''
                            placeholder='https://'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}


export default YourSkillsSection
