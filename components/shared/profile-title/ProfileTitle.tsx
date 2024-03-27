import React from 'react'
import PropTypes from 'prop-types'

const ProfileTitle = ({ children }: any) => {
    return (
        <h2 className='text-[20px] mb-[25px] text-blue-midnight_blue font-medium capitalize'>{children}</h2>
    )
}

export default ProfileTitle

