import { Container, OrderCard } from "./style";
import { DropDown } from "../../components/DropDown";
import { Header } from "../../components/Header";

import { IoEllipse } from "react-icons/io5";

import {  useState } from 'react';

export function Order() {
    const [status, setStatus] = useState("");
    
    return (
        <Container>
            <Header />
            <h1>Pedidos</h1>

            {/* <OrderCard>
                <h4>00004 20/05 às 18h00</h4>
                <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                <IoEllipse />
                <DropDown 
                    setStatus={setStatus}
                    useCategories={["Pendente", "Entregue", "Preparando"]}
                />
            </OrderCard> */}

            <OrderCard>
                <h4>00004 20/05 às 18h00</h4>
                <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>

                <DropDown 
                    setStatus={setStatus}
                    useCategories={[{color: "red", title: "pendente"}, {color: "yellow", title: "Preparando"}, {color: "green", title: "Entregue"}]}
                />
            </OrderCard>
        </Container>
    )
}