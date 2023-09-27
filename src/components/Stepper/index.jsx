import { Container } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { useEffect, useState } from "react";

export function Stepper({ setStepperCont }) {
    const [value, setValue] = useState("01");

    function handleStepper(operation) {
        let newValue;

        if (operation == "+") {
            newValue = Number(value) + 1;
        } else {
            newValue = Number(value) - 1;
        };

        if (newValue <= 0) return;

        if (newValue < 10) {
            newValue = newValue.toString().padStart(2, '0');
        };
        
        setValue(newValue);
    };

    useEffect(() => {
        setStepperCont(value);
    },[value])

    return (
        <Container>
            <button
                className="button-subtract"
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