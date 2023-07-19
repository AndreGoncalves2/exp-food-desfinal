import styled from 'styled-components';

export const Container = styled.section`
    margin-left: 1.5rem;
    
    .cards {

        position: relative;
        display: flex;
        gap: 1rem;
        width: 100%;

        overflow: auto;
    }

    h2 {
        margin: 4rem 0 1.5rem 0;

        font-family: Poppins;
        font-size: 1.1rem;
        font-style: normal;

        font-weight: 500;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`