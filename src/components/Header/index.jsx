import { Container } from './styles';

import { Logo } from '../Logo/';

import { FiMenu } from 'react-icons/fi'
import { ReceiptIcon } from '../ReceiptIcon';

export function Header() {
    return (
        <Container>
            <FiMenu />
            <Logo />
            
            <ReceiptIcon 
                value="0"
            />
        </Container>
    )
}