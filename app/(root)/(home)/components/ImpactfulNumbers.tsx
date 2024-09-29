import Image from 'next/image'
import React from 'react'



interface ImpactfulNumbersType {
    image: string,
    count: string,
    name: string,
    className: string
}

const ImpactfulNumbers = ({ image, count, name, className }: ImpactfulNumbersType) => {
    return (

        <div className={className}>
            <div className="">
                <Image
                    src={image}
                    alt="our mission"
                    className=''
                    width={50}
                    height={50}
                />
            </div>
            <div>
                <h2 className='text-white text-2xl font-700'>
                    <span>{count}</span>
                </h2>
                <p className='text-text6'>{name}</p>
            </div>
        </div>
    )
}

export default ImpactfulNumbers