import { Container } from "./styles";

import { Button } from '../Button';
import { Stepper } from "../Stepper";

import { api } from "../../services/api";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export function Card({ dishName, price, isFavorite, img }) {
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`
    
    return (
        <Container>
            {
                isFavorite ? <AiFillHeart className="heart" /> : <AiOutlineHeart className="heart" />
            }
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