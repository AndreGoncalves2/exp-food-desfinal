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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function EditDish() {
    const { id } = useParams();

    const [dishId, setDishId] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState({});
    const [oldCategory, setOldCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [img, setImage] = useState(null);
    const [oldImg, setOldImg] = useState(null);

    const { signOut } = useAuth();
    const navigate = useNavigate();
    const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

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

        const form = new FormData();
        form.append("photo", img);

        form.append("name", name);
        form.append("description", description);
        form.append("category", category);
        form.append("price", price);
        form.append("ingredients", ingredients);
        form.append("id", id);
        form.append("oldImg", oldImg);

        try {
            await api.put("/dish", form);

            alert("Alterações aplicadas !");
            navigate("/");

        } catch (error) {
            if (error.response.status == "401") {
                alert(error.response.data.message);

                signOut();
                navigate("/");    

            } else {
                alert(error.response.data.message);
            };
        };
    };

    async function handleDelete(){
        try {
            await api.delete(`/dish/${dishId}`);
            alert("Excluído com sucesso !");
            
        } catch (error) {
            alert(error);
        };
    };

    function loadInfos(data) {
        setCategory(data.category);
        setOldCategory(data.category);
        setDescription(data.description);
        setName(data.name);
        setPrice(data.price);
        setOldImg(data.img);
        setDishId(data.id);
        setIngredients(data.ingredients.split(','));
    };

    useEffect(() => {
        async function FindDishInfos() {
            const { data } = await api.get(`/dish/${id}`);
            loadInfos(data);
        };

        FindDishInfos();
    },[]);

    return (
        <Container>
            <Header />

            <ButtonText
                className="button-text"
                title="< Voltar"
                onClick={() => navigate(-1)}
            />

            <FormNewDish >

                <h2>Editar prato</h2>

                <div className="file-input-wrapper">
                    <label htmlFor="file-input">
                        <FiUpload /> {
                            img ? "Selecione imagem para alterá-la" :  "Selecione imagem"
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
                    value={name}
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                    onChange={(e) => setName(e.target.value)}
                />

                <DropDown 
                    label="Categoria"
                    currentCategory={oldCategory}
                    setStatus={setCategory}
                    useCategories={[{title: "Refeição"}, {title: "Sobremesa"}, {title: "Bebidas"}]}
                />

                <InputFake 
                    title="Ingredientes"
                    dish_id={id}
                    setIngredients={setIngredients}
                />

                <Input 
                    label="Preço"
                    type="number"
                    
                    placeholder={formattedPrice.format(price)}
                    onBlur={(e) => e.target.value = ""}
                    onFocus={(e)=> e.target.value = ""}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <TextArea 
                    label="Descrição"
                    value={description}
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={(e) => setDescription(e.target.value)}
                />


                <div className="button-wrapper">
                    <Button
                        className="delete-button"
                        title="Excluir prato"
                        onClick={handleDelete}
                    
                    />

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