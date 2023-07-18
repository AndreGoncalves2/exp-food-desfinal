import { Container } from "./styles";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { useState } from "react";

export function Stepper() {
    const [value, setValue] = useState("01");

    function handleStepper(operation) {
        let newValue;

        if (operation == "+") {
            newValue = Number(value) + 1
        } else {
            newValue = Number(value) - 1
        };

        if (newValue <= 0) return;

        if (newValue < 10) {
            newValue = newValue.toString().padStart(2, '0')
        };
        
        setValue(newValue);
    };

    return (
        <Container>
            <button
                onClick={() => handleStepper('-')}
            >
                <AiOutlineMinus />
            </button>

            <span>{value}</span>

            <button
                onClick={() => handleStepper('+')}
            >
                <AiOutlinePlus />
            </button>
        </Container>
    );
};