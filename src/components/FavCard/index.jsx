import { Container } from './styles';


import { ButtonText } from '../ButtonText';
import { api } from '../../services/api';

export function FavCard({ img, title, removeText, orderId }) {
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`

    async function handleRemoveClick() {
        try {
            const { data } = await api.delete(`/order/${orderId}`);

        } catch (error) {
            alert(error)
        }
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