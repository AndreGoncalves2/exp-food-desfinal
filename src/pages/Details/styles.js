import styled from "styled-components";

export const Container = styled.div`
    padding-inline: 3.5rem;

    min-height: 100vh;
    display: grid;
    place-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    > header {
        position: fixed;
        top: 0;
        left: 0;
    }

    footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }

    > div {        
        .details-wrapper {
            overflow: auto;
        }
    
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        text-align: center;

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

            border-radius: 50%;

            margin-bottom: 1rem;
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

        text-align: justify;

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
`;

export const Controls = styled.div`
    display: flex;
    gap: 1rem;
    margin-block: 3rem 3.38rem;
`;