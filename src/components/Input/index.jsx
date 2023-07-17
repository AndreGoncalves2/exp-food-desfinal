import { Container } from "./styles";

export function Input({ type, placeholder, label, ...rest }) {
    return (
        <Container>
            <label>
                {label}
            </label>
                <input
                    {...rest}
                    type={type}
                    placeholder={placeholder}
                />

        </Container>
    );
};