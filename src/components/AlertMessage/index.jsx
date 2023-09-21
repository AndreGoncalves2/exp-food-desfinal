import { Container } from "./styles";
import error from "../../assets/icons/error.svg";
import warning from "../../assets/icons/warning.svg";
import ok from "../../assets/icons/ok.svg";

export function AlertMessage({ typeError, message, className }) {

  const icons = {
    "warning": warning,
    "error": error,
    "ok": ok
  };

      return (
        <Container >
          <div className={"container alert-box " + className}>
            <span className= {"message  "+ typeError + " " }>
              <img src={icons[typeError]} alt="" />
              {message}
            </span>
          </div>
        </Container>
    )
}