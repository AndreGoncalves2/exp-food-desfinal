import { Container } from './styles';

import { Logo } from '../Logo/';
import { Menu } from '../Menu';

import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'


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
        <Container className='mobile-header'>
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

            {isOpen && <h2 className="menu" >Menu</h2>}
            
            {!isOpen && <Logo onClick={() => navigate("/")} isAdmin={isAdmin} />}
            
            {   isOpen || !isAdmin && 
                <ReceiptIcon
                    onClick={() => navigate("/order")}
                    value={ContIcon}
                />
            } 

            <Menu 
                classMenu={classMenu} 
                isAdmin={isAdmin}
            />

        </Container>
    );
};