import { Container, Menu, MenuContainer } from './styles';

import { Logo } from '../Logo/';
import { Input } from '../Input';
import { ButtonText } from '../ButtonText';
import { Footer } from '../Footer';

import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'


import { ReceiptIcon } from '../ReceiptIcon';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useOrder } from '../../hooks/orderContext';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [classMenu, setClassMenu] = useState("");
    const [ContIcon, setContIcon] = useState("");

    const { getUnbilledOrder, changeOrder } = useOrder();

    const navigate = useNavigate();

    const { user, signOut } = useAuth();
    const isAdmin = Boolean(user.adm);

    function handleSignOut() {
        signOut();
        navigate("/");
    };

    useEffect(() => {
        async function loadOrders() {
            let quantity = 0;
            try {
                const data = await getUnbilledOrder();
                
                data.forEach((item) =>{
                    quantity += item.quantity
                });
    
                setContIcon(quantity);
            } catch (e) {
                console.log(error.response.data.message);
            };
        };

        loadOrders();
    }, [changeOrder])

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
            
            {!isOpen && <Logo onClick={() => navigate("/")} isAdmin={isAdmin} />}
            
            {   isOpen || !isAdmin && 
                <ReceiptIcon
                    onClick={() => navigate("/order")}
                    value={ContIcon}
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
                               <div className="controls">
                                    <ButtonText 
                                        title="Pedidos"
                                        onClick={() => navigate("/orderhistory")}
                                    />

                                   <ButtonText 
                                       title="Novo prato"
                                       onClick={() => navigate("/create")}
                                   />

                                   <ButtonText 
                                       title="Criar usuário"
                                   />
                               </div>
                            }

                            { !isAdmin &&
                                <div className="controls">
                                     <ButtonText 
                                        title="Meus favoritos"
                                        onClick={() => navigate("/favorite")}
                                    />

                                    <ButtonText 
                                        title="Meus pedidos"
                                        onClick={() => navigate("/orderhistory")}
                                    />
    
                                    <ButtonText 
                                        title="Sair"
                                        onClick={handleSignOut}
                                    />
                                </div>
                            }

                        </div>
                    </MenuContainer>
                    
                    <Footer />
                </div>
            </Menu>
        </Container>
    );
};