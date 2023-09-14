import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    height: 18.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    
    padding: 1.5rem;
    width: 13rem;

    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300 };
    
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
    
    .description {
        display: none;
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

    @media(min-width: 600px) {
        height: initial;
        
        width: 19rem;
        gap: .95rem;

        .heart {
            width: 1.5rem;
            height: 1.375rem;
        }

        img {
            width: 11rem;
            height: 11rem;
        }

        .dish-Name {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .description {
            display: initial;
            line-height: 160%;
            
            font-family: Roboto;
            font-size: 0.875rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        .price {
            font-size: 2rem;
        }

        .card-controls {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;

            .button {
                line-height: 1.5rem;
                padding: 0.75rem 1.5rem;
            }

        }
    }
`;