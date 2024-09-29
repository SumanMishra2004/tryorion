import { Button } from '@nextui-org/button'
import React from 'react'

function Home1() {
  return (
    <div className='w-screen h-fit pt-4 flex items-center justify-between flex-col md:flex-row text-black dark:text-white'>
        <div className="h-full md:w-[45%] w-[90%] lg:pl-28 md:pl-12 pl-0  flex flex-col  items-start justify-start ">
            <span className='text-black dark:text-white md:text-4xl text-2xl font-semibold'>The only learning platform that helps you score better marks and support self-growth.</span>
            <span className='text-black dark:text-white text-lg font-medium'>Study with a self-aware adaptive system, understand, remember, and master subjects without worry, and know your academic strengths and weaknesses to truly succeed.</span>
            <div className='flex h-fit w-fit  items-center gap-7 mt-5'>
                <img src='/ButtonStartNow.png' className='size-fit '/>
                <Button variant='bordered' className='rounded-lg px-9 py-6'>Book a demo</Button>
            </div>

        </div>
        <div className="h-full md:w-[40%] overflow-hidden w-screen  max-w-full ">
            <img src='/Dashboard View.png' className='scale-150 pl-7 md:pl-0'/>
        </div>
    </div>
  )
}

export default Home1