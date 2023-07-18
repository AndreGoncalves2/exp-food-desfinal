import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.DARK_400}
`;

export const Introduction = styled.div`
    position: relative;
    display: flex;

    margin: 2.75rem 1rem 0 2.25rem;
    height: 7.5rem;

    border-radius: 0.2rem;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    img {
        position: absolute;
        width: 12rem;

        bottom: 0;
        left: -2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .2rem;
        
        margin: 2.25rem 0rem 1.3rem 9.5rem;
        width: 100%;
        
        justify-content: center;
        
        h3 {
            width: 100%;

            font-family: Poppins, sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.LIGHT_300 };
        }
    
        p {
            width: fit-content;

            font-family: Poppins, sans-serif;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.LIGHT_300 };
        }
    }
`;