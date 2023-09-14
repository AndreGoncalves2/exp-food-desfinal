import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    main {
        overflow: auto;
        margin-bottom: 3rem;
    }

    .desktop-header {
        display: none;
    }

    @media (min-width: 600px) {
        .mobile-header {
            display: none;
        }

        .desktop-header {
            display: flex;
        }
    }

    @media (min-width: 600px) {
        main {
            margin-inline: 8vw;
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

            color: ${({ theme }) => theme.COLORS.LIGHT_300 };
        }
    
        p {

            font-family: Poppins, sans-serif;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.LIGHT_300 };
        }

    }
    @media (min-width: 600px) {
        margin: 10.5rem 0 0 0;
            height: 16.25rem;

            img {
                width: 35rem;
                height: 24rem;
            }
            
            div {
                padding-right: 10vw;
                text-align: right;
                
                h3 {
                    font-size: 2.9rem;
                    font-weight: 500;
                    line-height: 140%;
                }
                
                p {
                    width: initial;
                    font-size: 1rem;

                    text-align: right;
                }
            }
    }
`;