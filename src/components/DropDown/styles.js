import styled from 'styled-components';

export const Container = styled.div` 
    font-family: Roboto, sans-serif;
    
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    .wrapper {
        button {
            width: 100%;
            background: transparent;
            border: none;

            display: flex;
            justify-content: space-between;
            align-items: center;
    
            padding: 1rem;
            border-radius: 0.3rem;
            
            > span {
                display: flex;
                align-items: center;
    
                svg {
                    width: 1.7rem;
                    height: 1.7rem;
                }
            }
        }
        
        border-radius: 0.3rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }
`;