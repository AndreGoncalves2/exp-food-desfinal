import styled from 'styled-components';

export const Container = styled.header`
    padding: 3.5rem 1.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    button {
        background: transparent;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        > svg {
            width: 2rem;
            height: 2rem;
        }
    }

    h1 {
        font-size: 1.3rem;
    }

    img {
        width: 1.5rem;
    }

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const Menu = styled.div`
    position: absolute;

    div {
        position: fixed;
        z-index: 1;
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
