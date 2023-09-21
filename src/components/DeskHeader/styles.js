import styled from "styled-components";

export const Container = styled.header`
    > div {
        display: flex;
        align-items: center;
        padding: 1.5rem 7.7rem;
        justify-content: space-around;
        gap: 2rem;

        width: 100%;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_600}; 
    }

    .logo {
        position: relative;
        > div {
            h4 {
                position: absolute;
                bottom: -.7rem;
                right: 0;
            }
        }
        
        h2 {
            font-size: 1.5rem;
            white-space: nowrap;
        }
    }

    img {
        height: 1.9rem;
        width: 1.9rem;
    }

    .button-text {
        white-space: nowrap;
        font-size: 1rem;
        line-height: 100%;
    }

    .order-button {
        max-width: 12rem;
        white-space: nowrap;
    }

    .input-container {
        .input-box {
            border: none;
        }

        max-width: 50.6rem;
    }

    .logOut {
        height: 2rem;
        border: none;
        background: transparent;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        svg {
            height: 2rem;
            width: 2rem;
        }
    }

    @media (min-width: 1240px) {
        .button-text {
            font-size: .8vw;
        }

        .order-button {
            font-size: 1.2rem;
            white-space: nowrap;
        }

        img {
            height: 2.6rem;
            width: 2.6rem;
        }

        .logo {
            > div {
            
                h2 {
                    font-size: 2rem;
                }
            }
        }
    }
`;