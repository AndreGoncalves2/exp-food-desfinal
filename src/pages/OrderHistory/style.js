import { styled } from "styled-components";

export const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    > .button-text {
        margin-left: 2.2rem;
        align-self: flex-start;
        margin-bottom: 1rem;

        font-size: 1.5rem;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > h1 {
        margin-inline: 2.20rem;

        margin-top: 2rem;        font-family: Poppins, sans-serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    } 
`;

export const AdmOrderCard = styled.div`
    /* max-width: 30rem; */
    margin-inline: 2.20rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem;
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;

    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.5rem;
   
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const UserOrderCard = styled.div`
    /* max-width: 30rem; */
    margin-inline: 2.20rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem;
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;

    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.5rem;
   
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

