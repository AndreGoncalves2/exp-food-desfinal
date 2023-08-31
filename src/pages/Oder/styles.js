import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    padding-bottom: 4rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    > .button-text {
        margin: 1rem 0 0 2.2rem;
        width: fit-content;
        font-size: 1.15rem;
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
        margin: 1.12rem 0 3rem 2.2rem;

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
    
`;

export const OrderContainer = styled.main`
    padding-inline: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > div {
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
    `
