import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3rem;

    width: 100%;
    padding: .75rem;
    border: none;
    border-radius: .3rem;

    font-family: Poppins, sans-serif;
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.RED_100 };;

    svg {
        width: 1.3rem;
        height: 1.3rem;
    }
`