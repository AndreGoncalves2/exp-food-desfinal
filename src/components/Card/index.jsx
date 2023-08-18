import { Container } from "./styles";

import { Button } from '../Button';
import { Stepper } from "../Stepper";

import { api } from "../../services/api";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Card({ dishName, price, img, dishId }) {
    const { user } = useAuth();

    
    const [isFavorite, setIsFavorite] = useState(false);
    
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`
    
    async function handleFavorite() {
        console.log(dishId)
        setIsFavorite(!isFavorite);
    }

    
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
                <img src={imgUrl} alt="" />
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