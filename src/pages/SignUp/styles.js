import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* padding: 20vh 4rem; */

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    main {
        width: 100%;
        display: flex;
        flex-direction: column;

        form {
            margin-top: 4.5rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            h3 {
                display: none;
            }
        }
    }

    @media (min-width: 768px) {
        /* padding-top: 20vh; */

        main {
            height: 100%;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            
            
            img {
                height: 4vw;
                width: 4vw;
            }

            h2 {
                font-size: 3vw;
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