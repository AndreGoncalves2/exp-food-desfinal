import { Container } from './styles';


import { ButtonText } from '../ButtonText';
import { api } from '../../services/api';

export function FavCard({ img, title, removeText, orderId, deleted }) {
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`

    async function handleRemoveClick() {
        try {
            if (confirm("Deseja remover esse prato ?")) {
                const data = await api.delete(`/order/${orderId}`);
                deleted(data);
            };

        } catch (error) {
            alert(error.response.data.message);
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