import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

const AboutSection = () => {
    return (
        <div className='mb-5'>
            <div className='grid grid-cols-12'>
                <div className='col-span-4'>
                    <h3 className='text-lg text-blue-midnight_blue font-semibold'>About</h3>
                    <p className='text-sm'>  Tell us about yourself so startups know who you are.</p>
                </div>
                <div className='col-span-8'>
                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>Your name*</label>
                        <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2' value='Sohag Hossain Zayan'
                        />
                    </div>
                    <div className='mb-2 flex items-center gap-5'>
                        <Image src="/assets/images/avatar.webp"
                            width={64}
                            height={64}
                            className='rounded-full'
                            alt='profile'
                        />
                        <Button variant="outline" className='text-sm border-primary hover:border-primary hover:bg-primary/10 hover:text-primary'>Upload a new photo</Button>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>Where are you based?*</label>
                        <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2' value='Dhaka, Dhaka Division'
                        />
                    </div>

                    <div className='mb-6  flex items-center justify-between gap-4'>
                        <div className='flex-1'>
                            <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>Select your primary role*</label>
                            <select id='Last Name' className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                            >
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>Years of experience*</label>
                            <select id='Last Name' className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                            >
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>Open to the following roles</label>
                        <ul className='my-2'>
                            <li className='text-sm inline-flex items-center gap-3 text-blue-midnight_blue bg-light_gray py-1 px-2'>
                                Software Engineer
                                <IoMdClose />
                            </li>
                        </ul>
                        <select id='Last Name' className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                        >
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>


                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>Your bio
                        </label>

                        <textarea id='Last Name' className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                            value="Stanford CS, Full stack generalist; launched a successful Android app, worked at Google"
                        >
                        </textarea>
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


export default AboutSection
