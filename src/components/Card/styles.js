import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    height: 27.375rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.125rem;
    
    padding: 1.5rem;

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
        width: 8.25rem;
        height: 8.25rem;
        border-radius: 50%;
    }

    .dish-Name {
        width: 17rem;

        text-align: center;
        font-family: Poppins;
        font-size: 1.3125rem;

        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    
    .description {
        display: none;
    }

    .price {
        font-family: Roboto, sans-serif;
        font-size: 1.5rem;

        font-weight: 400;
        line-height: 100%;

        color: ${({ theme }) => theme.COLORS.BLUE_200};
    }

    .card-controls {
        div {
            display: flex;
            width: fit-content;
            margin: auto;
            
            align-items: flex-end;
        }

        width: 100%;
    }

    .button {
        margin-top: 1.3rem;
        line-height: .6rem;

        font-weight: normal;

        font-size: 1.3125rem;
        padding-block: 1.2rem;
    }

    @media(min-width: 768px) {
        height: 60.5rem;
        
        width: 40rem;
        gap: 4rem;

        padding: 6rem;

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
            gap: 2rem;
            margin-bottom: 1.5rem;
            font-size: 2.5rem;

            > div {
                align-items: center;
                gap: 2rem;
            }

            .button {
                width: fit-content;
                margin: 0;
                line-height: 1.5rem;
                padding: 2rem 3rem;
                font-size: 1.8rem;
            }

        }
    }
`;