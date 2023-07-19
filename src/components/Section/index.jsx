import { Container } from "./styles";
import { Card } from "../Card";

export function Section({ title }) {
    return (
        <Container>
            <h2>{title}</h2>
            
            <div className="cards">
                <Card 
                    dishName="Salada Ravanello >"
                    price="R$ 49,97"
                />

                <Card 
                    dishName="pudin >"
                    price="R$ 49,97"
                />
                <Card 
                    dishName="pudin >"
                    price="R$ 49,97"
                />
                <Card 
                    dishName="pudin >"
                    price="R$ 49,97"
                />
                <Card 
                    dishName="pudin >"
                    price="R$ 49,97"
                />
            </div>
        </Container>
    )
}