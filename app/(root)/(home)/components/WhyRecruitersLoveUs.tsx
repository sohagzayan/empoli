import { Button } from '@/components/common'
import Image from 'next/image'

const WhyRecruitersLoveUs = () => {
    return (
        <div className=' bg-[rgba(255,255,255,0.03)] p-6 rounded-md mx-auto bg'>
            <div>
                <h2 className='text-theme1 font-600'>Need talent?</h2>
                <p className='text-3xl text-white font-500 mt-2'>Why job seekers love us</p>
                <div className='mt-8 flex flex-col gap-6'>
                    <div className='grid grid-cols-12 gap-8'>
                        <div className=' col-span-2 w-[50px] h-[50px] rounded-full flex items-center justify-center'
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                            <Image src="/assets/images/why-choose-us/why-choose1.svg" alt='why choose us' width={30} height={30} />
                        </div>
                        <div className='col-span-10'>
                            <p className='text-text6 text-wrap'>Connect directly with founders at top startups - no third party recruiters allowed.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-8'>
                        <div className='col-span-2 w-[50px] h-[50px] rounded-full flex items-center justify-center'
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                            <Image src="/assets/images/why-choose-us/why-choose2.svg" alt='why choose us' width={30} height={30} />
                        </div>
                        <div className='col-span-10'>
                            <p className='text-text6 text-wrap'>
                                Everything you need to know, all upfront. View salary, stock options, and more before applying.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12  gap-8'>
                        <div className='col-span-2 w-[50px] h-[50px] rounded-full flex items-center justify-center'
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                            <Image src="/assets/images/why-choose-us/why-choose3.svg" alt='why choose us' width={30} height={30} />
                        </div>
                        <div className='col-span-10'>
                            <p className='text-text6 text-wrap'>
                                Say goodbye to cover letters - your profile is all you need. One click to apply and you{"'"}re done.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-8'>
                        <div className='col-span-2 w-[50px] h-[50px] rounded-full flex items-center justify-center'
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                            <Image src="/assets/images/why-choose-us/why-choose4.svg" alt='why choose us' width={30} height={30} />
                        </div>
                        <div className='col-span-10'>
                            <p className='text-text6 text-wrap'>
                                Unique jobs at startups and tech companies you can{"’"}t find anywhere else.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <Button
                            text='Learn more'
                            variant='primary'

                        />
                        <Button
                            text='Sign up'
                            variant='secondary'

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyRecruitersLoveUs