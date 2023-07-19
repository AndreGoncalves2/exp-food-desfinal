import styled from 'styled-components';

export const Container = styled.div`
    
    
    div {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_400};

    }
    .menu-open {
        animation: show 1s ;
        animation-fill-mode: forwards;
    }
    
    .menu-close {
        animation: hidden 1s ;
        animation-fill-mode: forwards;
    }

    @keyframes show {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0%); 
        }
    }

    @keyframes hidden {
        from {
            transform: translateX(0);
        }
        to {
            visibility: hidden;
            transform: translateX(-100%); 
        }
    }
`;

export const MenuHeader = styled.header`
    display: flex;
    gap: 1rem;
    align-items: center;

    > svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    font-family: Roboto, sans-serif;
    font-size: 1.3rem;
    font-weight: 400;

    padding: 3.5rem 1.75rem 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;