import { Container } from "./styles"

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"
import { Input } from "../Input"
import { Logo } from "../Logo"

import { PiReceiptBold } from "react-icons/pi"
import { FiLogOut } from "react-icons/fi"
import { BiSearch } from "react-icons/bi"

import { useOrder } from "../../hooks/orderContext"
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function DeskHeader({ findDishes }) {
    const { getUnbilledOrder, changeOrder } = useOrder();
    const [orderCont, setOrderCont] = useState("");

    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        signOut();
        navigate("/");
    };

    async function searchDishes(name) {
        if (name.length == 0) {
            findDishes();
        };
        
        findDishes(`/dish/${name}/all`);
    };

    useEffect(() => {
        async function loadOrders() {
            let quantity = 0;

            try {
                const data = await getUnbilledOrder();

                data.forEach((item) =>{
                    quantity += item.quantity
                });
    
                setOrderCont(quantity);
            } catch (e) {
                console.log(error.response.data.message);
            };
        };

        loadOrders();

    }, [changeOrder]);

    return (
        <Container className="desktop-header" >
            {   Boolean(user.adm) && 
                <div>
                    <Logo className="logo"  isAdmin={Boolean(user.adm)}/> 

                    <Input 
                        icon={<BiSearch />}
                        type="text"
                        placeholder="Busque por pratos ou ingredientes"

                        onChange={(e) => searchDishes(e.target.value)}
                    />

                    <ButtonText 
                        title="Novo prato" 
                        className="button-text" 

                        onClick={() => navigate("/create")}
                    />

                    <Button 
                        icon={<PiReceiptBold/>}
                        title={"Pedidos"}
                        className="order-button"

                        onClick={() => navigate("/orderhistory")}
                    />

                    <button 
                        className="logOut"

                        onClick={handleSignOut}
                    >
                        <FiLogOut />
                    </button>
                </div>
            }

            { Boolean(!user.adm) && 
                <div>
                    <Logo className="logo"  isAdmin={Boolean(user.adm)}/> 

                    <Input 
                        icon={<BiSearch />}
                        type="text"
                        placeholder="Busque por pratos ou ingredientes"

                        onChange={(e) => searchDishes(e.target.value)}
                    />

                    <ButtonText 
                        title="Meus favoritos" 
                        className="button-text" 

                        onClick={() => navigate("/favorite")}
                    />

                    <ButtonText 
                        title="Histórico de pedidos" 
                        className="button-text" 

                        onClick={() => navigate("/orderhistory")}
                    />

                    <Button 
                        icon={<PiReceiptBold/>}
                        title={"Pedidos" + ` (${orderCont})`}
                        className="order-button"

                        onClick={() => navigate("/order")}
                    />

                    <button 
                        className="logOut"

                        onClick={handleSignOut}
                    >
                        <FiLogOut />
                    </button>
                </div>
            }

        </Container>
    )
};