import { Container, FormNewDish } from "./styles";

import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputFake } from "../../components/InputFake";
import { TextArea } from "../../components/TextArea";
import { Footer } from "../../components/Footer";
import { DropDown } from "../../components/DropDown";

import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function CreateDish() {
    const [name, setName] = useState("");
    const [dishCategory, setDishCategory] = useState("");

    const edit = true;
    const navigate = useNavigate();

    function handleSubmit() {
        console.log(name);
        console.log(dishCategory)
    }

    return (
        <Container>
            <Header />

            <ButtonText
                className="button-text"
                title="< Voltar"
                onClick={() => navigate(-1)}
            />

            <FormNewDish >

                <h2>Novo prato</h2>

                <div className="file-input-wrapper">
                    <label htmlFor="file-input">
                        <FiUpload /> {
                            edit ? "Selecione imagem para alterá-la" :  "Selecione imagem"
                        }
                    </label>
                    <Input
                        id="file-input"
                        type="file"
                    />
                </div>

                <Input 
                    label="Nome"
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                    onChange={(e) => setName(e.target.value)}
                />

                <DropDown 
                    label="Categoria"
                    setName={setDishCategory}
                />

                <InputFake 
                    title="Ingredientes" 
                />

                <Input 
                    label="Preço"
                    type="number"
                    placeholder="R$ 00,00"
                />

                <TextArea 
                    label="Descrição"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                />


                <div className="button-wrapper">
                    { edit &&
                        <Button
                            className="delete-button"
                            title="Excluir prato"
                        
                        />
                    }
 
                        <Button
                            title="Salvar alterações"
                            className="save"
                            onClick={handleSubmit}
                        />  
                </div>

            </FormNewDish>
            <Footer />
        </Container>
    )
}