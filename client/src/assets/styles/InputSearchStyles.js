import styled from 'styled-components';

export const InputSearchContainer = styled.div`
    width: 50%;
    margin: 5px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    box-shadow: 0 4px 6px -6px #fff;
    border-radius: 10px;
    border: 1px solid #fff;
    transition: all 0.3s ease-in;

    @media (max-width: 768px) {
        width: 100%;
    }
`;


export const InputSearchComponents = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: transparent;
    color: #fff;
    font-size: 1.2rem;

    &::placeholder {
        color: #fff;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    }
`;
