import  styled  from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 25vh 4rem 0 ;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logo {
            img {
                height: 3.7rem;
                width: 3.7rem;
            }

            h2 {
                font-size: 3rem;
            }
        }

        > form {
            margin-top: 4.5rem;
            width: 100%;
            
            display: flex;
            flex-direction: column;
            gap: 2rem;

            label {
                font-size: 1.5rem;
            }

            .input-box input {
                font-size: 1.4rem;
            }

            h3 {
                display: none;
            }

            .button-submit {
                padding: 1rem;
                font-size: 1.2rem;
            }

            .button-text {
                font-size: 1rem;
            }
        }
    }

    @media (min-width: 600px) {
        padding-top: 0;
        
        main {
            flex-direction: row;
            justify-content: space-around;
            height: 100%;
            align-items: center;
            
            h1 {
                font-size: 4rem;
            }

            h2 {
                font-size: 3vw;
            }

            img {
                height: 4vw;
                width: 4vw;
            }

            > form {
                
                background-color: ${({ theme }) => theme.COLORS.DARK_700};
                padding: 6.4rem;
                border-radius: 1.6rem;
                max-width: 47.6rem;
                gap: 3.5rem;
                
                h3 {
                    text-align: center;

                    display: initial;
                    font-family: Poppins;
                    font-size: 32px;
                    font-style: normal;
                    font-weight: 500;

                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                }
            }
        }
        
        
    }
`;