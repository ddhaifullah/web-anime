import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const LoadingSpinner = styled.div`
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #ff6600;
    width: 40px;
    height: 40px;
    animation: ${spinAnimation} 1s linear infinite;
`;

export const LoadingText = styled.div`
    margin-left: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
`;
