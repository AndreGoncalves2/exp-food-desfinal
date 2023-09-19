import styled from "styled-components";

export const Container = styled.div`
    .alert-box {
        width:100%; 
        overflow:hidden; 
        margin:0 auto; 
        padding:10px; 
        background-color:#FFFFFF; 
    }

    .message {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 3;

        width:100%; 
        margin:auto;  
        padding:1.5rem;

        float:left; 
        display:block; 
        font-weight:100; 
        font-size:1.6rem;
    }

    .erro   { 
        background-color:#FFCACA; 
        border:2px #a60202 solid; 
        color:#a60202; 
        border-radius:5px; 
    }

    .ok     { 
        background-color:#A6FFBC; 
        border:2px #00bd00 solid; 
        color:#00bd00; 
        border-radius:5px; 
    }
    
    .warning { 
        background-color:#FFFFBF; 
        border:2px #2b2b2b solid; 
        color:#2b2b2b; 
        border-radius:5px; 
    }

    .info   { 
        background-color:#B3E7FF; 
        border:2px #018ace solid; 
        color:#018ace; 
        border-radius:5px; 
    }

    .hidden {
        animation: hidden .6s;
        animation-fill-mode: forwards;
    }

    .show {
        animation: show .6s;
        animation-fill-mode: forwards;
    }

    @keyframes show {
        from {
            transform: translateY(100%); 
        }
        
        to {
            transform: translateY(0);
        }
    }

    @keyframes hidden {
        from {
            transform: translateY(0%); 
        }
        
        to {
            transform: translateY(110%);
        }
    }
`;
