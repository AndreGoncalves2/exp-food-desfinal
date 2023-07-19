import { Container } from './styles';

export function Button({ title, type, icon,...rest }) {
    return (
        <Container
            type={type}
            {...rest}
        >
            {icon}
            {title}
        </Container>
    );
};