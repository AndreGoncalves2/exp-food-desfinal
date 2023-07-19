import { Container } from './styles';

import { Logo } from '../Logo/';

import { FiMenu } from 'react-icons/fi'
import { ReceiptIcon } from '../ReceiptIcon';
import { Menu } from '../Menu';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    function handleMenuClick() {
        setIsOpen(true);
        alert(isOpen)
    };

    return (
        <Container>
            <button
                onClick={handleMenuClick}
            >
                <FiMenu />
            </button>

            <Logo />
            
            <ReceiptIcon 
                value="0"
            />

            <Menu 
                isOpen={isOpen}
            />
 
        </Container>
    )
}