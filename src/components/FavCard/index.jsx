import { Container } from './styles';


import { ButtonText } from '../ButtonText';

export function FavCard() {
    const url = "src/assets/foodtest.png"
    return (
        <Container>
            <img src={url} alt="" />

            <div>
                <h2>Salada</h2>
                <ButtonText title="Remover dos Favoritos"/>
            </div>
        </Container>
    )
}