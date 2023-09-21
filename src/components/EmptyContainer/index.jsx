import { Container } from "./styles";
import { PiMagnifyingGlassMinusBold }from "react-icons/pi";

export function EmptyContainer({ message }) {
    return (
        <Container className="tet" >
            <span><PiMagnifyingGlassMinusBold /></span>
            <h2>{message}</h2>
        </Container>
    )
}