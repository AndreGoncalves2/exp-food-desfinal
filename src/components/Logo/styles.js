import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    cursor: pointer;

    gap: .7rem;

    > div {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
    
    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        
        font-size: 2.3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    h4 {
        font-family: Roboto, sans-serif;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.BLUE_200};
    }

    img {
        height: 2.7rem;
    }

    @media (min-width: 600px) {
        img {
            height: 4.5rem;
            width: 4.5rem;
        }
    }
`