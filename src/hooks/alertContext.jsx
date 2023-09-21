import { createContext, useContext, useState } from "react";
import { AlertMessage } from "../components/AlertMessage";

export const AlertContext = createContext();

const AlertProvider = ({ children }) =>  {
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    function handleAlertError(message, type) {
        setMessage(message);
        setType(type);
        setState("show");

        const timer = setTimeout(() => {
            setState("hidden")
        }, 3000);
    
         return () => clearTimeout(timer);
    };

    return (
        <AlertContext.Provider value={{ state, message, type, handleAlertError }}>
            {children}

            <AlertMessage
                setState={setState}
                className={state}
                message={message} 
                typeError={type}
            />
        </AlertContext.Provider>
    );
};

function useAlert() {
    const context = useContext(AlertContext);
    return context;
};

export { useAlert, AlertProvider };
