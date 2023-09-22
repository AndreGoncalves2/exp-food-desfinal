import { Container, Introduction } from './styles'
import { Header } from '../../components/Header';

import macaronsUrl from '../../assets/pngegg-1.png';

import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { DeskHeader } from '../../components/DeskHeader';
import { useAlert } from '../../hooks/alertContext';

export function Home() {
    const [meals, setMeals] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);

    const { message, type, state } = useAlert();

    async function findDishes(url="/dish") {

        const { data } = await api.get(`${url}`);
        
        try {
            data.forEach((dish) => {
                dish.price = `R$ ${dish.price.replace('.', ',')}`
            });
    
            const findByRefection = data.filter(d => d.category == "Refeição");
            setMeals(findByRefection);
    
            const findByDessert = data.filter(d => d.category == "Sobremesa");
            setDesserts(findByDessert);
            
            const findByDrinks = data.filter(d => d.category == "Bebidas");
            setDrinks(findByDrinks);
        } catch {
            return
        }
    };

    useEffect(() => {
        findDishes("/dish");
    }, []);

    return (
        <Container>
            <Header />
            <DeskHeader findDishes={findDishes}/>

            <main>
                <Introduction className="Introduction">
                    <img src={macaronsUrl} alt="Foto de vários macarons" />
                    <div>
                        <h3>Sabores inigualáveis</h3>
                        <p>
                            Sinta o cuidado do preparo com 
                            ingredientes selecionados.
                        </p>
                    </div>
                </Introduction>
                {   meals.length > 0 &&
                    <Section 
                        title="Refeições"
                        meals={meals}
                    />
                }

                {   desserts.length != 0 &&
                    <Section 
                        title="Sobremesas"
                        desserts={desserts}
                    />
                }

                {   drinks.length != 0 &&

                    <Section 
                        title="Bebidas"
                        drinks={drinks}
                    />
                }

            </main>
            
            <Footer />            
        </Container>
    );
};