import { Container, Menu, MenuContainer } from './styles';

import { Logo } from '../Logo/';
import { Input } from '../Input';
import { ButtonText } from '../ButtonText';
import { Footer } from '../Footer';

import { FiMenu } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import { ReceiptIcon } from '../ReceiptIcon';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [classMenu, setClassMenu] = useState('');

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

            
                { !isOpen && (
                    <div className="container">

                    </div> 
                
                )}

            

            {isOpen && <h2>Menu</h2>}
            
            {!isOpen && <Logo />}
            
            {   !isOpen &&
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