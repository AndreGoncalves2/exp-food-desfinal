import styled from 'styled-components';

export const Container = styled.header`
    display: grid;
    padding: 3.5rem 1.75rem 1.5rem;
    width: 100%;
    grid-template-columns: 1fr auto 1fr;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    button {
        align-self: left;
        background: transparent;
        border: none;
        height: 2rem;
        width: fit-content;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        > svg {
            width: 2rem;
            height: 2rem;
        }
    }

    .menu {
        position: absolute;
        left: 5rem;

        font-family: Roboto;
        font-size: 1.6rem;
        height: 2.2rem;
        
        font-weight: 400;
    }

    h2 {
        font-size: 1.5rem;
    }

    img {
        height: 2rem;
        width: 2rem;
    }

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;
