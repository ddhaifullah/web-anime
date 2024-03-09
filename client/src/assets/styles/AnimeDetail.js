import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const AnimeDetailContainer = styled.div`
    width: screen;
    height: auto;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;


export const WrapperAnimeDetail = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;

    img {
        max-width: 300px;
        border-radius: 8px;
    }
`;

export const fWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    flex-direction: column;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    
`;

export const TextTitle = styled.p`
    margin: 5px 0;
    font-size: 16px;
    color: #fff;
    display: flex;
    gap: 5px;
`;

export const genresMiniCard = styled.div`
    display: flex;
    flex-direction: row;
`;

export const GenreLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    background-color: #333;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;

    &:hover {
        background-color: #555;
    }
`;

export const SynopsisContainer = styled.div`
    width: scree;
    margin-top: 20px;
    padding: 20px;
    border-radius: 8px;
    text-align: justify;

    p {
        font-size: 14px;
        color: #fff;
    }
`;

export const EpisodeCard = styled.div`
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
`;

export const EpisodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
`;

export const EpisodeTitle = styled.h3`
    font-size: 18px;
    color: #fff;
    margin-bottom: 10px;
`;
    
export const EpisodeInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const EpisodeNumber = styled.span`
    font-size: 14px;
    color: #555;
`;

export const EpisodeLink = styled.a`
    text-decoration: none;
    color: #3498db;
    font-size: 14px;
    cursor: pointer;
`;
