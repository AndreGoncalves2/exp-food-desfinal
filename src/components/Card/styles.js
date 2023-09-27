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

        svg {
            height: 2rem;
            width: 2rem;
        }
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
        height: 44rem;
        
        width: 30rem;
        gap: 1.2rem;

        .heart {
            svg {
                width: 2.4rem;
                height: 2.4rem;
            }
        }

        img {
            width: 17.6rem;
            height: 17.6rem;

            cursor: pointer;
        }

        .dish-Name {
            font-size: 2.2rem;
            white-space: nowrap;
            font-weight: 700;
            width: inherit;
        }

        .description {
            display: initial;
            
            font-family: Roboto, sans-serif;
            font-size: 1.4rem;
            
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            
            max-height: 3.2rem;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        .description::-webkit-scrollbar {
            width: 10px;
        }
        
        .description::-webkit-scrollbar-track {
            border-radius: 8px;
            background-color: #e7e7e7;
            border: 1px solid #cacaca;
        }
        
        .description::-webkit-scrollbar-thumb {
            border-radius: 8px;
            border: 1px solid transparent;
            background-clip: content-box;
            background-color: ${({ theme }) => theme.COLORS.DARK_200};
        }

        .price {
            font-size: 1.6rem;
        }

        .card-controls {
            display: flex;
            justify-content: center;
            gap: 2rem;
            
            margin-top: 1.5rem;
            font-size: 2.4rem;

            font-family: Poppins, sans-serif;

            > div {
                align-items: center;
                gap: 1.3rem;
                margin: 0;

                > button {
                    svg {
                        height: 2.2rem;
                        width: 2.2rem;
                    }
                }
            }

            .button {
                width: fit-content;
                margin: 0;
                line-height: 1rem;
                padding: 1.2rem 2.4rem;
                font-size: 1.4rem;
            }

        }
    }
`;