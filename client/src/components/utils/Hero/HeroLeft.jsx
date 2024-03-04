import React, { useEffect } from 'react'
import fetchAnimeData from '../../../services/AnimeAPI'
import { HeroLeftContainer } from '../../../assets/styles/HeroStyles'


const HeroLeft = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const animeData = await fetchAnimeData();
                console.log(animeData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    
    return (
        <HeroLeftContainer>
            <img src="https://via.placeholder.com/150" alt="anime" />
        </HeroLeftContainer>
    )
}

export default HeroLeft