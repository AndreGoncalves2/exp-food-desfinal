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
    position: relative;
    display: flex;
    gap: 2rem;

    margin: 2.75rem 1rem 2.2rem 2.25rem;
    padding-inline: 2rem;
    height: 7.5rem;

    border-radius: 0.2rem;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    img {
        position: absolute;
        width: 12rem;

        bottom: 0;
        left: -2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .2rem;
        
        margin: 2.25rem 0rem 1.3rem 30vw;
        width: 100%;
        
        justify-content: center;
        
        h3 {
            width: 100%;

            font-family: Poppins, sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    
        p {
            font-family: Poppins, sans-serif;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

    }

    @media (min-width: 768px) {
        margin: 10.5rem 0 0 0;
        height: 25rem;

        img {
            width: 45rem;
            height: 35rem;
        }
        
        div {
            padding-right: 5vw;
            text-align: right;
            
            h3 {
                font-size: 3rem;
                font-weight: 500;
                line-height: 140%;
            }
            
            p {
                width: initial;
                font-size: 1.3rem;
                /* max-width: 20rem; */
                align-self: flex-end;

                text-align: right;
            }
        }
    }

    @media (min-width: 970px) {
        div {
            padding-right: 10vw;
            h3 {
                font-size: 4rem;
            }
        }
    }
`;