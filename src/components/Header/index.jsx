import { Container, Menu, HeaderMenu, MenuContainer } from './styles';

import { Logo } from '../Logo/';
import { Input } from '../Input';
import { ButtonText } from '../ButtonText';
import { Footer } from '../Footer';

import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'


import { ReceiptIcon } from '../ReceiptIcon';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState('menu');

    function handleClassMenu() {
        if (isOpen == 'menu' || isOpen == 'menu-close menu') {
            document.querySelector('body').style.overflow = 'hidden';
            setIsOpen('menu-open menu')
        } else {
            document.querySelector('body').style.overflow = 'auto';
            setIsOpen('menu-close menu')
        };
    };

    return (
        <Container>
            <button
               onClick={handleClassMenu}
            >
                <FiMenu />
            </button>

            <Logo />
            
            <ReceiptIcon 
                value="0"
            />

            <Menu >   
                <div className={isOpen}>

                    <HeaderMenu >
                        <button
                            onClick={handleClassMenu}
                        >
                            <AiOutlineClose />
                        </button>

                        <h2>Menu</h2>
                    </HeaderMenu>
                    
                    <MenuContainer>
                        <Input
                            icon={<BiSearch />}
                            type="text"
                            placeholder="Busque por pratos ou ingredientes"
                        />

                        <div className="control-buttons">
                            <ButtonText 
                                title="Novo prato"
                            />

                            <ButtonText 
                                title="Sair"
                            />
                        </div>

                    </MenuContainer>  

                    <Footer />
                </div>
            </Menu>
        </Container>
    );
};