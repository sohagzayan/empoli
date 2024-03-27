import { Button } from '@/components/ui/button'
import { Checkbox } from '@radix-ui/react-checkbox'
import Image from 'next/image'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

const EducationSection = () => {
    return (
        <div className='my-6'>
            <div className='grid grid-cols-12'>
                <div className='col-span-4'>
                    <h3 className='text-lg text-blue-midnight_blue font-semibold'>
                        Education
                    </h3>
                    <p className='text-sm'>
                        What schools have you studied at?
                    </p>
                </div>
                <div className='col-span-8'>




                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>Education*</label>
                        <div>

                            <div className="relative">
                                <input type="search" id="default-search" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2" placeholder="College / University"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>Graduation*</label>
                        <div>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <input type="search" id="default-search" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2" placeholder="Graduation"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>Degree & Major*</label>
                        <div className='mb-5'>
                            <select id="countries" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2">
                                <option selected>Degree & Type </option>
                                <option value="US">This is a sales Position</option>
                                <option value="CA">This is a technical position</option>
                            </select>
                        </div>

                        <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                            placeholder='Major / Field of Study'
                        />
                        <button className='text-sm text-blue-midnight_blue mt-3'>+ Add major</button>
                    </div>


                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>GPA*</label>
                        <div className='flex items-center justify-between w-full gap-5'>
                            <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                                placeholder='GPA'
                            />
                            <input id='Last Name' type="text" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                                placeholder='Max'
                            />
                        </div>
                    </div>
                    <div className='flex justify-start '>
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


export default EducationSection
