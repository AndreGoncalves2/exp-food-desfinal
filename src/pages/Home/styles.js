import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-bottom: 10rem;
    position: relative;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    main {
        overflow: auto;
    }

    .desktop-header {
        display: none;
    }

    @media (min-width: 768px) {
        .mobile-header {
            display: none;
        }

        .desktop-header {
            display: flex;
        }
    }

    @media (min-width: 768px) {
        main {
            margin-inline: 12vw;
        }
    }
    `;

export const Introduction = styled.div`
    justify-content: end;
    position: relative;
    display: flex;
    gap: 2rem;
    
    margin: 2.75rem 1rem 2.2rem 2.25rem;
    padding-inline: 2rem;
    height: 11.25rem;

    border-radius: 0.2rem;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    img {
        position: absolute;
        width: 16rem;
        height: 13.5rem;

        bottom: 0;
        left: -2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .2rem;
        
        justify-content: center;
        
        h3 {
            font-family: Poppins, sans-serif;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    
        p {
            width: 50vw;
            font-family: Poppins, sans-serif;
            font-size: .95rem;
            font-weight: 400;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
    
    @media (max-width: 374px) {
        img {
            width: 14.5rem;
            height: 12rem;
        }

        div {
            width: 14rem;
            h3 {
                font-size: 1.3rem;
            }

            p {
                width: initial;
                font-size: .75rem;
            }
        }
    }

    @media (min-width: 768px) {
        margin: 10.5rem 0 0 0;
        height: 20rem;

        img {
            width: 30rem;
            height: 25rem;
        }
        
        div {
            
            
            h3 {
                font-size: 2.9rem;
                font-weight: 500;
                line-height: 140%;
            }
            
            p {
                width: initial;
                font-size: 1.3rem;
                max-width: 30rem;
                align-self: flex-end;

                text-align: right;
            }
        }
    }

    @media (min-width: 970px) {
        div {
            padding-right: 10vw;
        }
    }

    @media (min-width: 1024px) {
        img {
            width: 42rem;
            height: 29rem;
        }

        div {
            padding-right: 5vw;
            text-align: right;
            
            h3 {
                font-size: 4rem;
            }
        }
    }
`;