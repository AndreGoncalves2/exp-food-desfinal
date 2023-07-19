import { Container } from "./style";

export function ButtonText({ title, onClick, className }) {
    return (
        <Container 
            onClick={onClick}
            className={className}
        >
            {title}
        </Container>
    );
};