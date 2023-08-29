import { Container } from './styles';

import { PiReceiptBold } from 'react-icons/pi'


export function ReceiptIcon({ value, onClick }) {
    return (
        <Container
            onClick={onClick}
        >
            <div>
                <button>
                    <PiReceiptBold />
                </button>
                <span>
                    {value}
                </span>
            </div>
        </Container>
    )
}