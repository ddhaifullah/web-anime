import styled from 'styled-components';

export const HeroContainer = styled.div`
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