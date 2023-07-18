import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: .88rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100 };

    button {
        background: transparent;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100 };

    }
`;