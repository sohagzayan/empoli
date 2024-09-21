import Image from 'next/image'
import React from 'react'
import SocialMediaLink from '../social-media-link/SocialMediaLink'
import Copyrights from '../copyrights/Copyrights'
import SubscribeNewsletter from '../subscribe-newsletter/SubscribeNewsletter'
import { Logo, SocialMediaLinkGroup, SubscriptionForm } from '@/components/common'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className=' mb-14 md:mb-0 lg:mb-0'>
            <div className='bg-primary-600 pb-[20px] pt-[100px] lg:pt-[150px]'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6'>

                        {/* Logo and Social Media */}
                        <div className='flex flex-col col-span-4'>
                            <Logo />
                            <div className='py-1 flex flex-col gap-3'>
                                <p className='text-text6'>JobJoy is a shared platform for career opportunities, seamlessly connecting multiple job boards to provide users with a streamlined job search experience.</p>
                            </div>
                            <SocialMediaLinkGroup />
                        </div>

                        {/* Useful Links */}
                        <div className='col-span-2 md:col-span-1 lg:col-span-2 flex md:justify-end'>
                            <div>
                                <h2 className='text-[20px] text-white font-semibold pt-[10px] pb-[20px] lg:pb-[40px]'>
                                    Useful Links
                                </h2>
                                <ul className='text-text6 space-y-2'>
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Service</li>
                                    <li>Blog</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        </div>

                        {/* Help & Support */}
                        <div className='col-span-2 md:col-span-1 lg:col-span-2 flex md:justify-end'>
                            <div>
                                <h2 className='text-[20px] text-white font-semibold pt-[10px] pb-[20px] lg:pb-[40px]'>Help & Support</h2>
                                <ul className='text-text6 space-y-2'>
                                    <li>FAQs</li>
                                    <li>Support</li>
                                    <li>How it works</li>
                                    <li>Terms & conditions</li>
                                    <li>Privacy policy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Subscribe */}
                        <div className='col-span-4 flex md:justify-end'>
                            <div>
                                <h2 className='text-[20px] text-white font-semibold pt-[10px] pb-[20px] lg:pb-[40px]'>
                                    Subscribe
                                </h2>
                                <div>
                                    <p className='text-wrap text-text6 font-400 mb-3'>Signup for our newsletter to get the latest news <br /> in your inbox.</p>
                                    <SubscriptionForm />
                                    <p className='text-wrap text-text6 font-400 mb-3 mt-3'>
                                        Your email is safe with us. We don{"'"}t spam.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Copyrights />
        </footer>
    )
}

export default Footer;
