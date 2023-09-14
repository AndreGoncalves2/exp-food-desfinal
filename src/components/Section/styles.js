import styled from 'styled-components';

export const Container = styled.section`
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column ;

    h2 {
        margin: 1.5rem 0 1.5rem 0;

        font-family: Poppins;
        font-size: 1.1rem;
        font-style: normal;

        font-weight: 500;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .meals, .desserts, .drinks {
        display: flex;
        overflow: auto;
        gap: 1rem;
        width: 100%;

        scroll-behavior: smooth;
    }
    .gradient-left, .gradient-right {
        display: none;
    }

    @media(min-width: 600px) {
        position: relative;
        margin-left: 0;
        
        h2 {
            margin: 4rem 0 1.5rem 0;
            font-size: 2rem;
        }
        
        .meals, .desserts, .drinks {
            display: flex;
            overflow: auto;
            gap: 1rem;
            width: 100%;

            scroll-behavior: smooth;
            overflow: hidden;
        }

        .gradient-left, .gradient-right {
            display: flex;
            align-items: center;
            position: absolute;
            height: 27.61rem;
            bottom: 0;
            width: 17rem;

            color: white;

            z-index: 1;

            background: linear-gradient(-100deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);

            span {
                margin-left: 2rem;

                svg {
                    width: 2.5rem;
                    height: 2.5rem;
                }
            }
        }

        .gradient-right {
            right: 0;
            justify-content: end;
            
            background: linear-gradient(100deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
            
            span {
                margin-right: 2rem;
            }
        }
    }
`