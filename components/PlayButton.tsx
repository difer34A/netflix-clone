import React from 'react'
import { useRouter } from 'next/router';

interface PlayButtonProps{
    movieId: string;
}

const PlayButton:React.FC<PlayButtonProps> = ({movieId}) => {
    const router = useRouter();
    return (
        <button onClick={()=> router.push(`/watch/${movieId}`)}
        className='bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black fill-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            Play
        </button>
    )
}


export default PlayButton
