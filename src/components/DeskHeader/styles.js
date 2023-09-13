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
        font-size: 1.2rem;
        line-height: 100%;
    }

    .order-button {
        max-width: 9.5rem;
    }

    .input-container {
        .input-box {
            border: none;
        }

        max-width: 50.6rem;
    }

    .logOut {
        height: 1.3rem;
        border: none;
        background: transparent;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;