import { Container, Introduction } from './styles'
import { Header } from '../../components/Header';

import macaronsUrl from '../../assets/macarons.png';

import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [meals, setMeals] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function findDishes() {

            const { data } = await api.get("/dish");

            data.forEach((dish) => {
                dish.price = `R$ ${dish.price.replace('.', ',')}`
            });

            const findByRefection = data.filter(d => d.category == "Refeição");
            setMeals(findByRefection);

            const findByDessert = data.filter(d => d.category == "Sobremesa");
            setDesserts(findByDessert);
            
            const findByDrinks = data.filter(d => d.category == "Bebidas");
            setDrinks(findByDrinks);
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
                    meals={meals}
                />

                <Section 
                    title="Sobremesas"
                    desserts={desserts}
                />

                <Section 
                    title="Bebidas"
                    drinks={drinks}
                />

            </main>
            
            <Footer />
        </Container>
    );
};