import { Container, FavContainer } from "./styles";
import { Header } from "../../components/Header";
import { FavCard } from "../../components/FavCard";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

export function MyFavorites() {
    const navigate = useNavigate();
    return (
        <Container>
            <Header />
            <ButtonText
                className="button-text"
                title="< Voltar"
                onClick={() => navigate(-1)}
            />

            <h1>Meus Favoritos</h1>
            <FavContainer>
                <FavCard />
                <FavCard />
                <FavCard />
                <FavCard />
            </FavContainer>
        </Container>
    );
};