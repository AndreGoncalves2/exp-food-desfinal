import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);
    const [changeOrder, setChangeOrder] = useState([]);

    async function getOrder() {
        const {data} =  await api.get("/order");
        setOrder(data);
        const orderUnbilled = data.map((order) => order.invoice == 0);
        return orderUnbilled;
    };

    return (
        <OrderContext.Provider value={{ order, setOrder, changeOrder, setChangeOrder, getOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

function useOrder() {
    const context = useContext(OrderContext);
    return context;
};

export { OrderProvider, useOrder };