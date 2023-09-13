import { Container } from './styles';
import polygon from "../../assets/polygon.svg";


export function Logo({ isAdmin, onClick, ...rest }) {
    return (
        <Container
            onClick={onClick}
            {...rest}
            className="logo"
            
        >
            <img src={polygon} alt="Ícone de um polígono" />

            <div>
                <h2>food Explorer</h2>
                {
                    isAdmin &&
                    <h4>admin</h4>
                }
            </div>
        </Container>
    )
}