import React from 'react'
import PropTypes from 'prop-types'
import MiniLoadingCircle from '../mini-loading-circle/MiniLoadingCircle'

const Loading = () => {
    return (
        <div className='bg-white w-full h-full flex items-center justify-center absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex items-center gap-3'>
                <MiniLoadingCircle />
                Loading...
            </div>
        </div>
    )
}



export default Loading

