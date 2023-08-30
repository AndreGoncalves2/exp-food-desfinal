import { Container } from './styles';


import { ButtonText } from '../ButtonText';
import { api } from '../../services/api';

export function DishSmallCard({ img, title, removeText, orderId, favoriteId, deleted, isFavorite }) {
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`

    async function handleRemoveClick() {
        if (isFavorite) {
            try {
                await api.delete(`/favorite/${favoriteId}`);
            } catch (error) {
                alert(error.response.data.message);
            };

        } else {
            try {
                if (confirm("Deseja remover esse prato ?")) {
                    await api.delete(`/order/${orderId}`);
                };
    
            } catch (error) {
                alert(error.response.data.message);
            };
        };

    };

    return (
        <Container>
            {img &&

                <img src={imgUrl} alt="" />
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