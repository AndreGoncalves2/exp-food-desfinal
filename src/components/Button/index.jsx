import { Container } from './styles';

export function Button({ title, type, icon, onClick,...rest }) {
    return (
        <Container
            type={type}
            onClick={onClick}
            {...rest}
        >   
            {icon}
            {title}
        </Container>
    );
};