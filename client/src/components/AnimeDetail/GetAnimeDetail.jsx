import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    fetchAnimeDetail
} from '../../services/AnimeAPI';
import Layouts from '../../Layouts';
import {
    AnimeDetailContainer,
    WrapperAnimeDetail,
    TextTitle,
    TextContainer,
    genresMiniCard,
    GenreLink,
    SynopsisContainer,
    fWrapper,
    EpisodeCard,
    EpisodeTitle,
    EpisodeInfo,
    EpisodeNumber,
    EpisodeLink,
    EpisodeContainer

} from '../../assets/styles/AnimeDetail';
import { Star } from 'lucide-react';
import Loading from '../utils/Loading';

const GetAnimeDetail = () => {
    const { slug } = useParams();
    const [animeDetail, setAnimeDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAnimeDetail(slug);
                setAnimeDetail(data);
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
            <AnimeDetailContainer>
                {loading ? (
                    <Loading />
                ) : animeDetail && animeDetail.data ? (
                    <fWrapper>
                        <WrapperAnimeDetail>
                            <img src={animeDetail.data.poster} alt={animeDetail.data.title} />
                            <TextContainer>
                                <TextTitle>Title : {animeDetail.data.japanese_title} - {animeDetail.data.title}</TextTitle>
                                <TextTitle>Rating : <Star color='yellow' size='23' />{animeDetail.data.rating}</TextTitle>
                                <TextTitle>Type : {animeDetail.data.type}</TextTitle>
                                <TextTitle>Status : {animeDetail.data.status}</TextTitle>
                                <TextTitle>Durasi : {animeDetail.data.duration}</TextTitle>
                                <TextTitle>Tanggal Rilis : {animeDetail.data.release_date}</TextTitle>
                                <TextTitle>Studio : {animeDetail.data.studio}</TextTitle>
                                <TextTitle>Jumlah Episode : {animeDetail.data.episode_count}</TextTitle>
                                <genresMiniCard>
                                    <TextTitle>Genres</TextTitle>
                                    {animeDetail.data.genres.map((genre, index) => (
                                        <GenreLink key={index} to={`/genres/${genre.slug}`}>
                                            {genre.name}
                                        </GenreLink>
                                    ))}
                                </genresMiniCard>
                            </TextContainer>
                        </WrapperAnimeDetail>
                        {animeDetail.data.synopsis.trim() !== '' && (
                                <SynopsisContainer>
                                    <TextTitle>Synopsis</TextTitle>
                                    <p>{animeDetail.data.synopsis}</p>
                                </SynopsisContainer>
                        )}
                        <div>
                            {Array.isArray(animeDetail.data.batch) ? (
                                animeDetail.data.batch.map((batch, index) => (
                                    <div key={index}>
                                        <TextTitle>Batch {index + 1}</TextTitle>
                                        <TextTitle>Slug: {batch.slug}</TextTitle>
                                        <TextTitle>Uploaded At: {batch.uploaded_at}</TextTitle>
                                        <TextTitle>Link : <a href={batch.otakudesu_url} target='_blank' rel='noreferrer'>{batch.otakudesu_url}</a></TextTitle>
                                    </div>
                                ))
                            ) : (
                                <p>No batch data available</p>
                            )}
                        </div>
                        <EpisodeCard>
                            {animeDetail.data.episode_lists.map((eps, index) => (
                                <EpisodeContainer key={index}>
                                    <EpisodeTitle>Episode: {index + 1}</EpisodeTitle>
                                    <EpisodeInfo>
                                        <EpisodeNumber>{eps.episode}</EpisodeNumber>
                                        <EpisodeLink href="#" target="_blank" rel="noreferrer">Watch Now</EpisodeLink>
                                    </EpisodeInfo>
                                </EpisodeContainer>
                            ))}
                        </EpisodeCard>

                    </fWrapper>
                ) : (
                    <p>No data available</p>
                )}
            </AnimeDetailContainer>
        </Layouts>
    );
}

export default GetAnimeDetail;
