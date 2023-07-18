import { Card } from "../Card";
import { Container } from "./styles";

export function Section({ title}) {
    return (
        <Container>
            <h2>{title}</h2>

            <Card 
                dishName="Salada Ravanello >"
                price="R$ 49,97"
            />
        </Container>
    )
}