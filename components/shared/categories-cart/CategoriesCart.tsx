import React from 'react'

interface CategoriesType {
    data: {
        icon: string,
        categories: string,
        open_positions: string,

    }
}

const CategoriesCart = ({ data }: CategoriesType) => {
    return (
        <div className='border p-[20px] rounded-[10px]'>
            <div className='flex items-center gap-5'>
                <div className='bg-[#ecedf2] hover:bg-primary group transition-all duration-300 ease-in-out w-[60px] h-[60px] flex items-center justify-center rounded-[10px] cursor-pointer'>
                    <i className={`${data.icon} text-[35px] text-primary group-hover:text-white`}></i>
                </div>
                <div>
                    <h3 className='text-purple font-bold mb-1'>{data.categories}</h3>
                    <p className='text-purple text-[14px] font-light'>({data.open_positions} open positions)</p>
                </div>
            </div>
        </div>
    )
}

export default CategoriesCart