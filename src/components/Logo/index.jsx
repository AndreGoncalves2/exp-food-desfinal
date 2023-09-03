import { Container } from './styles';
import polygon from "../../assets/polygon.svg";


export function Logo({ isAdmin, onClick }) {
    return (
        <Container
            onClick={onClick}
        >
            <img src={polygon} alt="Ícone de um polígono" />
            <h1>food Explorer</h1>
            {
                isAdmin &&
                <h4>admin</h4>
            }
        </Container>
    )
}