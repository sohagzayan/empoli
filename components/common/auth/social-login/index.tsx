"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const SocialLogin = () => {
    const router = useRouter()

    const signInWithGoogle = async (event: any) => {
        event.preventDefault()

        try {
            const result = await signIn('google', {
                redirect: false, // disable automatic redirect
                role: "SEEKER",
                callbackUrl: '/' // specify the home page as the redirect target
            })

            if (result?.ok) {
                router.push('/') // manually redirect to home page
            } else {
                console.error('Error during sign in')
            }
        } catch (error: any) {
            console.error(error)
        }
    }



    return (
        <div className='w-full flex flex-col gap-3'>
            <button
                onClick={signInWithGoogle}
                className='relative cursor-pointer space-x-2 text-sm text-center border border-gray400 font-500  text-[14px] py-0 px-[15px] ease-out duration-200  outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1  hover:bg-white hover:text-text6 text-foreground  border-strong hover:border-stronger focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong w-full flex items-center justify-center border-[rgba(255,255,255,0.08)] h-[48px] rounded-[100px] text-[rgba(255,255,255,0.8)] gap-3 bg-[rgba(255,255,255,0.02)] font-apercu-regular' >
                <Image src="/assets/images/social/google.png" width={20} height={20} alt='google' />
                Continue with google
            </button>
            {/* <button
                // onClick={signInWithGoogle}
                className='relative cursor-pointer space-x-2 text-sm text-center border border-gray400 font-500  text-[14px] py-0 px-[15px] ease-out duration-200  outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1  hover:bg-white hover:text-text6 text-foreground  border-strong hover:border-stronger focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong w-full flex items-center justify-center border-[rgba(255,255,255,0.08)] h-[48px] rounded-[100px] text-[rgba(255,255,255,0.8)] gap-3 bg-[rgba(255,255,255,0.02)] font-apercu-regular' >
                <Image src="/assets/images/social/facebook.png" width={20} height={20} alt='google' />
                Continue with Facebook
            </button> */}
        </div>
    )
}

export default SocialLogin