import { Container } from "./styles";

export function TextArea({ label, placeholder }) {
    return (
        <Container>
            <label htmlFor="text-area">{label}</label>
            <textarea 
                id="text-area" 
                placeholder={placeholder}
            />
        </Container>
    )
}