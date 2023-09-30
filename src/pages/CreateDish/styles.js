import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    position: relative;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    .desktop-header {
        display: none;
    }
    
    main {
        padding-bottom: 5rem;

        h2 {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-family: Roboto, sans-serif;
            font-weight: normal;
        }
     
        .save {
            background-color: ${({ theme }) => theme.COLORS.RED_200};
        }
     
    }

    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    
    > main {
        .button-text {
            font-size: 1.5rem;
            margin: 4rem 2rem 0;

        }
    }

    
    @media (min-width: 768px) {
        .mobile-header {
            display: none;
        }

        .desktop-header {
            display: initial;
        }

        
        > main {
            .input-container label {
                margin-bottom: 1rem;
            }

            .button-text {
                font-size: 1.5rem;
                margin-inline: 12vw;
            }
        }
    }
`;

export const FormNewDish = styled.form`
    padding: 2.19rem 2rem 3.32rem;
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .new-dish-header, .new-dish-body {
        display: flex;
        flex-direction: column;
        gap: 1.5rem; 
    }
    
    .file-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        

        > label {
            position: absolute;
            top: 3.2rem;
            display: flex;
            align-items: center;
            gap: .5rem;

            font-family: Poppins;

            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.5rem;
            font-style: normal;
            
            margin-left: 1rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
            > svg {
                height: 1.5rem;
                width: 1.5rem;
            }
        }
    
        #file-input {
            display: none;
        }
    }

    .button-wrapper {
        display: flex;
        gap: 2rem;
        
        .delete-button {
            width: 50vw;

            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
    }

    @media (min-width: 600px) {
        margin-inline: 12vw;
    }

    @media (min-width: 768px) {
        padding: 8vh 0 7.25rem 0;
        margin-inline: 12vw;

        h2 {
            font-size: 3.5rem;
        }

        label, .text-label {
            font-size: 2rem;
        }

        .new-dish-body h4 {
            margin-bottom: .6rem;
            font-size: 2.3rem;
        }

        .new-dish-body div div {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }

        .new-dish-body div div input {
            height: 1rem;
        }

        h4 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        .input-container {
            input {
                font-size: 1.2rem;
            }

            > label {
                margin-bottom: 1rem;
            }
        }

        .new-dish-header {
            display: grid;
            grid-template-columns: .5fr 1.3fr 1fr;
            gap: 2.88rem;

            .file-input-wrapper {
                white-space: nowrap;

                min-width: 14.2rem;
                
                > label {
                    margin-left: 1rem;
                    margin-top: 1.2rem;
                    cursor: pointer;
                }
            }

            .category {
                span {
                    font-size: 1.2rem;
                }
            }
        }

        .new-dish-body {
            display: grid;
            grid-template-columns: 1fr .4fr;

            > div {
                input {
                    font-size: 1.2rem;
                }
            }
        }

        .button-wrapper {
            align-self: flex-end;
            width: fit-content;

            button {
                font-size: 1.2rem;
                font-weight: normal;
                padding-inline: 1.5rem;
            }
        }

        #text-area {
            font-size: 1.15rem;
            max-height: 10rem ;
        }
    }
    
`;  