import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const ContactUs = () => {
    return (
        <div className='bg-white p-8 my-10 rounded-md'>
            <div>
                <h3 className='text-[18px] text-purple font-medium'>Contact Us</h3>
                <form action="">
                    <div className='flex flex-col gap-5 mt-4'>
                        <Input className='bg-primary-50 text-primary' type="text" placeholder="Your Name" />
                        <Input className='bg-primary-50 text-primary' type="text" placeholder="Email Address" />
                        <Textarea rows={6} cols={5} className='bg-primary-50 text-primary' placeholder="Message" />
                        <Button>Send Message</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs