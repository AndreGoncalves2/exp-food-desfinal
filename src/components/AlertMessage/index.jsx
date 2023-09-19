import { Container } from "./styles";

export function AlertMessage({ typeError, message, className }) {
      return (
        <Container className={"alert-box "  }>
             <span class={"message "+ typeError + " " + className }><i class="icon icon-hand-paper-o"></i>{message}</span>
        </Container>
    )
}