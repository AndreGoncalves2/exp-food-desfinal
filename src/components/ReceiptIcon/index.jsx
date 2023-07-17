import { Container } from './styles';

import { PiReceiptBold } from 'react-icons/pi'


export function ReceiptIcon({ value }) {
    return (
        <Container>
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