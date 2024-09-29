import React from 'react'

import SwipperCompo from '../ui/SwiperComponents'
import { Button } from '@nextui-org/button'

function Home2() {
    return (
        <div className='flex flex-col items-center justify-center gap-7 w-full h-auto mt-16'>
            <div className='flex flex-col items-center justify-center gap-8 md:w-[85%] w-full h-auto'>
                <div className='h-auto lg:w-[50%] md:w-[70%] w-full flex items-center justify-center flex-col gap-8'>

                    <p className='text-blue-950 font-bold md:text-3xl text-xl'> Are you really <span className='text-blue-700 font-extrabold md:text-4xl text-2xl'>Motivated</span> to study? </p>
                    <p className='md:text-xl text-base font-normal text-black w-full text-center'>Answer these few Questions to know your Motivation Level
                        & Find How You can work on Improving or Maintaining it  </p>
                </div>

                <div className='bg-blue-700 rounded-2xl aspect-square md:aspect-auto w-full md:h-[40rem] flex justify-center items-center flex-col'>
                    <div className='h-[90%] w-[90%] bg-white rounded-3xl flex flex-col gap-7 items-center justify-center'>
                        <span className='w-full text-center md:text-2xl text-blue-700 text-lg '>Question no 1 of 5</span>
                        <span className='w-full text-center md:text-xl text-black text-base '>Do you work hard but still feel disappointed with your grades?</span>
                        <div className='w-fit h-fit flex gap-9'>

                        <Button variant='shadow' className='text-2xl bg-white border border-black shadow-xl shadow-black '>
                            Yes
                        </Button>
                        <Button variant='shadow' className='text-2xl bg-white border border-black shadow-xl shadow-black '>
                            No
                        </Button>
                        </div>

                    </div>
                    <span className='text-xl text-black'>
                    1250 Students Reported  Improvement in their Grades with Orion learning Solutions
                    </span>
                </div>



            </div>
        </div>
    )
}

export default Home2