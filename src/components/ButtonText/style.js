import styled from 'styled-components';

export const Container = styled.button`
    background: transparent;
    border: none;

    font-family: Poppins;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`