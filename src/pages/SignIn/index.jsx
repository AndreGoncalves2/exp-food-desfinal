import { Container } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate(); 
    
    return (
        <Container>
            <main>
                <Logo />

                <form action="">
                    <Input
                        type="email"
                        label="Email"
                        placeholder="exemplo@exemplo.com.br"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input 
                        type="password"
                        label="Senha"
                        placeholder="No mínimo 6 caracteres"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <Button 
                        title="Entrar"
                    />

                    <ButtonText 
                        title="Criar uma conta"
                        onClick={() => navigate("/signup")}
                    />
                </form>
            </main>
        </Container>
    )
}