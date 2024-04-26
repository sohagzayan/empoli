import { Story } from '@/components/shared/article-single/ArticleSingle'
import { story_blog } from '@/utils/data'
import React from 'react'

const ReadLatestStory = () => {
    return (
        <div className='container lg:px-16 xl:px-20 '>
            <div>
                <div className='text-center'>
                    <h2 className='primary-section-title'> <span className='text-primary'>Read</span> latest story
                    </h2>
                    <p className='p-details'>Lorem Ipsum is simply dummy text of the printing and typese tting

                    </p>
                    <p>indus orem Ipsum has beenthe standard dummy.
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-10'>
                    {story_blog.map((blog, index) => <Story key={blog.title + index} data={blog} />)}
                </div>
            </div>
        </div>
    )
}

export default ReadLatestStory