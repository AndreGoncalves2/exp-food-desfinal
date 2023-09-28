import { Container } from "./styles";
import { Card } from "../Card";

import { PiCaretRightLight, PiCaretLeftLight } from "react-icons/pi"
import { useRef } from "react";

export function Section({ title, meals, desserts, drinks }) {
    const mealsRef = useRef(null);
    const dessertsRef = useRef(null);
    const drinksRef = useRef(null);

        const moveScroll = (direction, ref) => {
            const section = ref.current;
            
            if (direction == "left") {
                section.scrollLeft -= section.clientWidth
            } else {
                section.scrollLeft += section.clientWidth
            };
        };  

    return (
        <Container>
            <h2>{title}</h2>
            
            {meals &&

                <div className="meals-wrapper">
                    <div onClick={() => moveScroll("left", mealsRef)} className="gradient-left"> <span><PiCaretLeftLight /></span> </div>
                    <div onClick={() => moveScroll("right", mealsRef)} className="gradient-right"> <span><PiCaretRightLight /></span> </div>
                    <div className="meals" ref={mealsRef}>

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
                </div>
            }   


            {desserts &&
                <div className="desserts-wrapper">
                
                <div onClick={() => moveScroll("left", dessertsRef)} className="gradient-left"> <span><PiCaretLeftLight /></span> </div>
                <div onClick={() => moveScroll("right", dessertsRef)} className="gradient-right"> <span><PiCaretRightLight /></span> </div>
                <div className="desserts" ref={dessertsRef}>


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
            </div>
            }
            {drinks &&

                <div className="drinks-wrapper">
                <div onClick={() => moveScroll("left", drinksRef)} className="gradient-left"> <span><PiCaretLeftLight /></span> </div>
                <div onClick={() => moveScroll("right", drinksRef)} className="gradient-right"> <span><PiCaretRightLight /></span> </div>
                <div className="drinks" ref={drinksRef}>

        
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
            </div>
            }
        </Container>
    )
}