import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'


interface CommentType {
    user: string,
    comment: string,
}

interface StoryType {
    data: {
        title: string,
        date_published: string,
        author: string,
        category: string,
        tags: string[],
        content: string,
        featured_image: string,
        share_count: number,
        comments: CommentType[]
    }
}



export const Story = ({ data }: StoryType) => {
    return (
        <div className='bg-white shadow-shadow1 rounded-[15px]'>
            <div>
                <div>
                    <Image src={`/assets/images/${data.featured_image}`} alt="blog" style={{ width: "100%", height: "100%" }} width={0} height={0} sizes='100wv' className='rounded-[15px]' />
                </div>
                <div className='px-[30px] py-[20px] text-center'>
                    <h3 className='text-[20px] text-purple font-semibold py-2'>{data.title}</h3>
                    <p className='text-purple text-light text-[15px] py-2'>{data.content.slice(1, 100)}</p>
                    <div className='text-center py-2'>
                        <Button className='bg-transparent text-primary uppercase font-bold hover:underline hover:bg-transparent'>Read more</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
