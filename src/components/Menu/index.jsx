
import { Container, MenuContainer, DishModal } from "./styles";

import { BiSearch } from "react-icons/bi";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Footer } from "../Footer";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Menu({ classMenu, isAdmin }) {
    const [dishes, setDishes] = useState([])
    const [onSearch, setOnSearch] = useState(false);
    const navigate = useNavigate();

    const { signOut } = useAuth();

    function handleSignOut() {
        signOut();
        navigate("/");
    };

    async function searchDishes(name) {
        if (name.length == 0) {
            setDishes([]);
            setOnSearch(false);

            return;
        };

        setOnSearch(true);
        const { data } = await api.get(`/dish/${name}/all`);
        setDishes(data);
    };

    return (
        <Container >
            <div className={classMenu}>
                <MenuContainer>
                    <Input
                        className="search-input"
                        icon={<BiSearch />}
                        type="text"
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(e) => searchDishes(e.target.value)}
                    />
                    {onSearch &&
                        <DishModal >
                            <div className="cards-search">
                            {
                                dishes.length == 0 &&
                                <span>Prato ou ingrediente nao cadastrado</span>
                            }
                                {
                                    dishes.map((dish, index) => (
                                        <div 
                                            className="card-search" 
                                            key={index}
                                            onClick={() => navigate(`/dish/${dish.id}`)}
                                        >   
                                            <img src={`${api.defaults.baseURL}/dish/${dish.img}`} alt="Foto do prato" />
                                            <h5>{dish.name}</h5>
                                        </div>
                                    ))
                                }
                            </div>
                        </DishModal>
                    }

                    <div className="control-buttons">
                        { isAdmin &&
                            <div className="controls">
                                <ButtonText 
                                    title="Pedidos"
                                    onClick={() => navigate("/orderhistory")}
                                />

                                <ButtonText 
                                    title="Novo prato"
                                    onClick={() => navigate("/create")}
                                />

                                <ButtonText 
                                    title="Criar usuário"
                                />
                            </div>
                        }

                        { !isAdmin &&
                            <div className="controls">
                                    <ButtonText 
                                    title="Meus favoritos"
                                    onClick={() => navigate("/favorite")}
                                />

                                <ButtonText 
                                    title="Meus pedidos"
                                    onClick={() => navigate("/orderhistory")}
                                />

                                <ButtonText 
                                    title="Sair"
                                    onClick={handleSignOut}
                                />
                            </div>
                        }
                    </div>
                </MenuContainer>
                
            <Footer />
            </div>
        </Container>
    )
}