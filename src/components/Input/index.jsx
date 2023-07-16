import { Container } from "./styles";

export function Input({ type, placeholder, label }) {
    return (
        <Container>
            <label>
                {label}
            </label>
                <input
                    type={type}
                    placeholder={placeholder}
                />

        </Container>
    );
};