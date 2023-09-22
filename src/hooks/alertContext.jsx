import { createContext, useContext, useState } from "react";
import { AlertMessage } from "../components/AlertMessage";
import { ConfirmModal } from "../components/ConfirmModal";

export const AlertContext = createContext();

const AlertProvider = ({ children }) =>  {
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    const [stateModal, setStateModal] = useState("");
    const [modalResponse, setModalResponse] = useState();
    const [modalExecute, setModalExecute] = useState();

    function handleAlertError(message, type) {
        setMessage(message);
        setType(type);
        setState("show");

        const timer = setTimeout(() => {
            setState("hidden")
        }, 3000);
    
         return () => clearTimeout(timer);
    };

        

    function openModal() {
        setStateModal("show-modal");
        
        
    };

    return (
        <AlertContext.Provider value={{ state, message, type, handleAlertError, openModal, setModalExecute }}>
            {children}

            <AlertMessage
                setState={setState}
                className={state}
                message={message} 
                typeError={type}
            />

            <ConfirmModal
                // modalExecute={modalExecute}
                className={stateModal}
                setStateModal={setStateModal}
                setModalResponse={setModalResponse}
            />
        </AlertContext.Provider>
    );
};

function useAlert() {
    const context = useContext(AlertContext);
    return context;
};

export { useAlert, AlertProvider };
