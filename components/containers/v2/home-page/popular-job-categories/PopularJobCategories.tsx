import CategoriesCart from '@/components/shared/categories-cart/CategoriesCart'
import { popular_job_categories_data } from '@/utils/data'
import React from 'react'

const PopularJobCategories = () => {
    return (
        <div className='container lg:px-16 xl:px-20 mt-10'>
            <div>
                <div className='text-center'>
                    <h2 className='primary-section-title'>Popular <span className='text-primary'>Job</span> Categories</h2>
                    <p className='p-details'>2020 jobs live - 293 added today.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {popular_job_categories_data.map((cate, i) => <CategoriesCart key={cate.icon + i} data={cate} />)}
                </div>
            </div>
        </div>
    )
}

export default PopularJobCategories