import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    .desktop-header {
        display: none;
    }
    
    .button-text {
        margin: 1rem 2rem 0;
    }

    > h1 {
        margin: 2rem 0 2rem 2.2rem;
        font-family: Poppins, sans-serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    
    @media (min-width: 600px) {
        > .button-text {
            margin: 2rem 8vw 0;
            font-size: 1.5rem;
        }

        h1 {
            margin-inline: 8vw;
        }
        
        .mobile-header {
            display: none;
        }

        .desktop-header {
            display: initial;
        }
    }
`;

export const FavContainer = styled.main`
    overflow: auto;
    max-height: 50vh;

    padding-left: 2.2rem;
    /* display: flex; */
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 600px) {
        padding-inline: 8vw;
        margin-bottom: 10rem;
        display: grid;
        grid-row-gap: 3rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
