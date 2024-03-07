import React, { useState, useEffect } from 'react';
import { fetchAnimeData } from '../../services/AnimeAPI';
import {
    CardContainer,
    CardImage,
    CardTitle,
    HeroContainer
} from '../../assets/styles/HeroStyles';
import Loading from '../utils/Loading';

const Hero = () => {
    const [animeData, setAnimeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAnimeData();
                setAnimeData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    
    return (
        <HeroContainer>
            {loading ? (
                <Loading />
            ) : (
                animeData && animeData.data && animeData.data.ongoing_anime && (
                    <>
                    {animeData.data.ongoing_anime.map((anime, index) => (
                        <CardContainer key={index}>
                            <CardImage src={anime.poster} alt={anime.title} />
                            <CardTitle>{anime.title}</CardTitle>
                        </CardContainer>
                    ))}
                    </>
                )
            )}
        </HeroContainer>
    );
}

export default Hero;
