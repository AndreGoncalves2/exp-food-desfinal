import { Container } from "./styles";
import { Card } from "../Card";

import { PiCaretRightLight, PiCaretLeftLight } from "react-icons/pi"
import { useRef } from "react";

export function Section({ title, meals, desserts, drinks }) {
    const sectionRef = useRef(null);

        const moveScroll = (direction) => {
            const section = sectionRef.current;
            if (direction == "left") {

                section.scrollLeft -= section.clientWidth
            } else {
                
                section.scrollLeft += section.clientWidth
            }
            

        };  

    return (
        <Container>
            <h2>{title}</h2>
            
            <div className="meals" ref={sectionRef}>
                <div onClick={() => moveScroll("left")} className="gradient-left"> <span><PiCaretLeftLight /></span> </div>
                <div onClick={() => moveScroll("right")} className="gradient-right"> <span><PiCaretRightLight /></span> </div>

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
            </div>

            <div className="desserts">
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
            </div>

            <div>
                { drinks &&
                    drinks.map((drink) => (
                        <Card
                            className="drink"
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