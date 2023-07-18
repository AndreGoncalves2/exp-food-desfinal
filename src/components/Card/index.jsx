import { Container } from "./styles";

import { Button } from '../Button';
import { Stepper } from "../Stepper";
import foodTest from '../../assets/foodtest.png';

export function Card({ dishName, price}) {
    return (
        <Container>
            <img src={foodTest} alt="" />
            <h3>{dishName}</h3>
            <h3>{price}</h3>

            <Stepper /> 
            <Button 
                title="Incluir"
            />
        </Container>
    )
}