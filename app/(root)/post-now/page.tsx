"use client"
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LuArrowRight } from 'react-icons/lu'
import HowTtWorks from '@/components/containers/post-now/how-it-works/HowTtWorks'
import { useRouter } from 'next/navigation'

const PostNow = () => {
    const router = useRouter()

    return (
        <div>
            <div className='bg-bread_crump-banners bg-no-repeat bg-cover bg-center relative py-10'>
                <div className='container lg:px-16 xl:px-20'>

                    <div className=' relative flex justify-between h-16 mx-auto  py-4  '>
                        <nav className='flex items-center justify-between w-full'>
                            <Image src="/assets/images/footer_logo.png" width={150} height={150} alt='logo' />
                            <div>
                                <Button className='bg-white text-blue-midnight_blue font-semibold rounded-full px-10 py-6 text-[16px] hover:bg-white/80'>Profile</Button>
                            </div>
                        </nav>
                    </div>

                    <div className='flex justify-center items-center py-20'>
                        <div className='text-center'>
                            <h2 className='text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl text-white font-medium'>Post a job  in minutes</h2>
                            <p className='pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg text-white font-normal '>Apper presents itself as a self-service hiring platform, dedicated to expediting and simplifying the candidate search process for small businesses. We take great pride in offering a seamless experience tailored specifically to your needs. It would be our utmost pleasure to assist you in swiftly finding the ideal candidates for your team with unparalleled ease and efficiency</p>
                            <Button
                                onClick={() => router.push("/post-now/create")}
                                className='min-w-[300px] h-[68px] bg-blue-midnight_blue text-[20px] rounded-full flex items-center gap-2 mx-auto hover:bg-blue-midnight_blue/80 group mt-10'>Post a job
                                <span className='group-hover:translate-x-5 transition-all ease-in-out duration-200'><LuArrowRight size={22} /></span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
            <div className=''>
                <HowTtWorks />

                <div className=' bg-primary py-8 mb-10'>
                    <div className='container lg:px-16 xl:px-20  flex items-center justify-center  '>
                        <div className='flex items-center gap-4 text-white'>
                            <p className='font-medium'>Post a job and manage your hiring process for $99/month USD per job posting  </p>
                            <Button
                                onClick={() => router.push("/post-now/create")}
                                className='min-w-[150px] h-[50px] bg-blue-midnight_blue text-[16px] rounded-full flex items-center gap-2  hover:bg-blue-midnight_blue/80 group '>Post a job
                                <span className='group-hover:translate-x-5 transition-all ease-in-out duration-200'><LuArrowRight size={22} /></span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center flex-col mb-10'>
                    <h2 className='text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-6xl text-blue-midnight_blue font-medium mb-10'>Proudly Featured in</h2>
                    <div className='flex items-center  gap-10'>
                        <div className='bg-white border p-10 text-center rounded-md shadow'>
                            <h3 className='text-3xl font-medium text-blue-midnight_blue mb-3'>20 Million</h3>
                            <p>Candidates visit Joblist <br /> every year</p>
                        </div>
                        <div className='bg-white border p-10 text-center rounded-md shadow'>
                            <h3 className='text-3xl font-medium text-blue-midnight_blue mb-3'>5 Million</h3>
                            <p>Applications Delivered <br /> by Joblist</p>
                        </div>
                    </div>

                    <h2 className='text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-6xl text-blue-midnight_blue font-medium mb-10 mt-10'>Ready to start hiring?</h2>

                    <Button
                        onClick={() => router.push("/post-now/create")}
                        className='min-w-[300px] h-[68px] bg-blue-midnight_blue text-[20px] rounded-full flex items-center gap-2 mx-auto hover:bg-blue-midnight_blue/80 group mt-3'>Post a job
                        <span className='group-hover:translate-x-5 transition-all ease-in-out duration-200'><LuArrowRight size={22} /></span>
                    </Button>
                </div>

            </div>
        </div>
    )
}


export default PostNow

