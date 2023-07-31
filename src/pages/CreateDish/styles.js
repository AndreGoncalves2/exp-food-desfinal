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
        
        border: 1px solid red;

        > label {
            position: absolute;
          
    
            border: 1px solid blue;
        }
    
        #file-input {
            display: none;
        }
    }
    
`;  