import { Container } from './styles';

import polygon from "../../assets/polygon.svg";

export function Footer() {
    return (
        <Container>
            <div className="logo">
                <img src={polygon} alt="Imagem de um polígono" />

                <h4>food explorer</h4>
            </div>

           <div className="copyright">
                <h4>© 2023 - Todos os direitos reservados.</h4>
           </div>
        </Container>
    )
}