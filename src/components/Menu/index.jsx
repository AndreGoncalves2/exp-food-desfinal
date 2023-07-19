import { useState } from "react";
import { Container, MenuHeader } from "./styles";

import { AiOutlineClose } from 'react-icons/ai'

export function Menu({ isOpen }) {
    const [stateMenu, setStateMenu] = useState(true);
    return (
        <Container
        >
            <div
                className={stateMenu ? "menu-open" : "menu-close"}

            >
                <MenuHeader>
                    <button
                        onClick={() => setStateMenu(false)}
                    >
                        <AiOutlineClose />
                    </button>
                    <h3>Menu</h3>
                </MenuHeader>
            </div>
        </Container>
    )
}