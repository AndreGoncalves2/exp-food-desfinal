import styled from 'styled-components';

export const Container = styled.header`
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

    h2 {
        position: absolute;
        left: 5rem;

        font-family: Roboto;
        font-size: 1.6rem;

        font-weight: 400;
        
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

    > div {
        position: fixed;
        z-index: 1;
        top: 7.3rem;
        left:-100%;
    
        height: 100vh;
        width: 100vw;
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }

    footer {
        position:absolute;
        bottom: 0;
        width: 100%;
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

export const MenuContainer = styled.div`
    margin: 2.25rem 1.75rem 0;

    .control-buttons {
        display: flex;
        align-items: start;
        flex-direction: column;

        margin-top: 2.25rem;

        > button {
            width: 100%;

            font-family: Poppins, sans-serif;
            text-align: left;
            font-size: 1.5rem;
            
            font-weight: 300;
            line-height: 140%;

            border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
`;