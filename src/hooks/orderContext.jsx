import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);
    const [changeOrder, setChangeOrder] = useState([]);

    async function getUnbilledOrder() {
        const { data } =  await api.get(`/order/${false}`);
        setOrder(data);
        return data;
    };

    return (
        <OrderContext.Provider value={{ order, setOrder, changeOrder, setChangeOrder, getUnbilledOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

function useOrder() {
    const context = useContext(OrderContext);
    return context;
};

export { OrderProvider, useOrder };