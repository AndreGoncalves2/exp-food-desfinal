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
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

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

    @media(min-width: 768px) {
        height: 60.5rem;
        
        width: 40rem;
        gap: 4rem;

        padding: 3rem;

        .heart {
            svg {
                width: 2.8rem;
                height: 2.8rem;
            }
        }

        img {
            width: 22rem;
            height: 22rem;

            cursor: pointer;
        }

        .dish-Name {
            font-size: 3.4rem;
            white-space: nowrap;
            font-weight: 700;
            width: inherit;
        }

        .description {
            display: initial;
            line-height: 160%;
            
            font-family: Roboto, sans-serif;
            font-size: 1.75rem;
            height: 5.5rem;
            overflow: hidden;

            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        .price {
            font-size: 4rem;
        }

        .card-controls {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            font-size: 3rem;

            .button {
                line-height: 1.5rem;
                padding: 1.5rem 2rem;
                font-size: 1.8rem;
            }

        }
    }
`;