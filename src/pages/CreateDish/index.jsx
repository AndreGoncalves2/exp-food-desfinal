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

export function CreateDish() {
    const edit = false;

    return (
        <Container>
            <Header />

            <ButtonText
                className="button-text"
                title="< Voltar"
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
                />

                <DropDown 
                    label="Categoria"
                    title="Refeição"

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

                <Button 
                    title="Salvar alterações"
                    className="save"
                />

            </FormNewDish>
            <Footer />
        </Container>
    )
}