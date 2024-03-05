import React from 'react'
import { HeroContainer } from '../../../assets/styles/HeroStyles'
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroLeft />
            <HeroRight />
        </HeroContainer>
    )
}

export default Hero