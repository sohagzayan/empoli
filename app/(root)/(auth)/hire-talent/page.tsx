import RegisterForm from '@/components/containers/auth-page/RegisterFormForCandidate'
import RegisterFormForRecruiter from '@/components/containers/auth-page/RegisterFormForRecruiter'
import Header from '@/components/shared/Nav/Header'
import Footer from '@/components/shared/footer/Footer'
import PageTitleAndLocation from '@/components/shared/page-title-and-location/PageTitleAndLocation'
import React from 'react'

const HireTalent = () => {
    return (
        <div>
            <div className='bg-bread_crump-banners bg-no-repeat bg-cover bg-center h-[350px] relative after:bg-banner_overlay_shape after:absolute after:-bottom-1 after:bg-center after:bg-cover  after:left-0 after:w-full after:h-[200px] after:bg-no-repeat'>
                <Header variant="secondary" />
                {/* <PageTitleAndLocation /> */}
                <div className='flex justify-center items-center mt-10'>
                    <h2 className='text-[50px] text-white font-bold leading-snug  tracking-wide mb-2'>Register As Recruiter</h2>
                </div>
            </div>
            <RegisterFormForRecruiter />
            <Footer />
        </div>

    )
}

export default HireTalent