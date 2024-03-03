import React, { useState } from 'react';
import { StyledNavBar, StyledNavLinks, StyledNavLink, StyledLogo, StyledProfile, StyledHamburgerIcon } from '../../assets/styles/NavigationBarStyles';
import { Link } from 'react-router-dom';
import { List } from '@phosphor-icons/react';

const NavigationBar = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };

    return (
        <StyledNavBar>
        <StyledLogo onClick={toggleNavLinks}>
            <h1>Anim</h1>
        </StyledLogo>
        <StyledHamburgerIcon onClick={toggleNavLinks}>
            <List size={32} />
        </StyledHamburgerIcon>
        <StyledNavLinks showNavLinks={showNavLinks}>
            <StyledNavLink><Link to="#">Home</Link></StyledNavLink>
            <StyledNavLink><Link to="#">Anime</Link></StyledNavLink>
            <StyledNavLink><Link to="#">Manga</Link></StyledNavLink>
            <StyledNavLink><Link to="#">Novels</Link></StyledNavLink>
        </StyledNavLinks>
        <StyledProfile>
            <img src="https://via.placeholder.com/150" alt="profile" />
        </StyledProfile>
        </StyledNavBar>
    );
}

export default NavigationBar;
