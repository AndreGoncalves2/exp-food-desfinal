import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    
    display: flex;
    padding: 3.5rem 1.75rem 1.5rem;
    width: 100%;
    
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
    position:absolute;

    footer {
        position:absolute;
        bottom: 0;
        width: 100%;
    }

    .menu {
        position: fixed;
        z-index: 1;
        top: 0;
        left:-100%;

        height: 100vh;
        width: 100vw;

        background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }

    .menu-open {        
        animation: show .4s ;
        animation-fill-mode: forwards;
    }
    
    .menu-close {
        animation: hidden .4s ;
        animation-fill-mode: forwards;
        
    }

    @keyframes show {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(100%); 
        }
    }

    @keyframes hidden {
        from {
            transform: translateX(100%);
        }

        to {
            transform: translateX(0%); 
        }
    }
`;

export const HeaderMenu = styled.header`
    width: 100%;
    height: fit-content;
    
    display: flex;
    gap: 1rem;
    align-items: center;

    padding: 3.75rem 1.75rem 1.75rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h2 {
        display: inline;

        font-family: Roboto, sans-serif;
        font-size: 1.3rem;
        font-weight: 400;
    }

    button {
        height: 1.5rem;

        svg {
            
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;

export const MenuContainer = styled.div`
    margin: 2.25rem 1.75rem 0;

    .control-buttons {
        display: flex;
        align-items: start;
        flex-direction: column;

        margin-top: 2.25rem;

        > button {
            width: 100%;

            text-align: left;
            font-family: Poppins, sans-serif;
            font-size: 1.5rem;
            
            font-weight: 300;
            line-height: 140%;

            border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
`;