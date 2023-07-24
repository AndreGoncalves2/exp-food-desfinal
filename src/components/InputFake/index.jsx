import { Tag } from "../Tag";
import { Container, Wrapper } from "./styles";

export function InputFake({ title }) {
    return (
        <Container>
            <h4>{title}</h4>

            <Wrapper>
                <Tag title="oi"/>
            </Wrapper>
        </Container>
    );
};