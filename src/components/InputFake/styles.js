import styled from 'styled-components';

export const Container = styled.div`

    h4 {
        font-family: Roboto, sans-serif;
        font-size: 1rem;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
`;

export const Wrapper = styled.div`

`;