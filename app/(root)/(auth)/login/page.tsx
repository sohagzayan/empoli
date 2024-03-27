
import LoginForm from '@/components/containers/auth-page/LoginForm';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const Login = () => {


    return (

        <div className=''>

            <div className=''>
                <div className='bg-bread_crump-banners bg-no-repeat bg-cover bg-center h-[500px] relative after:bg-banner_overlay_shape after:absolute after:-bottom-1 after:bg-center after:bg-cover  after:left-0 after:w-full after:h-[200px] after:bg-no-repeat'>
                    <div className='flex items-center justify-between container lg:px-16 xl:px-20 '>
                        <div className=''>
                            <Link href="/" className='font-semibold text-white flex items-center gap-2 '><ArrowLeft size={15} />Back</Link>
                        </div>
                        <div className=' '>
                            <Image src="/assets/images/footer_logo.png" alt='logo' width={150} height={150} />
                        </div>
                    </div>
                </div>
                <div className='transform -mt-96 py-5'>
                    <LoginForm />
                </div>

            </div>
        </div>
    )
}

export default Login