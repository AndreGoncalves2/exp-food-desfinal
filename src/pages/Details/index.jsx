import { Container, Controls, Infos } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Stepper } from "../../components/Stepper";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import foodTest from '../../assets/foodtest.png';
import { PiReceiptBold } from 'react-icons/pi'

import { useState } from "react";

export function Details() {
    const [ingredients, setIngredients] = useState(["alface", "cebola", "pão naan"])

    return (
        <Container>
            <Header />
            <div className="details-wrapper">
                <main>
                    <ButtonText 
                        title="< voltar"
                        className="button-text"
                    />

                    <img src={foodTest} alt="Foto do prato" />
                    
                    <Infos>
                        <h2>Salada Ravanello</h2>
                        
                        <p>
                            Rabanetes, folhas verdes e 
                            molho agridoce salpicados com gergelim.
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

                            <Controls>
                                <Stepper />

                                <Button 
                                    icon={<PiReceiptBold/>}
                                    title="pedir ∙ R$ 25,00"
                                />

                            </Controls>
                        </Infos>
                    </main>

                    <Footer /> 
                </div>
        </Container>
    );
};