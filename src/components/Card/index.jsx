import { Container } from "./styles";

import { Button } from '../Button';
import { Stepper } from "../Stepper";

import { api } from "../../services/api";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useEffect, useState } from "react";

export function Card({ dishName, price, img, dishId }) {
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
            <button 
                className="heart" 
                onClick={handleFavorite}
            >
                {
                    isFavorite ? <AiFillHeart /> : <AiOutlineHeart />
                }

            </button>
            
            { img &&
                <img src={imgUrl} alt="Foto do prato" />
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