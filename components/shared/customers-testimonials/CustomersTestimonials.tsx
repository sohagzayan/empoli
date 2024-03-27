import React from 'react'
import ReviewsCarousel from '../reviews-carousel/ReviewsCarousel'

const CustomersTestimonials = () => {
    return (
        <div className='container lg:px-16 xl:px-20 '>
            <div className='py-10'>
                <div className='text-center'>
                    <h2 className='primary-section-title'>What our <span className='text-primary'>customer say</span></h2>
                    <p className='p-details'>Lorem Ipsum is simply dummy text of the printing and typese tting</p>
                    <p className='text-purple'>indus orem Ipsum has beenthe standard dummy.
                    </p>
                </div>
                <div>
                    <ReviewsCarousel />
                </div>
            </div>
        </div>
    )
}

export default CustomersTestimonials