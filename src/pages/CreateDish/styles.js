import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    .button-text {
        margin: 1rem 2rem 0;
    }
    
    h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: Roboto, sans-serif;
        font-weight: normal;
    }

    .save {
        background-color: ${({ theme }) => theme.COLORS.RED_400};
    }
`;

export const FormNewDish = styled.div`
    padding: 2.19rem 2rem 3.32rem;
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    .file-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        

        > label {
            position: absolute;

            display: flex;
            align-items: center;
            gap: .5rem;

            font-family: Poppins;

            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.5rem;
            font-style: normal;
            
            margin-left: 2rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
            > svg {
                height: 1.5rem;
                width: 1.5rem;
            }
        }
    
        #file-input {
            display: none;
        }
    }

    .button-wrapper {
        display: flex;
        gap: 2rem;
        

        button:nth-child(1) {
            width: 50vw;

            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
    }
    
`;  