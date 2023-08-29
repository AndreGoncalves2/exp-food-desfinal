import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: .5rem;
    
    padding: .4rem 1rem;
    border-radius: .5rem;

    background-color: ${({ theme, $isNew }) =>  $isNew ? "trasparent" : theme.COLORS.LIGHT_600};

    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    span {
        font-family: Roboto, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    input {
        width: 100%;
        
        text-align: center;
        
        background: transparent;
        border: none;

        font-family: Roboto, sans-serif;
        font-size: 1rem;
        font-weight: 400;

        color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100}
    }

    button {
        display: flex;
        align-items: center;

        height: .7rem;
        width: .7rem;

        background: transparent;
        border: none;

        color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

        > svg {
            height: .7rem;
            width: .7rem;
        }
    }
`;