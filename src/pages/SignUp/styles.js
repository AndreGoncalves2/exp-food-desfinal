import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20vh 4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    main {
        width: 100%;
        display: flex;
        flex-direction: column;

        form {
            margin-top: 4.5rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
    }

    @media (min-width: 600px) {
        form {
            display: none;
        }
    }
`;