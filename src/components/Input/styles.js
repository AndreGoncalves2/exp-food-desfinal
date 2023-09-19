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
    }

    .input-box {
        display: flex;
        align-items: center;
        gap: .3rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_500};

        > svg {
            height: 2rem;
            width: 2rem;
        }
        
        input {
            width:100%;
            background: transparent;
            border: none;

            font-family: Roboto, sans-serif;
            font-size: 1rem;
            font-weight: 400;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        width: 100%;
        height: 3rem;
        padding: 0.75rem 0.88rem;
        border-radius: 0.5rem;
        border: none;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }

    @media (min-width: 600px) {
        label {
            font-size: 1.6rem;
        }

        .input-box {
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
`