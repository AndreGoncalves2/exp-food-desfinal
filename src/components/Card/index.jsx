import { Container } from "./styles";

import { Button } from '../Button';
import { Stepper } from "../Stepper";

import { api } from "../../services/api";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GoPencil } from 'react-icons/go';

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../hooks/orderContext";

export function Card({ dishName, price, img, dishId }) {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    const [stepperCont, setStepperCont] = useState("");
   
    const { setChangeOrder } = useOrder();
    
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`
    
    async function handleFavorite() {

        if (isFavorite) {

            await api.delete(`/favorite/${dishId}`);
            setIsFavorite(!isFavorite);
            return;
        };

        await api.post("/favorite", { dishId });
        setIsFavorite(!isFavorite);
    };

    function handleCardIcon() {
        if (user.adm){
            return (
                <button 
                    className="heart" 
                    onClick={() => navigate(`/dish/${dishId}`)}
                >   
                <GoPencil />
                </button>
            )
        } else {
            return (
                <button 
                    className="heart" 
                    onClick={handleFavorite}
                >   
                {
                    isFavorite ? <AiFillHeart /> : <AiOutlineHeart />
                }
            </button>
            )
        }
    };

    async function handleAddOrder() {
        const numberPrice = price.replace(/[a-zA-Z$]/g, '').replace(',', '.');
        const totalPrice = numberPrice * stepperCont;
        try {
            const data = await api.post("/order", { stepperCont , totalPrice, id:dishId });
            setChangeOrder(data);
            
            alert("Produto adicionado");
        } catch(error){
            alert(error);
        };
    };

    useEffect(() => {
        async function loadFavorites() {
            try {
                const { data } = await api.get(`/favorite/${dishId}`);
                if(data) setIsFavorite(true);

            } catch(error) {
                if (error.response.status == 401) signOut();
                console.log(error.response);
            };
        };

        loadFavorites();

    }, []);

    return (
        <Container>

            {
                handleCardIcon()
            }
            
            { img &&
                <img src={imgUrl} alt="Foto do prato" 
                    onClick={() => navigate(`/dish/${dishId}`)}   
                />
            }

            <h3 className="dish-Name" >{dishName}</h3>
            <h3 className="price" >{price}</h3>

            <Stepper 
                setStepperCont={setStepperCont}
            /> 

            <Button 
                title="Incluir"
                onClick={handleAddOrder}
            />

        </Container>
    )
}