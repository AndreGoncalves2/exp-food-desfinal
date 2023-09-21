import styled from "styled-components";

export const Container = styled.div`
    .container {
        width:100%;
        
        position: fixed; 
        bottom: 0;
        display: flex;
        justify-content: center ;
        align-items: center;
        
        transition: 2s;
        
    }
    
    img {
        height: 2rem;
    }
    
    > .message {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;

        z-index: 3;
        padding:1.5rem;


        float:left; 
        font-weight:100; 
        font-size:1.6rem;
    }

    .error   { 
        background-color:#FFCACA; 
        border:2px #a60202 solid;
        color:#a60202; 
        border-radius:5px; 
        padding: 1rem;
    }
    
    .ok     { 
        background-color:#A6FFBC; 
        border:2px #00bd00 solid; 
        border-bottom: none;
        color:#00bd00; 
        border-radius:5px; 
        padding: 1rem;
    }
    
    .warning { 
        background-color:#ffa500; 
        border:2px #2b2b2b solid; 
        color:#2b2b2b; 
        border-radius:5px; 
        padding: 1rem;
    }
    
    .info   { 
        background-color:#B3E7FF; 
        border:2px #018ace solid; 
        color:#018ace; 
        border-radius:5px; 
        padding: 1rem;
    }

    /* .hidden {
        animation: alert-hidden .4s;
        animation-fill-mode: forwards;
    } */

    .show {
        /* display: none; */
        animation: alert-show .4s;
        animation-fill-mode: forwards;
    }
    
    @keyframes alert-show {
        from {
            transform: translateY(0); 
        }
        
        to {
            transform: translateY(-100%);
        }
    }

    @keyframes alert-hidden {
        from {
            transform: translateY(0%); 
        }
        
        to {
            transform: translateY(110%);
        }
    }
`;
