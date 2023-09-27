import { Container } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useAlert } from "../../hooks/alertContext";

export function SingIn() {
    const [email, setEmail] = useState("user@hotmail.com");
    const [password, setPassword] = useState("user123");

    const { signIn } = useAuth();
    const { handleAlertError } = useAlert();

    function handleSignIn() {
        if (!email || !password) {
            return handleAlertError("Preencha todos os campos.", "warning");
        };

        signIn({ email, password });
    };
    
    const navigate = useNavigate(); 
    
    return (
        <Container>
            <main>
                <Logo />

                <form >
                    <h3>Faça login</h3>
                    <Input
                        type="mail"
                        label="E-mail"
                        placeholder="exemplo@exemplo.com.br"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input 
                        type="password"
                        label="Senha"
                        value={password}
                        placeholder=""
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <Button
                        className="button-submit"
                        title="Entrar"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSignIn();
                        }}
                    />

                    <ButtonText
                        className="button-text"
                        title="Criar uma conta"
                        onClick={() => navigate("/signup")}
                    />
                </form>
            </main>
        </Container>
    )
}