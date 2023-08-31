import { Container, AdmOrderCard, UserOrderCard } from "./style";
import { DropDown } from "../../components/DropDown";
import { Header } from "../../components/Header";

import {  useState } from 'react';
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function OrderHistory() {
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    const { user } = useAuth();
    
    return (
        <Container>
            <Header />

            <ButtonText
                className="button-text"
                title="< Voltar"
                onClick={() => navigate(-1)}
            />

            <h1>Pedidos</h1>
            { Boolean(user.adm) &&

                <AdmOrderCard>
                    <h4>00004 20/05 às 18h00</h4>
                    <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>

                    <DropDown 
                        setStatus={setStatus}
                        useCategories={[{color: "red", title: "pendente"}, {color: "yellow", title: "Preparando"}, {color: "green", title: "Entregue"}]}
                    />
                </AdmOrderCard>
            }

            { Boolean(!user.adm) &&
                <UserOrderCard>
                <h4>00004 20/05 às 18h00</h4>
                <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
            </UserOrderCard>

            }

        </Container>
    )
}