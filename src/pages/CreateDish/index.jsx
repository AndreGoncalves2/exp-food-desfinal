import { Container, FormNewDish } from "./styles";

import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputFake } from "../../components/InputFake";
import { TextArea } from "../../components/TextArea";
import { Footer } from "../../components/Footer";
import { DropDown } from "../../components/DropDown";
import { DeskHeader } from "../../components/DeskHeader";

import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useAlert } from "../../hooks/alertContext";

export function CreateDish() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [img, setImage] = useState(null);

    const { handleAlertError } = useAlert();
    const { signOut } = useAuth();

    const navigate = useNavigate();

    function handleSetImg(event) {
        const file = event.target.files[0];
        setImage(file);
    };

    async function handleSubmit() {
        if (!name || !description || !category || !price || ingredients == '') {
            return handleAlertError("Preencha todos os campos.", "warning");
        };

        if (!img) {
            return handleAlertError("Selecione uma imagem.", "warning");
        };

        const form = new FormData();
        form.append("photo", img);

        form.append("name", name);
        form.append("description", description);
        form.append("category", category);
        form.append("price", price);
        form.append("ingredients", ingredients);

        try {
            await api.post("/dish", form);
            handleAlertError("Prato cadastrado com sucesso !", "ok");
            navigate("/");
        } catch (error) {
            if (error.response.status == "401") {
                handleAlertError(error.response.data.message, "error");
                signOut();
                navigate("/");                
            } else {
                handleAlertError(error.response.data.message, "error");
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
            <DeskHeader />
            <main>
                <ButtonText
                    className="button-text"
                    title="< Voltar"
                    onClick={(event) => {
                        event.preventDefault();
                        navigate(-1)
                    }}
                />

                <FormNewDish >

                    <h2>Novo prato</h2>

                    <div className="new-dish-header">
                        <div className="file-input-wrapper">
                            <label htmlFor="file-input">
                                <FiUpload /> {
                                    "Selecione imagem"
                                }
                            </label>

                            <Input
                                label="Imagem do prato"
                                id="file-input"
                                type="file"
                                onChange={handleSetImg}
                            />
                        </div>

                        <Input
                            className="input-name"
                            label="Nome"
                            type="text"
                            placeholder="Ex.: Salada Ceasar"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <DropDown
                            className="category"
                            label="Categoria"
                            currentCategory={"Refeição"}
                            setStatus={setCategory}
                            useCategories={[{title: "Refeição"}, {title: "Sobremesa"}, {title: "Bebidas"}]}
                        />
                    </div>
                    
                    <div className="new-dish-body">
                        <InputFake 
                            title="Ingredientes" 
                            setIngredients={setIngredients}
                        />

                        <Input 
                            label="Preço"
                            value={price}
                            placeholder="R$ 0,00"
                            onBlur={(e) => formatPrice(e)}
                            onFocus={(e)=> e.target.value = ""}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <TextArea 
                        label="Descrição"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={(e) => setDescription(e.target.value)}
                    />


                    <div className="button-wrapper">
                        <Button
                            title="Salvar alterações"
                            className="save"
                            onClick={(event) => {
                                event.preventDefault();
                                handleSubmit();
                            }}
                        />  
                    </div>

                </FormNewDish>
            </main>

            <Footer />
        </Container>
    )
}