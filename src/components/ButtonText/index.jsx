import { Container } from "./style";

export function ButtonText({ title, onClick }) {
    return (
        <Container 
            onClick={onClick}
        >
            {title}
        </Container>
    );
};