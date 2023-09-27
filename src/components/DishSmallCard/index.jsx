import { Container } from './styles';


import { ButtonText } from '../ButtonText';
import { api } from '../../services/api';
import { useOrder } from '../../hooks/orderContext';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../hooks/alertContext';
import { ConfirmModal } from "../ConfirmModal";
import { useState } from 'react';

export function DishSmallCard({ img, title, removeText, removeFav, orderId, dishId, isFavorite }) {
    const [stateModal, setStateModal] = useState("");
    
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`

    const { handleAlertError } = useAlert();
    const { setChangeOrder } = useOrder();

    const navigate = useNavigate();

    async function removeDishFromOrder() {
        try {
            const data = await api.delete(`/order/${orderId}`);
            setChangeOrder(data);
            
        } catch (error) {
            if (error.response.data.message){
                handleAlertError(error.response.data.message, "error");
            } else {
                handleAlertError(error.message, "error");
            };
        };
    }

    async function handleRemoveClick() {
        if (isFavorite) {
            try {
                const data = await api.delete(`/favorite/${dishId}`);
                removeFav(data);

            } catch (error) {
                if (error.response.data.message){
                    handleAlertError(error.response.data.message, "error");
                } else {
                    handleAlertError(error.message, "error");
                };
            };

        } else {
            setStateModal("show-modal");
        };

    };

    return (
        <Container>
            {img &&

                <img
                    src={imgUrl} alt="" 
                    onClick={() => navigate(`/dish/${dishId}`)}
                />
            }

            <div>
                <h2>{title}</h2>
                
                <ButtonText
                    title={removeText}
                    onClick={handleRemoveClick}
                />
            </div>

            <ConfirmModal
                onClick={removeDishFromOrder}
                className={stateModal}
                setStateModal={setStateModal}
            />
        </Container>
    )
}