import Navbar from "@/components/navbar";

import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import UseCurrentUser from "hooks/useCurrentUser";
import Billboard from "@/components/billboard";
import MovieList from "@/components/MovieList";
import useMovieList from './../../hooks/useMovieList';
import useFavoriteList from "hooks/useFavorites";
import InfoModal from "@/components/infoModal";
import useInfoModalStore  from '@/hooks/useInfoModal';

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);
    if(!session){
        return{
            redirect:{
                destination: "https://xcmd.nl/auth",
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}

export default function Home() {
    const { data: user } = UseCurrentUser();
    const { data: movies = [] } = useMovieList();
    const {data: favorites = []} = useFavoriteList();
    const { isOpen, closeModal } = useInfoModalStore(); 

    return (
        <>
            <InfoModal visible={isOpen} onClose={()=>closeModal}/>
            <Navbar/>
            <Billboard/>
            <div className="pb-40">
                <MovieList title="Trending Now" data={movies}/>
                <MovieList title="My List" data={favorites}/>
            </div>
        </>
    )
}
