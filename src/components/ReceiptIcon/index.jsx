import { Container } from './styles';

import { PiReceiptBold } from 'react-icons/pi'


export function ReceiptIcon({ value, onClick }) {
    return (
        <Container
        >
            <div>
                <button
                  onClick={onClick}
                >
                    <PiReceiptBold />
                </button>
                <span>
                    {value}
                </span>
            </div>
        </Container>
    )
}