import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const ShareThisJobOnSocial = () => {
    return (
        <div className='flex items-center my-10'>
            <h3 className='font-medium mr-4'>Share this job</h3>
            <div className='flex items-center gap-4'>
                <button className='flex items-center gap-1 bg-[#3b5998] py-[10px] px-[25px] text-white rounded-[8px] text-[14px] font-medium'>
                    <Facebook size={20} />
                    Facebook
                </button>
                <button className='flex items-center gap-1 bg-[#55acee] py-[10px] px-[25px] text-white rounded-[8px] text-[14px] font-medium'>
                    <Twitter size={20} />
                    Twitter
                </button>
                <button className='flex items-center gap-1 bg-[#007bb5] py-[10px] px-[25px] text-white rounded-[8px] text-[14px] font-medium'>
                    <Linkedin size={20} />
                    Linkedin
                </button>
            </div>
        </div>
    )
}

export default ShareThisJobOnSocial