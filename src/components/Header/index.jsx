import { Container, Menu, MenuContainer } from './styles';

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
    const [isOpen, setIsOpen] = useState(false);
    const [classMenu, setClassMenu] = useState('');

    const isAdmin = true;

    return (
        <Container>
            <button
               onClick={() => {
                setIsOpen(prevent => !prevent)
                isOpen ? setClassMenu('menu-close') : setClassMenu('menu-open');
            }}
            >
                {
                    isOpen ? <AiOutlineClose /> : <FiMenu />
                }  
            </button>

            {isOpen && <h2>Menu</h2>}
            
            {!isOpen && <Logo isAdmin={isAdmin} />}
            
            {   isOpen || !isAdmin && 
                <ReceiptIcon     
                    value="0"
                />
            } 

            <Menu >   
                <div className={classMenu}>
                    <MenuContainer>
                        <Input
                            icon={<BiSearch />}
                            type="text"
                            placeholder="Busque por pratos ou ingredientes"
                        />

                        <div className="control-buttons">

                            { isAdmin && 
                                <ButtonText 
                                    title="Novo prato"
                                />
                            }

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