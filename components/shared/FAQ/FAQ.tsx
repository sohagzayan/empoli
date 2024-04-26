import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const FAQ = () => {
    return (
        <div className='container lg:px-16 xl:px-20 '>
            <div>
                <div className='text-center'>
                    <h2 className='primary-section-title'> <span className='text-primary'>FAQ</span> - Frequently Asked Questions

                    </h2>
                    <p className='p-details'>Lorem Ipsum is simply dummy text of the printing and typese tting
                    </p>

                </div>
                <div className='py-10'>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem className='mb-5 bg-white  rounded-[10px]' value="item-1">
                            <AccordionTrigger className=' p-5 text-[20px]  capitalize font-bold text-purple '>How can i pay ? </AccordionTrigger>
                            <AccordionContent className='p-5 text-light text-purple  '>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.

                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='mb-5 bg-white  rounded-[10px]' value="item-2">
                            <AccordionTrigger className=' p-5 text-[20px]  capitalize font-bold text-purple'>How to setup account ?</AccordionTrigger>
                            <AccordionContent className='p-5 text-light text-purple  '>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.


                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='mb-5 bg-white rounded-[10px]' value="item-3">
                            <AccordionTrigger className='white p-5 text-[20px]  capitalize font-bold text-purple'>What is process to get refund ?</AccordionTrigger>
                            <AccordionContent className='p-5 text-light text-purple'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.


                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='mb-5 bg-white rounded-[10px]' value="item-4" >
                            <AccordionTrigger className=' p-5 text-[20px] capitalize font-bold text-purple'> What is process to get refund ?</AccordionTrigger>
                            <AccordionContent className='p-5 text-light text-purple  '>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.


                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FAQ