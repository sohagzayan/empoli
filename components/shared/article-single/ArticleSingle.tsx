import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

interface CommentType {
  user: string;
  comment: string;
}

interface StoryType {
  data: {
    title: string;
    date_published: string;
    author: string;
    category: string;
    tags: string[];
    content: string;
    featured_image: string;
    share_count: number;
    comments: CommentType[];
  };
}

export const Story = ({ data }: StoryType) => {
  return (
    <div className="shadow-shadow1 rounded-[15px] bg-white">
      <div>
        <div>
          <Image
            src={`/assets/images/${data.featured_image}`}
            alt="blog"
            style={{ width: '100%', height: '100%' }}
            width={0}
            height={0}
            sizes="100wv"
            className="rounded-[15px]"
          />
        </div>
        <div className="px-[30px] py-[20px] text-center">
          <h3 className="py-2 text-[20px] font-semibold text-purple">
            {data.title}
          </h3>
          <p className="text-light py-2 text-[15px] text-purple">
            {data.content.slice(1, 100)}
          </p>
          <div className="py-2 text-center">
            <Button className="text-primary bg-transparent font-bold uppercase hover:bg-transparent hover:underline">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
