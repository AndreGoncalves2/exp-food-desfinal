import styled from 'styled-components';

export const Container = styled.header`
    padding: 3.5rem 1.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    button {
        background: transparent;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        > svg{
            width: 2rem;
            height: 2rem;
        }
    }

    h1 {
        font-size: 1.3rem;
    }

    img {
        width: 1.5rem;
    }

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;
