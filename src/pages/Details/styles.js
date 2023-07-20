import styled from "styled-components";

export const Container = styled.div`
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    > main {
        display: flex;
        flex-direction: column;
        align-items: center;

        text-align: center;

        margin: 2.3rem 3.5rem 0;

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

            margin-bottom: 1rem;
        }
    }
`;

export const Infos = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-family: Poppins;
        font-size: 1.7rem;

        font-weight: 500;
        line-height: 140%;

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
        display: flex;
        justify-content: space-around;
        gap: 1.5rem;
    }
`;

export const Controls = styled.div`
    display: flex;
    gap: 1rem;
    margin-block: 3rem 3.38rem ;
`;