import React from 'react';
import { LoadingContainer, LoadingSpinner, LoadingText } from '../../assets/styles/LoadingStyle';

const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>Loading</LoadingText>
        </LoadingContainer>
    );
};

export default Loading;
