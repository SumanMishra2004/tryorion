import { Button } from '@nextui-org/button'
import React from 'react'
import Card from '../ui/Card'

function Home6() {
    return (
        <div className="flex items-center justify-around flex-col h-fit w-full mt-11 gap-7 ">
            <div className='text-3xl text-blue-900 font-bold '>Clear<span className='text-blue-700'>
               Access</span>, consectetur adipisicing elit. </div>
                <div className='text-black text-xl md:px-24 px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perspiciatis cupiditate praesentium pariatur 
                    
                </div>
                <Button variant='shadow' className='bg-blue-950 rounded-xl text-xl text-black w-fit px-9 shadow-white shadow-2xl  py-5'>
                    Get Access
                </Button>
                <div className='w-full h-fit flex justify-around flex-col md:flex-row items-center'>
                   <Card/>
                   <Card/>
                </div>
            
        </div>
    )
}

export default Home6