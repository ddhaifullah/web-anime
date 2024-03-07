import styled from 'styled-components';

export const StyledNavBar = styled.nav`
    width: 95%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    box-shadow: 0 4px 6px -6px #fff;
    padding: 5px 15px;
    border-radius: 10px;
    border: 1px solid #fff;

    @media (max-width: 768px) {
        width: 80%;

    }
`;

export const StyledLogo = styled.div`
    h1 {
        color: #fff;
        margin: 0;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledNavLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;
    align-items: center;
    overflow: hidden;
    max-height: ${({ showNavLinks }) => (showNavLinks ? '500px' : '100px')};

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        position: absolute;
        top: ${({ showNavLinks }) => (showNavLinks ? '71px' : '71px')};
        left: 30px;
        background-color: #242424;
        padding: 10px;
        border-radius: 0 0 10px 10px;
        border-radius: 10px;
        border: 1px solid #fff;
        z-index: 999;
        opacity: ${({ showNavLinks }) => (showNavLinks ? '1' : '0')};
        transform: translateY(${({ showNavLinks }) => (showNavLinks ? '0' : '-10px')});
    }

    @media (min-width: 769px) {
        display: flex;
        max-height: none;
    }

    a {
        text-decoration: none;
        color: #fff;
        margin: 0 15px;
        font-size: 1.0rem;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const StyledNavLink = styled.li``;

export const StyledProfile = styled.div`
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

export const StyledHamburgerIcon = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
        svg {
        color: #fff;
        font-size: 1.5rem;
        }
    }
`;
