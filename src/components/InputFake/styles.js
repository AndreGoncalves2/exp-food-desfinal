import styled from 'styled-components';

export const Container = styled.div`

    h4 {
        font-family: Roboto, sans-serif;
        font-size: 1rem;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    `;

export const Wrapper = styled.div`
    width: 100%;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    gap: 1rem;
    

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
`;