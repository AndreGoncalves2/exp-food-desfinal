import { styled } from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding-bottom: 8rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    .desktop-header {
        display: none;
    }

    main {
        .index {
            display: none;
        }

        > .button-text {
            margin-left: 2rem;
            align-self: flex-start;
    
            font-size: 1.5rem;
            line-height: 140%;
    
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    
        > h1 {
            margin-inline: 2.20rem;
            margin-top: 3.5rem;

            font-family: Poppins, sans-serif;
            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
    
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        } 
    
        h4 {
            display: flex;
            gap: 2rem;
        }

        .card {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .sale-dishes {
                font-size: 1.12rem;
                
            }

            > div {
                display: flex;
                flex-direction: column;
                gap: 1rem;

            }
        }
    
        .red {
            color: ${({ theme }) => theme.COLORS.RED_300};
        }
        
        .yellow {
            color: ${({ theme }) => theme.COLORS.YELLOW_100};
        }
    
        .green {
            color: ${({ theme }) => theme.COLORS.GREEN_500};
        }
    }

    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    @media (min-width: 768px) {
        .desktop-header {
            display: initial;
        }

        .mobile-header {
            display: none;
        }

        main {
            margin-inline: 6vw;

            h1 {
                font-size: 2.5rem;
            }

            span {
                font-size: 1.1vw;
            }

            .card {
                > div {
                    display: initial;
                }
            }
            > .button-text {
                margin-left: 0;
            }

            h1 {
                margin-inline: 0;
            }
        }

    }

    @media (min-width: 875px) {
        main {
            margin-inline: 12vw;

            .index {
                display: grid;
                grid-template-columns: .4fr .4fr 1fr .4fr;    

                span {
                    padding: 1.3rem 1.5rem;

                    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

                    font-family: Roboto;

                    font-size: 1.1vw;
                    font-style: normal;

                    font-weight: 700;
                    line-height: 160%;

                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                }

                .status {
                    border-top-left-radius: .5rem;
                }
                
                .date {
                    border-top-right-radius: .5rem;
                }
            }
        }
    }
    `;

export const AdmOrderCard = styled.div`
    margin-inline: 2.20rem;
    
    display: grid;
    gap: 1rem;
    grid-template-columns: fit-content .8fr 1fr ;
    
    padding: 1.5rem;
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.5rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    .drop-down, .wrapper button span div {
        .drop {
            font-size: .875rem;
        }
    }
    
    grid-template-areas:
        "saleNumber saleCategory saleDate"
        "saleDishes saleDishes saleDishes"
        "dropDown dropDown dropDown"
    ;

    .sale-number {
        grid-area: saleNumber ;
        width: fit-content;
    }

    .sale-date {
        grid-area: saleDate ;
    }

    .category {
        grid-area: saleCategory;
    }

    .sale-dishes {
        grid-area: saleDishes;
    }

    .drop-down {
        grid-area: dropDown;
    }

    @media (min-width: 426px) {
        margin-inline: 20vw;
    }
    
    @media (min-width: 768px) {
        margin-inline: 0;
        display: grid;
        grid-template-columns: .4fr .4fr 1fr .4fr;
        border: none;
        padding: 0;
        gap: 0;
        
        grid-template-areas: 
        "dropDown saleNumber saleDishes saleDate "
        ;

        > span {
            display: flex;
            align-items: center;
            padding: 1rem 1.5rem;
            border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        }

        p {
            padding: 1rem 1.5rem;
            border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        }

        .sale-number {
            grid-area: saleNumber ;
            width: initial;
        }

        .sale-date {
            grid-area: saleDate ;
        }

        .sale-dishes {
            font-size: 1.1vw;
        }

        .drop-down {
            grid-area: dropDown;
           
            width: 100%;
            border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
            .wrapper {
                margin: 1rem 1.5rem;
            }
        }

        .sale-dishes {
            grid-area: saleDishes;
        }
    }
`;

export const UserOrderCard = styled.div`
    margin-inline: 2.20rem;
    
    display: grid;
    grid-template-columns: fit-content .8fr 1fr ;

    grid-template-areas: 
        "saleNumber saleCategory saleDate"
        "saleDishes saleDishes saleDishes"
    ;

    .sale-number {
        grid-area: saleNumber ;
        width: fit-content;
    }

    .sale-date {
        grid-area: saleDate ;
    }

    .category {
        grid-area: saleCategory;
        display: flex;
        gap: .5rem;
    }

    .sale-dishes {
        grid-area: saleDishes;
    }

    gap: 1rem;

    padding: 1.5rem;
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;

    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.5rem;
   
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    @media (min-width: 426px) {
        margin-inline: 20vw;
    }

    @media (min-width: 768px) {
        margin-inline: 0;
        display: grid;
        grid-template-columns: .4fr .4fr 1fr .4fr;
        border: none;
        padding: 0;
        gap: 0;
        
        grid-template-areas: 
        "saleCategory saleNumber saleDishes saleDate "
        ;

        span {
            display: flex;
            align-items: center;
            padding: 1rem 1.5rem;
            border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        }

        > p {
            padding: 1rem 1.5rem;
            border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        }

        .sale-number {
            grid-area: saleNumber ;
            width: initial;
        }

        .sale-date {
            grid-area: saleDate ;
        }

        .category {
            grid-area: saleCategory;
        }

        .sale-dishes {
            grid-area: saleDishes;
            font-size: 1.1vw;
        }
    }
`;

