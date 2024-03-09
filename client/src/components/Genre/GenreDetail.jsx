// GenreDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGenresDetail } from '../../services/AnimeAPI';
import {
    CardContainer,
    CardImage,
    CardTitle,
    GenresContainer,
    LinkUnderline
} from '../../assets/styles/GenresStyle';
import { TitleGlobal } from '../../assets/styles/GlobalStyle';
import Loading from '../utils/Loading';
import Layouts from '../../Layouts';

const GenreDetails = () => {
    const { slug } = useParams();
    const [genreDetail, setGenreDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await fetchGenresDetail(slug);
            console.log(data)
            setGenreDetail(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [slug]);

    return (
        <Layouts>
            <TitleGlobal>Genre {slug}</TitleGlobal>
                {loading ? (<Loading />) : genreDetail && genreDetail.data && genreDetail.data.anime ? (
                <GenresContainer>
                    {genreDetail.data.anime.map((genre, index) => (
                        <CardContainer key={index}>
                        <LinkUnderline href={`/anime/${genre.slug}`}>
                            <CardImage src={genre.poster} alt={genre.title} />
                            <CardTitle>{genre.title}</CardTitle>
                        </LinkUnderline>
                        </CardContainer>
                    ))}
                </GenresContainer>
            ) : (
                <p>No ongoing anime data available for this genre.</p>
            )}
        </Layouts>
    );
};

export default GenreDetails;
