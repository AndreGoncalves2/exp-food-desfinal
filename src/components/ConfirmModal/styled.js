import styled from 'styled-components';

export const Container = styled.div`
     
    .modal {
        display: none;
        position: fixed;
        align-items: center;
        justify-content: center;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.8);
    }
    
    .show-modal {
        display: flex;
    }

    .modal-content {
        padding: 2rem;
        border-radius: .5rem;

        text-align: center;
        color: #FAFAFA;

        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
        background-color: #09090B;
    }

    .btn-confirm {
        padding: .5rem 1rem;
        margin: 3rem 1rem 0;
        border: none;

        font-size: 1.2rem;
        border-radius: .5rem;
        cursor: pointer;

        background-color: #e74c3c;
        color: #fff;
    }
    
    .btn-cancel {
        margin: 1rem;
        padding: .5rem 1rem;
        border: none;
        
        font-size: 1.2rem;
        cursor: pointer;
        border-radius: .5rem;

        background-color: #3498db;
        color: #fff;
    }

    @media (min-width: 768px) {
        .modal-content {
            font-size: 2.5rem;
            padding: 5rem 5rem 3rem 5rem; 
        }

        .btn-cancel, .btn-confirm {
            font-size: 1.6rem;
            padding: .6rem 1.1rem;
        }
    }
`;