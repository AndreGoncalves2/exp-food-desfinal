import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    padding-bottom: 4rem;
    position: relative;
    display: flex;
    flex-direction: column;
    
    
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    > .button-text {
        margin: 1rem 0 0 2.2rem;
        width: fit-content;
        font-size: 1.15rem;
    }

    .desktop-header {
        display: none;
    }

    > h1 {
        margin: 3.5rem 0 2rem 2.2rem;
        font-family: Poppins, sans-serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > h2 {
        margin: 2rem 0 3rem 2.2rem;

        font-family: Poppins;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > button {
        width: 55%;
        margin-left: 35%;
    }

    > footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    @media (min-width: 768px) {
        .desktop-header {
           display: initial;
        }

        .mobile-header {
            display: none;
        }

        > .button-text {
            font-size: 1.5rem;
            margin: 2rem 12vw 0;
        }

        h1, > h2 {
            margin-inline: 12vw;
        }

        h1 {
            margin-bottom: 4rem;
        }

        > .button-finish {
            width: 20%;
            margin: 0 12vw;
            align-self: flex-end;
        }

    }
    
`;

export const OrderContainer = styled.main`
    padding-inline: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .order-container {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        font-family: Poppins;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .empty-container {
        h2 {
            font-size: 1.6rem;
        }
    }

    @media (min-width: 600px) {
        padding: 0 12vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 3rem;
        margin-bottom: 3rem;

        .empty-container {
            h2 {
                font-size: 2rem;
            }
        }

        > div {
            justify-content: initial;
            gap: 2rem;
        }
    }
`
