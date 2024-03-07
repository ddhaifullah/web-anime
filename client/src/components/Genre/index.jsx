import React, { useState, useEffect } from 'react';
import { fetchGenres } from '../../services/AnimeAPI';
import { StyledGenres, GenreContainer, GenreItem, GenreTitle } from '../../assets/styles/GenresStyle';
import Loading from '../utils/Loading';

const Genre = () => {
    const [genres, setGenres] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const genresResponse = await fetchGenres();
            setGenres(genresResponse.data);
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
        {loading ? (
            <Loading />
        ) : (
            <StyledGenres>
                <GenreContainer>
                    {genres && genres.map((genre, index) => (
                    <GenreItem key={index}>
                        <GenreTitle>{genre.name}</GenreTitle>
                    </GenreItem>
                    ))}
                </GenreContainer>
            </StyledGenres>
        )}
        </>
    );
};

export default Genre;
