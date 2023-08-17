import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [data, setData] = useState({});

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
                alert(error.response.data.message);
            } else {
                alert("Nào foi possível fazer o login");
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
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };