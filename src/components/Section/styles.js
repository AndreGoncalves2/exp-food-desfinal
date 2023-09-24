import styled from 'styled-components';

export const Container = styled.section`
    margin-left: 1.5rem;
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

    @media(min-width: 768px) {
        margin-left: 0;
        
        h2 {
            margin: 4rem 0 1.5rem 0;
            font-size: 3rem;
        }

        .drinks-wrapper, .meals-wrapper , .desserts-wrapper {
            position: relative;
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
            pointer-events: none;
            position: absolute;

            display: flex;
            align-items: center;
            
            height: 60.5rem;
            width: 17rem;
            cursor: pointer;

            color: white;

            z-index: 1;

            background: linear-gradient(-100deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);

            span {
                pointer-events: all;
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