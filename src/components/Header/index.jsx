import { Container, Menu } from './styles';

import { Logo } from '../Logo/';

import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import { ReceiptIcon } from '../ReceiptIcon';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    function handleButtonMenuClick() {
        setIsOpen(prevent => !prevent);
        console.log(isOpen)
    }

    return (
        <Container>
            <button
                onClick={handleButtonMenuClick}
            >
                <FiMenu />
            </button>

            <Logo />
            
            <ReceiptIcon 
                value="0"
            />

            <Menu
                
            >   
                <div
                    className={isOpen ? "menu-open" : "menu-close"}
                >

                    <button
                        onClick={handleButtonMenuClick}
                    >
                        <AiOutlineClose />
                    </button>
                </div>

            </Menu>
 
        </Container>
    )
}