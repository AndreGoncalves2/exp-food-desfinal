import { Container } from "./styles";

import { Button } from '../Button';
import { Stepper } from "../Stepper";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import foodTest from '../../assets/foodtest.png';

export function Card({ dishName, price, isFavorite }) {
    return (
        <Container>
            {
                isFavorite ? <AiFillHeart className="heart" /> : <AiOutlineHeart className="heart" />
            }

            <img src={foodTest} alt="" />
            <h3 className="dish-Name" >{dishName}</h3>
            <h3 className="price" >{price}</h3>

            <Stepper /> 

            <Button 
                title="Incluir"
            />

        </Container>
    )
}