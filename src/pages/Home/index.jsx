import { Container, Introduction } from './styles'
import { Header } from '../../components/Header';

import macaronsUrl from '../../assets/macarons.png';

import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [dishes, setDishes] = useState([]);

    const dishFiltered = dishes.filter(d => d.category == "refeição")
    console.log(dishFiltered)
    useEffect(() => {
        async function findDishes() {
            const { data } = await api.get("/dish");
            setDishes(data);
        };
        findDishes();
    }, [])
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