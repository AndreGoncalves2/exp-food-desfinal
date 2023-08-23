import { Container } from "./styles";

import { Button } from '../Button';
import { Stepper } from "../Stepper";

import { api } from "../../services/api";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GoPencil } from 'react-icons/go';

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Card({ dishName, price, img, dishId }) {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    
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
    }

    useEffect(() => {
        api.get(`/favorite/${dishId}`).then((response) => {
            const [stateFavorite] = response.data;
            if (stateFavorite.dish_id == dishId) {
                setIsFavorite(true);
            };
            
        }).catch(() => {return});
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

            <Stepper /> 

            <Button 
                title="Incluir"
            />

        </Container>
    )
}