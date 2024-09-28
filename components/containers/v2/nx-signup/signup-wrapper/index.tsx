"use client"
import React, { useState } from 'react'
import RoleSelector from '../role-selector'
import SignUpForm from '../../job_seeker/SignUpForm'

const SignupWrapper = () => {
    const [selectRole, setSelectRole] = useState<string | null>(null)
    const [conformPress, setConformPress] = useState<boolean>(false)


    return (
        <div className='min-h-screen bg-themeDark flex flex-col'>
            {selectRole && conformPress ? <div className='flex-grow'>
                <SignUpForm selectRole={selectRole} />
            </div> : <div className='flex-grow'>
                <RoleSelector setSelectRole={setSelectRole} selectRole={selectRole} setConformPress={setConformPress} />
            </div>}
        </div>
    )
}

export default SignupWrapper