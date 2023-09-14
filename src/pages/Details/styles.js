import styled from "styled-components";

export const Container = styled.div`
    padding-inline: 3.5rem;

    min-height: 100vh;
    display: grid;
    place-items: center;
    
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    > header {
        position: fixed;
        top: 0;
        left: 0;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
    }

    > div {
        margin-block: 10rem 5.5rem  ;
        .details-wrapper {
            overflow: auto;
        }
    
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }

    main {
        display: flex;
        flex-direction: column;

        text-align: center;

        > div {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            > .button-text {
                align-self: flex-start;
                margin-bottom: 1rem;
    
                font-size: 1.5rem;
                line-height: 140%;
    
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
            
            > img {
                height: 16.5rem;
                width: 16.5rem;

                align-self: center;
    
                border-radius: 50%;
    
                margin-bottom: 1rem;
            }
        }
    }

    @media (min-width: 600px) {
        main {
            flex-direction: row;
            text-align: initial;

            > img {
                width: 24.3rem;
                height: 24.3rem;

                /* margin-right: 3rem; */
            }
        }
    }
`;

export const Infos = styled.div`
    max-width: 21rem;
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-family: Poppins;
        font-size: 1.7rem;

        font-weight: 500;
        line-height: 140%;

        text-align: center;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
        font-family: Poppins;
        font-size: 1rem;

        font-weight: 400;
        line-height: 140%;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .ingredients {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        flex-wrap: wrap;
        gap: 1.5rem;

        > div {
            background-color: ${({ theme }) => theme.COLORS.DARK_1000};
        }

        button {
            display: none;
        }
    }


    > button {
        margin-block: 3rem 3.38rem;
    }

    @media (min-width: 600px) {
        max-width: 43rem;
        h2 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.5rem;
        }

        .ingredients {
            max-width: 44rem;
            display: flex;
            div {
                width: fit-content;
                flex-basis: 22%;
                
                input {

                }
            }
        }
    }
`;

export const Controls = styled.div`
    display: flex;
    gap: 1rem;
    margin-block: 3rem 3.38rem;

    @media (min-width: 600px) {
        > button {
            max-width: fit-content;
            padding-inline: 1.5rem;
        }
    }
`;