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

import { useAlert } from "../../hooks/alertContext";


export function Card({ dishName, price, img, dishId , dishDescription, className }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [stepperCont, setStepperCont] = useState("");
    const [totalPrice, setTotalPrice] = useState();
    const [formattedPrice, setFormattedPrice] = useState("");
    
    const navigate = useNavigate();

    const { user, signOut } = useAuth();
    const { setChangeOrder } = useOrder();
    const { handleAlertError } = useAlert();
    
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
        if (user.adm) {
            return (
                <button 
                    className="heart" 
                    onClick={() => navigate(`/dish/edit/${dishId}`)}
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
        try {
            const data = await api.post("/order", { stepperCont , totalPrice, id:dishId });
            setChangeOrder(data);

            handleAlertError("Produto adicionado", "ok")
        } catch(error){
            handleAlertError(error, "erro");
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
    
    useEffect(() => {
        const numberPrice = price.replace(/[a-zA-Z$]/g, '').replace(',', '.');
        const priceTotal = numberPrice * stepperCont;
        setTotalPrice(priceTotal);

        
        setFormattedPrice( new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
        .format(priceTotal));
        
    }, [stepperCont])

    return (
        <Container className={className} >

            {
                handleCardIcon()
            }
            
            { img &&
                <img src={imgUrl} alt="Foto do prato" 
                    onClick={() => navigate(`/dish/${dishId}`)}   
                />
            }

            <h3 className="dish-Name" >{dishName}</h3>
            <p className="description">{dishDescription}</p>
            <h3 className="price" >{user.adm ? price : formattedPrice}</h3>

            {   Boolean(!user.adm) &&

                <div className="card-controls">    
                    <Stepper 
                        setStepperCont={setStepperCont}
                    /> 

                    <Button
                        className="button"
                        title="Incluir"
                        onClick={handleAddOrder}
                    />
                </div>
            }
        </Container>
    )
}