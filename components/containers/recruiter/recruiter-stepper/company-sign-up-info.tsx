"use client"
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MdErrorOutline } from 'react-icons/md'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { Formik, FormikHelpers } from 'formik'
import { registerValidationAsCandidateSchema } from '@/utils/validation-schemas'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'

const CompanySignUpInfo = ({ }: any) => {






    return (

        <div></div>
    )
}


export default CompanySignUpInfo
