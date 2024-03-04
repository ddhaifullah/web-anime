import React, { useEffect } from 'react'
import { HeroContainer } from '../../../assets/styles/HeroStyles'
import HeroLeft from './HeroLeft';
import { HeroRight } from './HeroRight';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroRight />
            <HeroLeft />
        </HeroContainer>
    )
}

export default Hero