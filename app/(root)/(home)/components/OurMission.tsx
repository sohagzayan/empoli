import ImpactfulNumbers from './ImpactfulNumbers'

const OurMission = () => {
    return (
        <div className='w-[95%]  md:w-[600px] lg:w-[700px] mx-6 lg:mx-auto'>
            <div className='flex justify-center text-wrap my-10'>
                <div>
                    <h3 className='text-theme1 font-500 mb-2'>Our Mission</h3>
                    <p className='font-500 text-white'>At JobJoy, we{"’"}re passionate about bringing joy to your job search experience. Our platform offers unique career opportunities that are tailored just for you—transparent, accessible, and empowering. Like a valuable asset, you have full control over your career path—explore, apply, and thrive with ease, all while finding opportunities that truly match your potential.</p>
                </div>
            </div>
            <div className='relative'>
                <span
                    className="absolute left-[70%] top-0 w-[1px] h-[250px] bg-white"
                    style={{
                        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 51.04%, rgba(255, 255, 255, 0) 100%)',
                    }}
                ></span>
                <span
                    className="absolute left-[30%] top-0 w-[1px] h-[200px] bg-white"
                    style={{
                        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 51.04%, rgba(255, 255, 255, 0) 100%)',
                    }}
                ></span>

                <span
                    className="absolute left-0 top-[34%] w-full h-[1px] bg-white"
                    style={{
                        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 51.04%, rgba(255, 255, 255, 0) 100%)',
                    }}
                ></span>

                <div className='flex justify-between w-full'>
                    <div className='grid grid-cols-3 gap-10 w-full'>
                        <ImpactfulNumbers
                            image='/assets/images/mission/counter-1.png'
                            count={"930"}
                            name='Since Launching'
                            className='flex items-start pb-[30px] mb-[30px] gap-2'
                        />
                        <ImpactfulNumbers
                            image='/assets/images/mission/counter-2.png'
                            count={"0M+"}
                            name='Total User'
                            className='flex items-start pb-[30px] mb-[30px] gap-2 justify-center'
                        />
                        <ImpactfulNumbers
                            image='/assets/images/mission/counter-3.png'
                            count={"24+"}
                            name='Total Employees'
                            className='flex items-start pb-[30px] mb-[30px] gap-2 !justify-end'

                        />
                        <ImpactfulNumbers
                            image='/assets/images/mission/counter-4.png'
                            count={"0M+"}
                            name='Total Collections'
                            className='flex items-start pb-[30px] mb-[30px] gap-2'

                        />
                        <ImpactfulNumbers
                            image='/assets/images/mission/counter-5.png'
                            count={"0k+"}
                            name='NFT Created'
                            className='flex items-start pb-[30px] mb-[30px] gap-2 justify-center'

                        />
                        <ImpactfulNumbers
                            image='/assets/images/mission/counter-6.png'
                            count={"$0B+"}
                            name='Trading Volume'
                            className='flex items-start pb-[30px] mb-[30px] gap-2 justify-end'

                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurMission