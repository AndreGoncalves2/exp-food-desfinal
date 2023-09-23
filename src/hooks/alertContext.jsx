import { createContext, useContext, useState } from "react";
import { AlertMessage } from "../components/AlertMessage";

export const AlertContext = createContext();

const AlertProvider = ({ children }) =>  {
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    const [timer, setTimer] = useState();

    function handleAlertError(message, type) {
        setMessage(message);
        setType(type);

        clearTimeout(timer);
        
        if (state == "show") {
            setState("hidden");

            setTimer(setTimeout(() => {
                setState("show");
            }, 200))

            setTimer(setTimeout(() => {
                setState("hidden");
            }, 3000))
        
            return () => clearTimeout(timer);
        }

        setState("show");
       
        setTimer(setTimeout(() => {
            setState("hidden");
        }, 3000))
    
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
