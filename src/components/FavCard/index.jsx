import { Container } from './styles';


import { ButtonText } from '../ButtonText';
import { api } from '../../services/api';

export function FavCard({ img, title, removeText}) {
    const imgUrl = `${api.defaults.baseURL}/dish/${img}`
    return (
        <Container>
            {img &&

                <img src={imgUrl} alt="" />
            }

            <div>
                <h2>{title}</h2>
                <ButtonText title={removeText}/>
            </div>
        </Container>
    )
}