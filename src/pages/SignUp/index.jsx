import { Container } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useAlert } from '../../hooks/alertContext';
import { AlertMessage } from '../../components/AlertMessage';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { handleAlertError, message, type, state } = useAlert();
    const { signIn } = useAuth();

    const navigate = useNavigate();

    async function handleSignUp() {
        
        if (!name || !email ||!password) {
            handleAlertError("Preencha todos os campos", "warning");
            return;
        };

        api.post("/users", { name, email, password })
        .then(() => {
            handleAlertError("Usuário cadastrado com sucesso", "ok");
            signIn({email, password});
            navigate("/");
            
        }).catch(error => {
            if (error.response) {
                handleAlertError(error.response.data.message, "error");
            } else {
                handleAlertError("Não foi possível cadastrar", "error");
            };
        });
    };

    return (
        <Container>
            <main>                
                <Logo />
                
                <form >
                    <h3>Crie sua conta</h3>
                    <Input
                        type="text"
                        label="Seu nome"
                        placeholder="Exemplo: Maria da Silva"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        type="email"
                        label="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        label="Senha"
                        placeholder="No mínimo 6 caracteres"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        title="Criar conta"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSignUp();
                        }}
                    />

                    <ButtonText
                        title="Já tenho uma conta"
                        onClick={() => navigate("/")}
                    />
                </form>
            </main>

            <AlertMessage
                className={state}
                message={message} 
                typeError={type}
            />
        </Container>
    );
};