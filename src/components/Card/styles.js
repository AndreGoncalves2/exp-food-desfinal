import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    
    padding: 1.5rem;
    width: 13rem;

    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300 };
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_200 };

    .heart {
        position: absolute;
        top: 1rem;
        right: 1rem;

        background: transparent;
        border: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    img {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
    }

    .dish-Name {
        width: 13rem;

        text-align: center;
        font-family: Poppins;
        font-size: 0.875rem;

        font-weight: 500;
        line-height: 1.5rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .price {
        font-family: Roboto, sans-serif;
        font-size: 1rem;

        font-weight: 400;
        line-height: 100%;

        color: ${({ theme }) => theme.COLORS.BLUE_200};
    }

    button {
        margin-top: .25rem;
        line-height: .6rem;
    }
`;