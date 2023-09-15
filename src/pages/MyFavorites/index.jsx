import { Container, FavContainer } from "./styles";
import { Header } from "../../components/Header";
import { DishSmallCard } from "../../components/DishSmallCard";
import { ButtonText } from "../../components/ButtonText";
import { DeskHeader } from "../../components/DeskHeader";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Footer } from "../../components/Footer";

export function MyFavorites() {
    const [favorites, setFavorites] = useState([]);
    const [removeFav, setRemoveFav] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function getFavorites() {
            const { data } = await api.get("/favorite/user/index");
            setFavorites(data);
        };

        getFavorites();
    },[removeFav])
    return (
        <Container>
            <Header />
            <DeskHeader />

            <ButtonText
                className="button-text"
                title="< Voltar"
                onClick={() => navigate(-1)}
            />

            <h1>Meus Favoritos</h1>
            <FavContainer>
                {favorites &&
                    favorites.map((favorite) => (
                        <DishSmallCard
                            isFavorite={true}
                            dishId={favorite.dish_id}
                            removeFav={setRemoveFav}
                            key={favorite.id}
                            title={favorite.name}
                            img={favorite.img}
                            removeText="Remover dos favoritos"
                        />
                    ))
                }
            </FavContainer>
            <Footer />
        </Container>
    );
};