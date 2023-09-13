import { Container } from "./styles"

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"
import { Input } from "../Input"
import { Logo } from "../Logo"

export function DeskHeader() {
    return (
        <Container className="desktop-header" >
            <Logo /> 
            <Input />
            <ButtonText title="Meus favoritos" />
            <ButtonText title="Novo prato" />
            <Button />
        </Container>
    )
};