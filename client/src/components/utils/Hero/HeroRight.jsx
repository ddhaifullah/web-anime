import React, { useState,useEffect } from 'react'
import fetchAnimeData from '../../../services/AnimeAPI'
import {
    AnimeTitleBox,
    HeroRightContainer
} from '../../../assets/styles/HeroStyles'


const HeroRight = () => {
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
        <HeroRightContainer>
            {animeData && (
                <AnimeTitleBox>
                {animeData.data.complete_anime.map((anime, index) => (
                    <div key={index}>
                    <strong>Title:</strong> {anime.title}
                    </div>
                ))}
                </AnimeTitleBox>
            )}
        </HeroRightContainer>
    )
}

export default HeroRight