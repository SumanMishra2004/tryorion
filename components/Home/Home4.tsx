import React from 'react'

function Home4() {
    return (
        <div className='flex items-center justify-around md:flex-row-reverse flex-col h-fit w-full mt-11'>
            <img src='/fsjbf.png' className='md:w-auto md:h-full w-full h-auto ' />
            <div className='md:w-[50%] lg:w-[30%] h-full flex flex-col items-center justify-center gap-9 border border-yellow-500 rounded-lg'>
                <span className='w-full h-auto text-3xl text-blue-900 font-bold lg:px-6 text-center border-2 border-yellow-500 py-8 rounded-xl'>
                    Traditional Ways of Studying,<span className='text-blue-600'> Quite Frustrating</span>
                </span>
                <span className='w-full h-auto text-lg text-black font-normal lg:px-6 text-start'>
                    <span className='text-xl text-black font-medium'>
                        Challenges of Traditional Studying
                        </span><br/>
                   1. Monotony: Repetitive and unengaging study methods can lead to boredom.<br/>
                   2. Passive Learning: Methods like rote memorization often lead to shallow understanding.<br/>
                   3. Limited Interaction: Studying alone can limit discussion and different perspectives.<br/>
                   4. Time Management: It can be difficult to balance study time with other responsibilities.<br/>
                   5. Lack of Resources: Sometimes traditional methods do not provide enough variety in materials and perspectives.
                </span>
            </div>
        </div>
    )
}

export default Home4