import { Container } from "./styles";

export function TextArea({ label, placeholder, onChange }) {
    return (
        <Container>
            <label htmlFor="text-area">{label}</label>
            <textarea 
                id="text-area" 
                placeholder={placeholder}
                onChange={onChange}
            />
        </Container>
    )
}