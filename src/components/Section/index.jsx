import { Container } from "./styles";
import { Card } from "../Card";

export function Section({ title, meals, desserts, drinks }) {
    return (
        <Container>
            <h2>{title}</h2>
            
            <div className="cards">
                <div className="fora">

                <div className="gradient-left"> <span> aaaaaaaaa </span>  </div>
                { meals &&
                    meals.map((meal) => (
                        <Card
                            key={meal.id}
                            dishId={meal.id}
                            img={meal.img}
                            dishName={meal.name}
                            dishDescription={meal.description}
                            price={meal.price}
                        />
                    ))
                }
                <div className="gradient-right"> <span> aaaaaaaa </span> </div>
                </div>
                
                { desserts &&
                    desserts.map((dessert) => (
                        <Card
                            key={dessert.id}
                            dishId={dessert.id}
                            img={dessert.img}
                            dishName={dessert.name}
                            dishDescription={dessert.description}
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
                            dishDescription={drink.description}
                            price={drink.price}
                        />
                    ))
                }

            </div>
        </Container>
    )
}