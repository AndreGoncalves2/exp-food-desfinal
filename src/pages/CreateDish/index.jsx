import { Container, FormNewDish } from "./styles";

import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { InputFake } from "../../components/InputFake";

export function CreateDish() {
    return (
        <Container>
            <Header />

            <ButtonText 
                title="< Voltar"
            />

            <h2>Novo prato</h2>

            <FormNewDish >
                <Input 
                    type="file"
                />

                <Input 
                    type="text"
                    label="Nome"
                    placeholder="Ex.: Salada Ceasar"
                />

                <Input 
                    type="text"
                    placeholder="refeição"
                />

                <InputFake 
                    title="Ingredientes"
                    is
                />

            </FormNewDish>
        </Container>
    )
}