import Image from 'next/image'
import React from 'react'
import SocialMediaLink from '../social-media-link/SocialMediaLink'
import Copyrights from '../copyrights/Copyrights'
import SubscribeNewsletter from '../subscribe-newsletter/SubscribeNewsletter'

const Footer = () => {
    return (
        <footer className=''>
            <SubscribeNewsletter />
            <div className='bg-primary-600 pb-[20px] pt-[150px]'>
                <div className='container lg:px-16 xl:px-20 '>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                        <div className='flex flex-col gap-4'>
                            <Image src="/assets/images/footer_logo.png" alt='footer_logo' width={150} height={150} />
                            <div className='py-6 flex flex-col gap-3'>
                                <span className='text-white font-semibold'>support@example.com</span>
                                <span className='text-white font-semibold'>+1-900-123 4567</span>
                            </div>
                            <SocialMediaLink />
                        </div>
                        <div>
                            <h2 className='text-[20px] text-white font-semibold pt-[10px] pb-[40px]'>Useful Links</h2>
                            <ul className='flex  flex-col text-white font-medium gap-3'>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Service</li>
                                <li>Blog</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-[20px] text-white font-semibold pt-[10px] pb-[40px]'>Help & Support</h2>
                            <ul className='flex  flex-col text-white font-medium gap-3'>
                                <li>FAQs</li>
                                <li>Support</li>
                                <li>How it works</li>
                                <li>Terms & conditions</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-[20px] text-white font-semibold pt-[10px] pb-[40px]'>Let’s Try Out</h2>
                            <div className='flex flex-col gap-2 '>
                                <Image src="/assets/images/googleplay_blue.png" alt='footer_logo' width={150} height={150} className='bg-white p-4 rounded-[10px]' />
                                <Image src="/assets/images/appstore_blue(2).png" alt='footer_logo' width={150} height={150} className='bg-white p-4 rounded-[10px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyrights />
        </footer>
    )
}

export default Footer