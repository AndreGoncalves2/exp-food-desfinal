import styled from "styled-components";

export const Container = styled.div`
    .container {
        width:100%;
        
        position: fixed; 
        bottom: -5.5rem;
        display: flex;
        justify-content: center ;
        align-items: center;

        z-index: 4;
        
        transition: 2s;
        
    }
    
    img {
        height: 2rem;
        width: 2rem;
    }
    
    .message {
        position: relative;
        width: 80%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .5rem;

        padding:1.5rem 0rem 1.5rem 1rem;
        border-radius:5px; 

        text-align: left;
        float:left; 
        font-weight:100; 
        font-size: 1.6rem;

        i {
            height: 1.6rem;
            position: absolute;
            right: 1rem;
        }
    }
    
    .error   { 
        background-color: ${({ theme }) => theme.COLORS.RED_100};
        color: ${({ theme }) => theme.COLORS.RED_600};
    }
    
    .ok     { 
        background-color: ${({ theme }) => theme.COLORS.GREEN_100}; 
        color: ${({ theme }) => theme.COLORS.GREEN_600}; 
    }
    
    .warning { 
        background-color: ${({ theme }) => theme.COLORS.ORANGE_100}; 
        color: ${({ theme }) => theme.COLORS.ORANGE_600};
    }
    
    .hidden {
        animation: alert-hidden .4s;
        animation-fill-mode: forwards;
    }

    .show {
        animation: alert-show .4s;
        animation-fill-mode: forwards;
    }
    
    @keyframes alert-show {
        from {
            transform: translateY(0); 
        }
        
        to {
            transform: translateY(-150%);
        }
    }
    
    @keyframes alert-hidden {
        from {
            transform: translateY(-100%);
        }
        
        to {
            transform: translateY(0); 
        }
    }

    @media (min-width: 768px) {
        .message {
            width: 50%;
        }
    }
`;
