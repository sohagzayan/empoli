
const SocialMediaLinkGroup = () => {
    return (
        <div className='py-2'>
            <ul className='flex items-center gap-2'>
                <li className='w-[35px] h-[35px] border border-transparent rounded-full flex items-center justify-center text-white bg-[rgba(255,255,255,0.1)]'>
                    <i className="ri-facebook-line text-[20px] cursor-pointer"></i>
                </li>
                <li className='w-[35px] h-[35px] border border-transparent rounded-full flex items-center justify-center text-white bg-[rgba(255,255,255,0.1)]'>
                    <i className="ri-twitter-fill text-[20px] cursor-pointer"></i>
                </li>
                <li className='w-[35px] h-[35px] border border-transparent rounded-full flex items-center justify-center text-white bg-[rgba(255,255,255,0.1)]'>
                    <i className="ri-linkedin-line text-[20px] cursor-pointer"></i>
                </li>
            </ul>
        </div>
    )
}

export default SocialMediaLinkGroup