import React, {useCallback, useMemo} from 'react'
import axios from 'axios'

import UseCurrentUser from 'hooks/useCurrentUser'
import useFavoriteList from 'hooks/useFavorites'

interface FavoriteButtonProps{
    movieId: string;
}

const FavoriteButton:React.FC<FavoriteButtonProps> = ({movieId}) => {
    const {mutate: mutateFavorites} = useFavoriteList();
    const { data: currentUser, mutate} = UseCurrentUser();

    const isFavorite = useMemo(()=>{
        const list = currentUser?.favoriteIds || [];
        return list.includes(movieId);
    },[currentUser, movieId])

    const toggleFavorites = useCallback(async () => {
        let response 
        if(isFavorite){
            response = await axios.delete('/api/favorite', {data:{movieId}})
        }else{
            response = await axios.post('/api/favorite', {movieId})
        }
        const updatedFavoriteIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds
        });

        mutateFavorites()

    }, [movieId, isFavorite, currentUser, mutate, mutateFavorites])

    return(
        <div onClick={toggleFavorites} className='cursor-pointer group/item w-6 aspect-square lg:w-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
            {/* plus icon */}
            {!isFavorite ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            }

        </div>
    )
}

export default FavoriteButton