import React from 'react'
import useBillboard from './../../hooks/useBillboard';

export default function Billboard() {
    const {data} = useBillboard();

    return (
        <div className='relative h-[56.25vw]'>
            <video src={data?.videoUrl} poster={data?.thumbnailUrl} autoPlay muted loop className='w-full h-[56.25vw] object-cover brightness-[50%]'></video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className='text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
                    {data?.title}
                </p>
                <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
                    {data?.description}
                </p>
                <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
                    
                    <button className='bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        More Info
                    </button>

                </div>
            </div>
        </div>
    )
}
