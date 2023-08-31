import { Container, Controls, Infos } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Stepper } from "../../components/Stepper";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { PiReceiptBold } from 'react-icons/pi'

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useOrder } from "../../hooks/orderContext";

export function Details() {
    const [dish, setDish] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [stepperCont, setStepperCont] = useState("");

    const { setChangeOrder } = useOrder();

    const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    const imgUrl = `${api.defaults.baseURL}/dish/${dish.img}`;

    async function handleAddOrder() {
        const totalPrice = dish.price * stepperCont;
        try {
            const data = await api.post("/order", { stepperCont , totalPrice, id });
            setChangeOrder(data);
            alert("Produto adicionado");

        } catch(error){
            alert(error.response.data.message);
        };
    };

    useEffect(() => {
        async function getCurrentDish() {
            const { data } = await api.get(`/dish/${id}`);
            setIngredients(data.ingredients.split(','));
            setDish(data);
        };
        getCurrentDish();
    },[]);

    return (
        <Container>
            <Header />
            <div>
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
                            
                            <p>{dish.description}</p>

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

                            {    Boolean(user.adm) &&

                                <Button title="Editar pedido" 
                                    onClick={() => navigate(`/dish/edit/${dish.id}`)}
                                />
                            }

                            {    Boolean(!user.adm) &&

                                <Controls>
                                    <Stepper
                                        setStepperCont={setStepperCont}
                                    />

                                    <Button 
                                        icon={<PiReceiptBold/>}
                                        title={"pedir ∙ " + formattedPrice.format(dish.price * stepperCont)}
                                        onClick={handleAddOrder}
                                    />
                                </Controls>
                            }

                        </Infos>
                    </main>
                </div>
            </div>
        <Footer /> 
        </Container>
    );
};