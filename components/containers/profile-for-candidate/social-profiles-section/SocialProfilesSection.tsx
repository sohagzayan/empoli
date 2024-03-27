import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@/components/ui/button'
import { IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import { BiWorld } from 'react-icons/bi'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'

const SocialProfilesSection = () => {
    return (
        <div className='my-6 '>
            <div className='grid grid-cols-12 overflow-hidden'>
                <div className='col-span-4 '>
                    <div>
                        <h3 className='text-lg text-blue-midnight_blue font-semibold'>
                            Social Profiles
                        </h3>
                        <p className='text-sm'>
                            Where can people find you online?
                        </p>
                    </div>
                </div>
                <div className='col-span-8'>

                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='  text-foreground-light text-sm mb-1 flex items-center gap-2'>
                            <BiWorld size={20} />
                            Website
                        </label>
                        <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2' value=''
                            placeholder='https://'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='  text-foreground-light text-sm mb-1 flex items-center gap-2'>
                            <FaLinkedinIn size={20} />
                            LinkedIn
                        </label>
                        <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2' value=''
                            placeholder='https://linkedin.com/in/username'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='  text-foreground-light text-sm mb-1 flex items-center gap-2'>
                            <IoLogoGithub size={20} />
                            GitHub
                        </label>
                        <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2' value=''
                            placeholder='https://github.com/username'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='  text-foreground-light text-sm mb-1 flex items-center gap-2'>
                            <FaTwitter size={20} />
                            Twitter
                        </label>
                        <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2' value=''
                            placeholder='https://twitter.com/username'
                        />
                    </div>


                    <div className='flex justify-end '>
                        <div className='flex items-center gap-4'>
                            <Button className='' variant="ghost">Cancel</Button>
                            <Button>Save</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default SocialProfilesSection
