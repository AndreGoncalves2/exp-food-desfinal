import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: .7rem;
    
    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        
        font-size: 2.3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`