import { Container } from "./styles";

export function TextArea({ label, placeholder, onChange, value }) {
    return (
        <Container>
            <label htmlFor="text-area">{label}</label>
            <textarea 
                value={value}
                id="text-area" 
                placeholder={placeholder}
                onChange={onChange}
            />
        </Container>
    )
}