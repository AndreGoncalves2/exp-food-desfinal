import { Container } from './styles';

export function Button({ title, type, icon, onClick,...rest }) {
    return (
        <Container
            type={type}
            {...rest}
            onClick={onClick}
        >   
            {icon}
            {title}
        </Container>
    );
};