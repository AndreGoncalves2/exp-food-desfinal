import { Container } from './styles';


import { ButtonText } from '../ButtonText';
import { api } from '../../services/api';
import { useOrder } from '../../hooks/orderContext';
import { useNavigate } from 'react-router-dom';

export function DishSmallCard({ img, title, removeText, removeFav, orderId, dishId, isFavorite }) {
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`
    const { setChangeOrder } = useOrder();

    const navigate = useNavigate();

    async function handleRemoveClick() {
        if (isFavorite) {
            try {
                const data = await api.delete(`/favorite/${dishId}`);
                removeFav(data);
            } catch (error) {
                alert(error.response.data.message);
            };

        } else {
            try {
                if (confirm("Deseja remover esse prato ?")) {
                    const data = await api.delete(`/order/${orderId}`);
                    setChangeOrder(data);
                };
    
            } catch (error) {
                alert(error.response.data.message);
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