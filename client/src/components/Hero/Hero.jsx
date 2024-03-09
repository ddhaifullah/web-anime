import React, { useState, useEffect } from 'react';
import { fetchAnimeData } from '../../services/AnimeAPI';
import {
    CardContainer,
    CardImage,
    CardTitle,
    HeroContainer,
    LinkUnderline
} from '../../assets/styles/HeroStyles';
import { TitleGlobal } from '../../assets/styles/GlobalStyle';
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
            <TitleGlobal>Ongoing Anime</TitleGlobal>
            {loading ? (<Loading />) :
                (animeData && animeData.data && animeData.data.ongoing_anime && (
                    <HeroContainer>
                            {animeData.data.ongoing_anime.map((anime, index) => (
                                <CardContainer key={index}>
                                    <LinkUnderline href={`/anime/${anime.slug}`}>
                                            <CardImage src={anime.poster} alt={anime.title} />
                                            <CardTitle>{anime.title}</CardTitle>
                                    </LinkUnderline>
                                </CardContainer>
                            ))}
                        </HeroContainer>
                )
            )}
        </>
    );
}

export default Hero;
