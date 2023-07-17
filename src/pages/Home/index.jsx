import { Container, Introduction } from './styles'
import { Header } from '../../components/Header';

import macaronsUrl from '../../assets/macarons.png';

export function Home() {
    return (
        <Container>
            <Header />
            <Introduction>
                <img src={macaronsUrl} alt="Foto de vários macarons" />
                <div>
                    <h3>Sabores inigualáveis</h3>
                    <p>
                        Sinta o cuidado do preparo com 
                        ingredientes selecionados.
                    </p>
                </div>
            </Introduction>
        </Container>
    );
};