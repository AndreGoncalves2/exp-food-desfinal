import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    async function getOrder() {
        const {data} =  await api.get("/order");
        setOrder(data);
        return data;
    };

    return (
        <OrderContext.Provider value={{ order, setOrder, getOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

function useOrder() {
    const context = useContext(OrderContext);
    return context;
};

export { OrderProvider, useOrder };