// Стили
import { styled } from "@linaria/react"

const Title = styled.h1`
    margin: 0;
    font-size: 48px;
    text-transform: capitalize;
`;

const Image = styled.img`
    transform: scale(3);
    align-self: center;
`
const Text = styled.p`
    margin: 0;
    font-size: 17px;
`
const MsgContainer = styled.div`
    display: flex;
    justify-content: center;
`


export default function PockemonCard({ pokemonData }) {

    if (Object.keys(pokemonData).length === 0) {
        return (
            <MsgContainer>
                <Text>Выберите покемона</Text>
            </MsgContainer>
        )
    }

    const { title, img, series, id, height, attack } = pokemonData;

    return (
        <>
            <Title>{title}</Title>
            <Image src={img} alt="Pokemon" />
            <div>
                <Text>Снялся в {series} сериях</Text>
                <Text>id: {id}</Text>
                <Text>height: {height}</Text>
                <Text>attack: {attack}</Text>
            </div>
        </>
    )
}