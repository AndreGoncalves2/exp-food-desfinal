import { Container, OrderContainer } from "./styles";

import { Header } from "../../components/Header";
import { FavCard } from "../../components/FavCard";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Order() {
    const [order, setOrder] = useState([]);
    const [priceTotal, setPriceTotal] = useState(0);
    const navigate = useNavigate();
    console.log(priceTotal);

    console.log(order)
    useEffect(() => {
        async function getOrder() {
            const { data } = await api.get("/order");
            setOrder(data);

            data.forEach((order) => {
                setPriceTotal(priceTotal + order.total_price)
            })
        };

        getOrder();
    },[])
    return (
        <Container>
            <Header />
            <ButtonText
                className="button-text"
                title="< Voltar"
                onClick={() => navigate(-1)}
            />

            <h1>Meu pedido</h1>

             <OrderContainer>
                {order &&
                   order.map((prod) => (
                        <FavCard 
                            title={prod.name}
                            img={prod.img}
                            removeText="Remover dos pedidos"
                        />
                    ))
                }
            </OrderContainer>
            
            <h2>Total: R$ 103,88</h2>

            <Button 
                title="Avançar"
            />

        </Container>
    );
};