import AuthTimeline from '@/components/shared/auth-timeline/AuthTimeline'
import React from 'react'

const HowItsWork = () => {
    return (
        <div className='flex items-center justify-center h-full p-4'>
            <div>
                <h2 className='text-5xl font-semibold text-blue-midnight_blue '>How its work</h2>
                <p className='text-blue-midnight_blue font-light mt-4 ' >Pick up where you left off.</p>
                <AuthTimeline />
            </div>
        </div>
    )
}

export default HowItsWork