import { Container } from './styles';

import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

export function NewTag({ isNew, title }) {
    <Container>
        <span>{title}</span>
        <button>
            {
                isNew ? <AiOutlineClose /> : <AiOutlinePlus />
            }

            
        </button>
    </Container>
}