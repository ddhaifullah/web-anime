import styled from 'styled-components';

export const StyledGenres = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

export const GenreContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const GenreItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 10px;
    width: calc(50% - 20px); /* 50% width with gap */
    background-color: transparent;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 100%; /* Full width on smaller screens */
    }
`;

export const GenreTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
`;
