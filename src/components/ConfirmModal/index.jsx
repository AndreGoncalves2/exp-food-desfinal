import { useEffect, useState } from "react";
import { Container } from "./styled";

export function ConfirmModal({ className, setModalResponse, setStateModal, modalExecute }) {
    function handleConfirm(response) {
        setModalResponse(response);
        modalExecute(response);
        setStateModal("");
    };

    return (
        <Container>
        <div>
            <div className={"modal " + className }>
                <div className="modal-content">
                    <p>Deseja realmente excluir este item?</p>
                    <button onClick={() => handleConfirm(true)} className="btn-confirm">Excluir</button>
                    <button onClick={() => handleConfirm(false)} className="btn-cancel">Cancelar</button>
                </div>
            </div>
        </div>
        </Container>
    )
}