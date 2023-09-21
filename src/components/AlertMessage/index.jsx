import { Container } from "./styles";
import error from "../../assets/icons/error.svg";
import warning from "../../assets/icons/warning.svg";
import ok from "../../assets/icons/ok.svg";

import { RxCross2 } from "react-icons/rx";

export function AlertMessage({ typeError, message, className, setState }) {

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
              <p>{message}</p>
              <i
                onClick={() => setState("hidden")}
              >
                <RxCross2 />
              </i>
            </span>
          </div>
        </Container>
    )
}