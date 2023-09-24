import { Container } from "./styled";

export function ConfirmModal({ className,setStateModal, onClick }) {
    function handleExit() {
        setStateModal("");
    };

    return (
        <Container>
            <div>
                <div className={"modal " + className }>
                    <div className="modal-content">
                        <p>Deseja realmente excluir este item?</p>
                        <button onClick={onClick} className="btn-confirm">Excluir</button>
                        <button onClick={handleExit} className="btn-cancel">Cancelar</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}