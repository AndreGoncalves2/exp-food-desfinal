import { Container, OrderCard } from "./style";
import { DropDown } from "../../components/DropDown";
import { Header } from "../../components/Header";

import {  useState } from 'react';
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

export function OrderHistory() {
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    
    return (
        <Container>
            <Header />

            <ButtonText
                className="button-text"
                title="< Voltar"
                onClick={() => navigate(-1)}
            />

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