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
import { api } from "../../services/api";

export function CreateDish() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [img, setImage] = useState(null);

    const edit = true;
    const navigate = useNavigate();

    function handleSetImg(event) {
        const file = event.target.files[0];
        setImage(file);
    };

    async function handleSubmit() {
        if (!name || !description || !category || !price || !ingredients) {
            return alert("Preencha todos os campos.");
        };

        if (!img) {
            return alert("Selecione uma imagem.");
        };
            const photo = new FormData();
            photo.append("photo", img);

        const dish = {
            name,
            description,
            category,
            price,
            ingredients
        };

        try {
            await api.post("/dish", dish);
            alert("Prato cadastrado com sucesso !");
            navigate("/");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            };
        };
    };

    function formatPrice(e) {
        const formattedInput = e.target.value.replace(/[^\d.,]+/g, "").replace(/\,/g, ".");
        
        const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
        .format(formattedInput);
        
        setPrice(formattedPrice);
    };

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
                        onChange={handleSetImg}
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
                    setDishCategory={setCategory}
                />

                <InputFake 
                    title="Ingredientes" 
                    setIngredients={setIngredients}
                />

                <Input 
                    label="Preço"
                    value={price}
                    onBlur={(e) => formatPrice(e)}
                    onFocus={(e)=> e.target.value = ""}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <TextArea 
                    label="Descrição"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={(e) => setDescription(e.target.value)}
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