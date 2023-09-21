import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useAlert } from "./alertContext";
import { AlertMessage } from "../components/AlertMessage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    const { handleAlertError, message, type, state } = useAlert();

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/session", { email, password } )

            const { user, token } = response.data;
            
            api.defaults.headers.authorization = ` Bearer ${token}`;
            
            window.localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
            window.localStorage.setItem('@foodexplorer:token', token);

            setData({ user, token });
        } catch (error) {
            console.log(error);
            if (error.response) {
                handleAlertError(error.response.data.message, "error");
            } else {
                handleAlertError("Nào foi possível fazer o login", "error");
            };
        };
    };

    function signOut() {
        window.localStorage.removeItem('@foodexplorer:token');
        window.localStorage.removeItem('@foodexplorer:user');
        setData({});
    };

    useEffect(() => {
        const user = window.localStorage.getItem('@foodexplorer:user');
        const token = window.localStorage.getItem('@foodexplorer:token');

        api.defaults.headers.authorization = ` Bearer ${token}`;

        setData({
            user: JSON.parse(user),
            token
        });

    }, []);
    
    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
            {children}
            <AlertMessage
                className={state}
                message={message} 
                typeError={type}
            />
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };