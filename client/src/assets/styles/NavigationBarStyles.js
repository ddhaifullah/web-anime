import styled from 'styled-components';

export const StyledNavBar = styled.nav`
    width: 90%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    box-shadow: 0 4px 6px -6px #fff;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #fff;
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
    transition: all 0.3s ease-in;
    align-items: center;

    @media (max-width: 768px) {
        display: ${({ showNavLinks }) => (showNavLinks ? 'flex' : 'none')};
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        position: absolute;
        top: 71px;
        left: 0;
        background-color: transparent;
        padding: 10px;
        border-radius: 0 0 10px 10px;
        border-radius: 10px;
        border: 1px solid #fff;
    }

    @media (min-width: 769px) {
        display: flex;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        margin: 0 15px;

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
