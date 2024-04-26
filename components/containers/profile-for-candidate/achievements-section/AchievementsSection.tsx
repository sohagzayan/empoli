import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@/components/ui/button'
import { IoMdClose } from 'react-icons/io'

const AchievementsSection = () => {
    return (
        <div className='my-6'>
            <div className='grid grid-cols-12'>
                <div className='col-span-4'>
                    <h3 className='text-lg text-blue-midnight_blue font-semibold'>
                        Achievements
                    </h3>
                    <p className='text-sm'>
                        Sharing more details about yourself will help you stand out more.
                    </p>
                </div>
                <div className='col-span-8'>
                    <div className='mb-6'>
                        <div>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <textarea id="default-search" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2" placeholder="It's OK to brag - e.g. I launched 3 successful Facebook apps which in total reached 2M+ users and generated $100k+ in revenue. I built everything from the front-end to the back-end and everything in between." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AchievementsSection
