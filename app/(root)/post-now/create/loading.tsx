import React from 'react'
import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle'

const loading = () => {
    return (
        <div className='bg-white backdrop-blur-sm z-50 fixed inset-0  place-items-center overflow-y-auto data-open:animate-overlay-show data-closed:animate-overlay-hide flex items-center justify-center flex-col'>
            <MiniLoadingCircle />
            <div className='mt-2'>
                Create new job loading...
            </div>
        </div>
    )
}



export default loading

