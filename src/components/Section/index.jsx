import { Container } from "./styles";
import { Card } from "../Card";

export function Section({ title, meals, desserts, drinks }) {
    return (
        <Container>
            <h2>{title}</h2>
            
            <div className="cards">
                { meals &&
                    meals.map((meal) => (
                        <Card
                            img={meal.img}
                            dishName={meal.name}
                            price={meal.price}
                        />
                    ))
                }
                
                { desserts &&
                    desserts.map((dessert) => (
                        <Card 
                            img={dessert.img}
                            dishName={dessert.name}
                            price={dessert.price}
                        />
                    ))
                }
                { drinks &&
                    drinks.map((drink) => (
                        <Card 
                            img={drink.img}
                            dishName={drink.name}
                            price={drink.price}
                        />
                    ))
                }
                
            </div>
        </Container>
    )
}