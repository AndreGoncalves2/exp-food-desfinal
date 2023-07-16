import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    label {
        display: inline-block;
        margin-bottom: .5rem;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: Roboto, sans-serif;
        
        font-size: 1rem;
        font-weight: 400;
        line-height: 100%;
    }

    input {
        width: 100%;
        height: 3rem;
        padding: 0.75rem 0.88rem;
        border-radius: 0.5rem;
        border: none;
    
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        
        background-color: ${({ theme }) => theme.COLORS.DARK_900 };
    }
`