import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    // align-items: center;
    color: #fff;
    text-align: center;
    position: relative;
    z-index: 1;
    padding: 20px;
`;

// Hero Right (title only)
export const HeroRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 30%;
    margin-right: 20px;
    padding: 0 15px;
    z-index: 1;
    border: 1px solid #fff;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
`;

export const AnimeTitleBox = styled.div`
    background-color: transparent;
    padding: 15px;
    border-radius: 10px;
    text-align: left;
    margin-top: 20px;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 300px;

    @media (min-width: 768px) {
        margin: 20px auto;
    }
`;

// Hero Left (poster and title)
export const HeroLeftContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    padding: 0 15px;
    z-index: 1;
`;

export const AnimeCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #fff;
    margin-left: 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.1);
`;

export const ImageAnimeLeftCard = styled.div`
    flex: 0 0 calc(33.3333% - 2px);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        max-width: 100%; /* Add maximum width to prevent images from being too large */
        height: auto;
        display: block;
        border-bottom: 1px solid #fff;
        border-radius: 10px;
        margin: 10px
    }

    h3 {
        padding: 10px;
        margin: 0;
        font-size: 1rem;
        text-align: center;
    }

    &:not(:last-child) {
        margin-right: 2px;
    }

    @media (max-width: 768px) {
        flex: 0 0 100%;
    }
`;