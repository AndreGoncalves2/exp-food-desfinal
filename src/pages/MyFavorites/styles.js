import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    .button-text {
        margin: 1rem 2rem 0;
    }

    > h1 {
        margin: 3.5rem 0 2rem 2.2rem;
        font-family: Poppins, sans-serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`;

export const FavContainer = styled.main`
    padding-left: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;
