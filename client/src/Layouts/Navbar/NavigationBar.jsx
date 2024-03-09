import React, { useState } from 'react';
import { StyledNavBar, StyledNavLinks, StyledNavLink, StyledLogo, StyledProfile, StyledHamburgerIcon } from '../../assets/styles/NavigationBarStyles';
import { Link } from 'react-router-dom';
import { TextAlignLeft, X  } from '@phosphor-icons/react';
import InputSearch from '../../components/Search/InputSearch';

const NavigationBar = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };

    return (
        <StyledNavBar>
            <StyledLogo onClick={toggleNavLinks}>
                <h1>Logo</h1>
            </StyledLogo>
            <StyledHamburgerIcon onClick={toggleNavLinks}>
                {showNavLinks ? <X size={32} /> : <TextAlignLeft size={32} />}
            </StyledHamburgerIcon>
            <StyledNavLinks showNavLinks={showNavLinks}>
                <StyledNavLink><Link to="/">Home</Link></StyledNavLink>
                <StyledNavLink><Link to="/release">Jadwal</Link></StyledNavLink>
                <StyledNavLink><Link to="/genre_anime">Genre</Link></StyledNavLink>
                <StyledNavLink><Link to="#">Semua</Link></StyledNavLink>
                <InputSearch />
            </StyledNavLinks>
            <StyledProfile>
                <img src="https://e1.pxfuel.com/desktop-wallpaper/115/697/desktop-wallpaper-anime-profile-anime-girl-profile.jpg" alt="profile" />
            </StyledProfile>
        </StyledNavBar>
    );
}

export default NavigationBar;
