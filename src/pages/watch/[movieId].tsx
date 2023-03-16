import React from "react";

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import {useState, useCallback} from "react"

const Watch = () => {
    const router = useRouter();
    const [moving, setMoving] = useState(false);
    const { movieId } = router.query;

    const {data} = useMovie(movieId as string);

    const toggleMoving = useCallback(() => {
        setMoving((current)=> !current)
    }, [])

    return(
        <div className="h-screen w-screen bg-black">

            <nav className="fixed w-full z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70" onMouseMove={toggleMoving}>
                <div className={`absolute top-6 left-6 flex gap-4 place-items-center lg:gap-12 bg-black bg-opacity-50 p-2 rounded-lg transition duration-1000 z-20`}>
                    <div onClick={()=>router.push("/")} className={"cursor-pointer"}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg> 
                    </div>
                    
                    <p className="text-white text-xl md:text-3xl font-bold">
                        <span className="font-light mr-2">
                            Watching: 
                        </span>
                        {data?.title}
                    </p>
                </div>
                
                <video className="h-screen w-screen"
                    autoPlay controls
                    src={data?.videoUrl}></video>
            </nav>

        </div>
    )
}

export default Watch