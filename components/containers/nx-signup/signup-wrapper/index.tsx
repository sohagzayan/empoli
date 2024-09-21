"use client"
import React, { useState } from 'react'
import RoleSelector from '../role-selector'
import SignUpForm from '../../job_seeker/SignUpForm'

const SignupWrapper = () => {
    const [selectRole, setSelectRole] = useState(null)
    return (
        <div className='min-h-screen bg-themeDark flex flex-col'>
            {selectRole ? <div className='flex-grow'>
                <SignUpForm />
            </div> : <div className='flex-grow'>
                <RoleSelector />
            </div>}
        </div>
    )
}

export default SignupWrapper