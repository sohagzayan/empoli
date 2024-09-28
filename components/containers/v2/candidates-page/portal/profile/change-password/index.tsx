import { Button, InputField, InputPasswordField } from '@/components/common'
import React from 'react'
import { FaRegUser } from 'react-icons/fa'

const ChangePassword = () => {
    return (
        <div>
            <div>
                <form action="">
                    <div>
                        <div className='flex items-center justify-between gap-10'>
                            <InputPasswordField
                                showLabel={true}
                                icon={FaRegUser}
                                label='Old Password'
                                placeholder='Enter old password'
                            />
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between gap-4 md:gap-5 lg:gap-10 mt-5'>
                            <InputPasswordField
                                showLabel={true}
                                icon={FaRegUser}
                                label='New Password'
                                placeholder='Enter new password'
                            />
                            <InputPasswordField
                                showLabel={true}
                                icon={FaRegUser}
                                label='Confirm Password'
                                placeholder='Enter confirm password'
                            />
                        </div>

                        <div className='mt-6'>
                            <Button text='Update' variant='secondary' />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword