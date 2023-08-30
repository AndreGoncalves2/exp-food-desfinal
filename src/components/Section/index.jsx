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
                            key={meal.id}
                            dishId={meal.id}
                            img={meal.img}
                            dishName={meal.name}
                            price={meal.price}
                        />
                    ))
                }
                
                { desserts &&
                    desserts.map((dessert) => (
                        <Card
                            key={dessert.id}
                            dishId={dessert.id}
                            img={dessert.img}
                            dishName={dessert.name}
                            price={dessert.price}
                        />
                    ))
                }
                { drinks &&
                    drinks.map((drink) => (
                        <Card
                            key={drink.id}
                            dishId={drink.id}
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