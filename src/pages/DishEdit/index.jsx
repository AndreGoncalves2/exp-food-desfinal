import { Container, Main } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import { AiOutlineUpload } from "react-icons/ai";

export function DishEdit() {
    return (
        <Container>
            <ButtonText title="< voltar"/>

            <h1>Editar Prato</h1>

            <Main>
                <Input
                    type="file"
                    label="Imagem do prato"
                    icon={<AiOutlineUpload />}
                />

                <Input
                    type="text"
                    label="Nome"
                    placeholder="Salada César"
                />

                <Input
                    type="text"
                    label="Categoria"
                />

                <Input
                    type="text"
                    label="Nome"
                    placeholder="Salada César"
                />

            </Main>

        </Container>
    );
};