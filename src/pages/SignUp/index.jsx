import { Container } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    const navigate = useNavigate();

    async function handleSignUp() {
        
        if (!name || !email ||!password) {
            alert("Preencha todos os campos");
            return;
        };

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso");
            signIn({email, password});
            navigate("/");
            
        }).catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
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
        </Container>
    );
};