import styled from 'styled-components';

export const Container = styled.div`
    textarea {
        resize: none;
        width: 100%;
        height: 25vh;

        padding: 0.88rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 0.5rem;
        border: none;

        font-family: Roboto, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    label {
        display: inline-block;
        margin-bottom: .5rem;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: Roboto, sans-serif;
        
        font-size: 1.6rem;
        font-weight: 400;
    }
`;