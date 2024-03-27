import React from 'react'

const SocialMediaLink = () => {
    return (
        <div className='py-2'>
            <ul className='flex items-center gap-2'>
                <li className='w-[35px] h-[35px] border border-white rounded-full flex items-center justify-center text-white'><i className="ri-facebook-line text-[20px] cursor-pointer"></i></li>
                <li className='w-[35px] h-[35px] border border-white rounded-full flex items-center justify-center text-white'><i className="ri-twitter-fill text-[20px] cursor-pointer"></i></li>
                <li className='w-[35px] h-[35px] border border-white rounded-full flex items-center justify-center text-white'><i className="ri-instagram-fill text-[20px] cursor-pointer"></i></li>
                <li className='w-[35px] h-[35px] border border-white rounded-full flex items-center justify-center text-white'><i className="ri-pinterest-fill text-[20px] cursor-pointer"></i></li>
            </ul>
        </div>
    )
}

export default SocialMediaLink