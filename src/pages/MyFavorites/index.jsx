import { Container, FavContainer } from "./styles";
import { Header } from "../../components/Header";
import { FavCard } from "../../components/FavCard";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function MyFavorites() {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getFavorites() {
            const { data } = await api.get("/favorite/user/index");
            setFavorites(data);
        };

        getFavorites();
    },[])
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
                {favorites &&
                    favorites.map((favorite) => (
                        <FavCard 
                            title={favorite.name}
                            img={favorite.img}
                        />
                    ))
                }
            </FavContainer>
        </Container>
    );
};