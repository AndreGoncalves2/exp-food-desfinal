import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Introduction = styled.div`
    margin: 2.75rem 1rem 0 2.25rem;
    display: grid;
    grid-template-columns: 45% 1fr;

    background: ${({ theme }) => theme.COLORS.RED_100};
    
    h3 {
        color: ${({ theme }) => theme.COLORS.GRADIENTS };

        font-family: Poppins, sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 140%;
    }

    p {
        font-family: Poppins, sans-serif;
        font-size: 0.75rem;
        
        font-weight: 400;
        line-height: 140%;
    }
`;