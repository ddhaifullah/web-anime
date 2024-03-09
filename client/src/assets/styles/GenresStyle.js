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


// Genre Details
export const GenresContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(20% - 32px), 1fr));
    gap: 16px;
    color: #fff;
    text-align: center;
    position: relative;
    z-index: 1;
    padding: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(calc(48% - 32px), 1fr));
    }
`;

export const CardContainer = styled.div`
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const CardImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 8px;
`;

export const CardTitle = styled.h3`
    margin: 0;
    font-size: 12px;
    color: #ff;
`;

export const LinkUnderline = styled.a`
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease;
`;