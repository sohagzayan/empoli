
const SuccessHighlights = () => {
    return (
        <div className='mt-10 container px-4 lg:px-16 xl:px-20 mx-auto '>
            <div className='mt-32'>
                <h2 className='text-center text-white text-3xl font-bold'>Where startups and job seekers connect</h2>
                <div className=' flex-col md:flex-row  lg:flex-row mt-6 flex items-center justify-center gap-5'>
                    <button className='bg-theme1 border-2 border-transparent hover:bg-transparent hover:border-theme1 text-white px-6 rounded-md font-600 transition-all ease-in-out duration-300 py-3'>Find your next hire</button>
                    <button className='bg-transparent border-2 border-theme2 hover:bg-theme1 hover:border-theme1 text-white px-6 rounded-md font-600 transition-all ease-in-out duration-300 py-3 '>Find your next job</button>
                </div>
            </div>
        </div>
    )
}

export default SuccessHighlights