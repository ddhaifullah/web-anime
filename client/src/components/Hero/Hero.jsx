import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAnimeData } from '../../services/AnimeAPI';
import {
    CardContainer,
    CardImage,
    CardTitle,
    HeroContainer,
    LinkUnderline
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
        <>
            {loading ? (<Loading />) :
                (animeData && animeData.data && animeData.data.ongoing_anime && (
                    <HeroContainer>
                            {animeData.data.ongoing_anime.map((anime, index) => (
                                <LinkUnderline key={index} href={`/anime/${anime.slug}`}>
                                    <CardContainer>
                                        <CardImage src={anime.poster} alt={anime.title} />
                                        <CardTitle>{anime.title}</CardTitle>
                                    </CardContainer>
                                </LinkUnderline>
                            ))}
                        </HeroContainer>
                )
            )}
        </>
    );
}

export default Hero;
