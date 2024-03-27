import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle'
import React from 'react'

export default function Loading() {
    return (
        <div className='bg-white backdrop-blur-sm z-50 fixed inset-0  place-items-center overflow-y-auto data-open:animate-overlay-show data-closed:animate-overlay-hide flex items-center justify-center flex-col'>
            <MiniLoadingCircle />
            <div className='mt-2'>
                job details loading...
            </div>
        </div>
    )
}
