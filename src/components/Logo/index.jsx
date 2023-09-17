import { Container } from './styles';
import polygon from "../../assets/polygon.svg";
import { useNavigate } from 'react-router-dom';


export function Logo({ isAdmin, ...rest }) {
    const navigate = useNavigate();
    return (
        <Container
            onClick={() => navigate("/")}
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