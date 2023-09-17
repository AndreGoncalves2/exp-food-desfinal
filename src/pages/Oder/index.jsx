import { Container, OrderContainer } from "./styles";

import { Header } from "../../components/Header";
import { DishSmallCard } from "../../components/DishSmallCard";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { DeskHeader } from "../../components/DeskHeader";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useOrder } from "../../hooks/orderContext";
import { Footer } from "../../components/Footer";

export function Order() {
    const [priceTotal, setPriceTotal] = useState(0);
    const navigate = useNavigate();

    const { order, setChangeOrder, changeOrder, getUnbilledOrder } = useOrder();

    async function handleFinalize() {
        if (order.length === 0) {
            alert("Pedido sem produtos.");
            return;
        };

        try {
            const sale = await api.post("/sale");
            setChangeOrder(sale);
            alert("Pedido Finalizado");
        } catch (error) {
            alert(error.response.data.message);
        }
    };
    
    useEffect(() => {
        async function loadOrder() {
            let total = 0;
            const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
            
            const data = await getUnbilledOrder();           
            
            data.forEach((order)=>{
                total += order.total_price; 
            });
            
            setPriceTotal(formattedPrice.format(total));
        };

        loadOrder();

    }, [changeOrder]);

    return (
        <Container>
            <Header />
            <DeskHeader />

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
                                dishId={prod.dish_id}
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
                className="button-finish"
                title="Finalizar"
                onClick={handleFinalize}
            />
            <Footer />
        </Container>
    );
};