import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    img {
        height: 6.25rem;
        width: 6.25rem;

        border-radius: 50%;
    }

    h2 {
        font-family: Poppins;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;

        line-height: 100%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    button {
        font-family: Roboto, sans-serif;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.RED_200};
    }
`;