import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    opacity: .5;

    height: 6.25rem;

    margin-inline: 1rem;

    h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 2rem;
        white-space: nowrap;
    }

    span {
        svg {
            height: 5rem;
            width: 5rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
    }
`;