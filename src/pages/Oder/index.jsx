import { Container, OrderContainer } from "./styles";

import { Header } from "../../components/Header";
import { DishSmallCard } from "../../components/DishSmallCard";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useOrder } from "../../hooks/orderContext";

export function Order() {
    const [priceTotal, setPriceTotal] = useState(0);
    const navigate = useNavigate();

    const { order, setOrder, changeOrder, setChangeOrder } = useOrder();
    
    useEffect(() => {
        async function getOrder() {
            let total = 0;
            const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
            
            const { data } = await api.get("/order");
            setOrder(data);
            
            data.forEach((order)=>{
                total += order.total_price; 
            });
            
            setPriceTotal(formattedPrice.format(total));
        };

        getOrder();
    }, [changeOrder])
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
                        <div                
                            key={prod.id}
                        >
                            <DishSmallCard
                                orderId={prod.id}
                                title={prod.name}
                                img={prod.img}
                                removeText="Remover dos pedidos"
                            />

                            <h3>{prod.quantity}x</h3>
                        </div>
                    ))
                }
            </OrderContainer>
            
            <h2>Total: {priceTotal}</h2>

            <Button 
                title="Avançar"
            />

        </Container>
    );
};