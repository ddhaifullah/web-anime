import React, { useState,useEffect } from 'react'
import fetchAnimeData from '../../../services/AnimeAPI'
import {
    AnimeCard,
    HeroLeftContainer,
    ImageAnimeLeftCard,
} from '../../../assets/styles/HeroStyles'


const HeroLeft = () => {
    const [animeData, setAnimeData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await fetchAnimeData();
            console.log(data);
            setAnimeData(data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();
    }, []);
    return (
        <HeroLeftContainer>
            {animeData && animeData.data && animeData.data.ongoing_anime && (
                <AnimeCard>
                    {animeData.data.ongoing_anime.map((anime, index) => (
                        <ImageAnimeLeftCard key={index}>
                            <img src={anime.poster} alt={anime.title} />
                            <h3>{anime.title}</h3>
                        </ImageAnimeLeftCard>
                    ))}
                </AnimeCard>
            )}
        </HeroLeftContainer>
    )
}

export default HeroLeft
