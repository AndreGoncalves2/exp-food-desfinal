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
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [classMenu, setClassMenu] = useState('');

    const navigate = useNavigate();

    const { user } = useAuth();
    const isAdmin = Boolean(user.adm);

    const { signOut } = useAuth();

    function handleSignOut() {
        signOut();
        navigate("/");
    };

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
                    onClick={() => navigate("/order")}
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
                                title="Meus favoritos"
                                onClick={() => navigate("/favorite")}
                            />

                            { isAdmin &&
                               <div className="adm-controls">

                                   <ButtonText 
                                       title="Novo prato"
                                       onClick={() => navigate("/create")}
                                   />

                                   <ButtonText 
                                       title="Criar usuário"
                                   />
                               </div>
                            }

                            <ButtonText 
                                title="Sair"
                                onClick={handleSignOut}
                            />
                        </div>
                    </MenuContainer>
                    
                    <Footer />
                </div>
            </Menu>
        </Container>
    );
};