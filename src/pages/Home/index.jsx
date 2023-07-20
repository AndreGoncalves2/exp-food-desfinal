import { Container, Introduction } from './styles'
import { Header } from '../../components/Header';

import macaronsUrl from '../../assets/macarons.png';

import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

export function Home() {
    return (
        <Container>
            <Header />
            <main>
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

                <Section 
                    title="Refeições"
                />

                <Section 
                    title="Pratos principais"
                />

                <Section 
                    title="Bebidas"
                />

                <Footer />
            </main>

        </Container>
    );
};