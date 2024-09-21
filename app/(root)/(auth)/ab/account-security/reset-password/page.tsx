
"use client"
import { Button } from '@/components/common';
import Footer from '@/components/shared/footer/Footer';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const ResetPassword = () => {
    const router = useRouter()
    return (
        <div className='bg-themeDark pt-10'>
            <div className='w-[90%]  md:w-[500px] lg:w-[600px] bg-[rgba(255,255,255,0.03)] p-6  border border-[rgba(255,255,255,0.08)] mx-auto rounded-[30px]'>
                <div className='text-center'>
                    <div className='flex items-center  justify-center mb-3'>
                        <Image src={"/assets/icons/email.png"} width={100} height={50} alt='email' />
                    </div>
                    <h3 className='text-[20px]  text-white font-600'>Forgot Password</h3>
                    <p className='text-center text-[14px] font-light text-text6 my-2'>Please enter your e-mail address. You will receive an e-mail along with a link which can be used to reset your password.</p>
                    <div className='text-left'>
                        <label htmlFor="email" className='mb-1 text-white font-600 bg-'>Email</label>
                        <Input
                            type="email"
                            placeholder="Your Email"
                            className="p-2 no-ring-shadow border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.1)]  text-white focus:border-transparent focus:ring-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className='flex items-center gap-2 justify-end'>
                        <Button onClick={() => router.back()} className=' mt-4 bg-theme1 text-white font-600' text='Cancel' />
                        <Button variant='secondary' className=' mt-4 bg-theme1 text-white font-600' text='Reset Password' />

                    </div>
                    <p className='text-[14px] my-2 text-text6'>I am not receiving password reset email. Need <Link href="/g" className='text-primary '>help?</Link></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ResetPassword