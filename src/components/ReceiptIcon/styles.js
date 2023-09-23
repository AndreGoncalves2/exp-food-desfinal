import styled from 'styled-components';

export const Container = styled.div`
    div {
        position: relative;
    }

    svg {
        width: 2rem;
        height: 2rem;
    }

    button {
        float: right;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: none;
    }   

    span {
        padding-inline: 0.3rem;
        position: absolute;
        top: -.2rem;
        right: -.2rem;

        text-align: center;
        
        border-radius: 6.2rem;
        border: none;

        font-family: Poppins;
        font-size: 0.87rem;
        font-weight: 500;
        line-height: 1.2rem;

        background-color: ${({ theme }) => theme.COLORS.RED_500};   
    }
`;