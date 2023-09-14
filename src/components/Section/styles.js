import styled from 'styled-components';

export const Container = styled.section`
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column ;
    .cards {
        
        > div {
            display: flex;
            f
        }
        position: relative;
        display: flex;
        flex-direction: column ;
        gap: 1rem;
        width: 100%;

        overflow: auto;
    }

    h2 {
        margin: 4rem 0 1.5rem 0;

        font-family: Poppins;
        font-size: 1.1rem;
        font-style: normal;

        font-weight: 500;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    @media(min-width: 600px) {
        position: relative;
        margin-left: 0;
        
        h2 {
            font-size: 2rem;
        }

        .fora {
            width: 100vw;
            position: relative;
            background-color: red;
            z-index: 3;
        }
        .gradient-left {
            display: flex;
            align-items: center;
            position: absolute;
            position: absolute;
            width: 17rem;
            height: 100%;

            color: white;

            z-index: 1;

            background: linear-gradient(100deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%);

        }

        .gradient-right {
            display: flex;
            align-items: center;
            position: absolute;
            width: 17rem;
            height: 100%;
            right: 0;

            color: white;

            z-index: 1;

            background: linear-gradient(100deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%);
        }
    }
`