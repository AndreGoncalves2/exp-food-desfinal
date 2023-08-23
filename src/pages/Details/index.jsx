import { Container, Controls, Infos } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Stepper } from "../../components/Stepper";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import foodTest from '../../assets/foodtest.png';
import { PiReceiptBold } from 'react-icons/pi'

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Details() {
    const [dish, setDish] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(dish)

    const imgUrl = `${api.defaults.baseURL}/dish/${dish.img}`;



    useEffect(() => {
        async function getCurrentDish() {
            const { data } = await api.get(`/dish/${id}`);
            setIngredients(data.ingredients.split(","));
            setDish(data);
        };
        getCurrentDish();
    },[])
    return (
        <Container>
            <Header />
            <div className="details-wrapper">
                <main>
                    <ButtonText 
                        title="< voltar"
                        className="button-text"
                        onClick={() => navigate(-1)}
                    />

                    <img src={imgUrl} alt="Foto do prato" />
                    
                    <Infos>
                        <h2>{dish.name}</h2>
                        
                        <p>
                            {dish.description}
                        </p>

                        <div className="ingredients">
                            {
                                ingredients.map((ingredient, index) => (
                                    <Tag 
                                        title={ingredient}
                                        key={index}
                                    />
                                ))
                            }
                        </div>

                        {    user.adm &&

                            <Button title="Editar pedido"/>
                        }

                        {    !user.adm &&

                            <Controls>
                                <Stepper />

                                <Button 
                                    icon={<PiReceiptBold/>}
                                    title={"pedir ∙" +  dish.price+ "add mascara"}
                                />
                            </Controls>
                        }

                    </Infos>
                </main>

                <Footer /> 
                </div>
        </Container>
    );
};