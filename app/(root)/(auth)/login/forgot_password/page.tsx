
import LoginForm from '@/components/containers/auth-page/LoginForm';
import Header from '@/components/shared/Nav/Header';
import Footer from '@/components/shared/footer/Footer';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const ForgotPassword = () => {
    return (
        <div>
            <Header variant="primary" />
            <div className='w-[400px] mx-auto lg:py-20 py-10'>
                <div className='text-center'>
                    <h3 className='text-[20px] font-medium text-purple'>Forgot Password</h3>
                    <div className='flex items-center  text-purple gap-4 mt-2'>
                        <span>You are</span>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="student" />
                            <label
                                htmlFor="student"
                                className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Student/Tnp head
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="employer" />
                            <label
                                htmlFor="employer"
                                className="text-sm font-light    leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Employer
                            </label>
                        </div>
                    </div>
                    <p className='text-left text-[14px] font-light text-purple my-2'>Please enter your e-mail address. You will receive an e-mail along with a link which can be used to reset your password.</p>
                    <div className='text-left'>
                        <label htmlFor="email" className='mb-1'>Email</label>
                        <Input type="email" placeholder="Your Email" />
                    </div>
                    <Button className='w-full mt-4'>Submit</Button>
                    <p className='text-[14px] my-2'>I am not receiving password reset email. Need <Link href="/g" className='text-primary '>help?</Link></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ForgotPassword