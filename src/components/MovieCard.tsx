import React from 'react'

interface MovieCardProps{
    data: Record <string, any>;
}

const MovieCard:React.FC<MovieCardProps> = ({data}) => {
    return (
        <div className='group bg-zinc-900 col-span relative h-[12vh]'>
            <img src={data.thumbnailUrl} alt="Thumbnail" className='cursor-pointer transition object-cover duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vh] lg:h-44 object-center'/>
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vh] group-hover:translate-x-[2vh] group-hover:opacity-100">
                <img src={data.thumbnailUrl} alt="thumbnail" className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vh] lg:h-44' />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">

                    <div className="flex flex-row items-center gap-3">
                        <div onClick={()=>{}} className="cursor-pointer w-6 aspect-square lg:w-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black fill-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>

                        </div>
                    </div>

                <p className='text-green-400 font-semibold mt-4'>
                    New <span className='text-white'>2023</span>
                </p>
                <div className="flex mt-4 gap-4 items-center">
                    <p className='text-white text-[10px] lg:text-sm'>{data.duration}</p>
                    <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
                </div>

                </div>
            </div>
        </div>
    )
}


export default MovieCard
