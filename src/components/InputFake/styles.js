import styled from 'styled-components';

export const Container = styled.div`
    h4 {
        font-family: Roboto, sans-serif;
        font-size: 1.6rem;
        font-weight: 400;

        margin-bottom: 1rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    `;

export const Wrapper = styled.div`
    width: 100%;


    border-radius: 0.5rem;
    padding: 0.5rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    gap: 1rem;


    background-color: ${({ theme }) => theme.COLORS.DARK_800};
`;