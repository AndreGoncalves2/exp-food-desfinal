import { Container } from "./styled";

import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

export function Tag({ title, isNew, onChange, onClick}) {
    return (
        <Container $isNew={isNew} >
            { 
                isNew ?
                <input
                    type="text" 
                    placeholder="Adicionar"
                    onChange={onChange}
                    
                />
                : <input 
                        type="teste" 
                        placeholder="Adicionar" 
                        readOnly
                        value={title}
                    />
            }

            {
               <button onClick={onClick}> { isNew ? <AiOutlinePlus /> : <AiOutlineClose /> }</button>
            }
        </Container>
    );
};