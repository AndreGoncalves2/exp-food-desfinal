import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: .88rem;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100 };

    button {
        display: flex; 
        align-items: center;
        
        height: 1.5rem;
        background: transparent;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100 };

    }
`;