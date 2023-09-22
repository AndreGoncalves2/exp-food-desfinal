import { Container } from './styles';


import { ButtonText } from '../ButtonText';
import { api } from '../../services/api';
import { useOrder } from '../../hooks/orderContext';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../hooks/alertContext';

export function DishSmallCard({ img, title, removeText, removeFav, orderId, dishId, isFavorite }) {
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`

    const { handleAlertError, openModal, setModalExecute } = useAlert();
    const { setChangeOrder } = useOrder();

    const navigate = useNavigate();

    function deleteDish() {
        
            console.log("DELETED");

        
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
            try {
                setModalExecute(deleteDish)
                openModal();
                if (confirm("Deseja remover esse prato ?")) {
                    const data = await api.delete(`/order/${orderId}`);
                    setChangeOrder(data);
                };
            } catch (error) {
                if (error.response.data.message){
                    handleAlertError(error.response.data.message, "error");
                } else {
                    handleAlertError(error.message, "error");
                };
            };
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
        </Container>
    )
}