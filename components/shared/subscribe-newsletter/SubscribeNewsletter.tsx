import { Button } from '@/components/ui/button'
import React from 'react'

const SubscribeNewsletter = () => {
    return (
        <div className='bg-primary-50'>
            <div className='container lg:px-16 xl:px-20   mb-[-100px] '>
                <div className='grid grid-cols-12 bg-primary p-[50px] rounded-[15px] shadow-shadow_dark relative '>
                    <div className='lg:col-span-5 col-span-12'>
                        <h3 className='text-[40px] font-bold text-white leading-tight'>Subscribe <br /> newsletter</h3>
                        <p className='text-white py-2'>Be the first to recieve all latest post in your inbox</p>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex md:flex-row flex-col items-center justify-center gap-8'>
                        <div className='w-full col-span-10'>
                            <input className='h-[50px] w-full px-5 rounded-lg outline-none' type="text" placeholder='Email' />
                        </div>
                        <div className=' col-span-2'>
                            <Button className='bg-white text-primary h-[50px] w-[170px] uppercase font-semibold hover:bg-primary-600 hover:text-white '>Submit</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SubscribeNewsletter