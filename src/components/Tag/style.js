import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    font-family: Poppins;
    font-size: 0.9rem;

    font-weight: 500;
    line-height: 1.5rem;

    padding: 0.25rem 0.5rem;
    border-radius: 0.3rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;