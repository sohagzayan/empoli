import { Button } from '@/components/ui/button'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

const ProfileResume = () => {
    return (
        <div className='mb-5'>
            <div className='grid grid-cols-12 py-4'>
                <div className='col-span-4'>
                    <h3 className='text-lg text-blue-midnight_blue font-semibold'>Upload your recent resume or CV</h3>
                    <p className='text-sm mb-1'>Upload your most up-to-date resume</p>
                    <p className='text-sm'>File types: DOC, DOCX, PDF, TXT</p>
                </div>
                <div className='col-span-8'>
                    <div className='mb-6'>
                        <label htmlFor="Last Name" className='block text-foreground-light text-sm mb-1'>1.pdf*</label>
                        <p className='text-sm mb-2'>View your resume or upload a new one below</p>
                        <input id='Last Name' type="file" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                        />
                    </div>


                    <div className='flex justify-between items-center '>
                        <div className='flex items-center gap-3'>
                            <input id='resume review' type="checkbox" className='w-4 h-4' />
                            <label
                                htmlFor="resume review"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Id like a free resume review
                            </label>
                        </div>
                        <Button variant="ghost">Remove your resume</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileResume