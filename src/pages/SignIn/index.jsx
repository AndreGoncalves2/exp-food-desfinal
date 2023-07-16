import { Container } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";

export function SingIn() {
    return (
        <Container>
            <main>
                <Logo />

                <form action="">
                    <Input 
                        label="Email"
                        placeholder="exemplo@exemplo.com.br"
                    />

                    <Input 
                        label="Senha"
                        placeholder="No mínimo 6 caracteres"
                    />
                    
                    <Button 
                        title="Entrar"
                        type="submit"
                    />

                    <ButtonText 
                        title="Criar uma conta"
                    />
                </form>
            </main>
        </Container>
    )
}