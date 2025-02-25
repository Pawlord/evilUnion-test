// Компоненты
import PockemonsLeft from "../layouts/pockemons-left";
import PockemonsRight from "../layouts/pockemons-right";
import PockemonButton from "./pockemon-button";
import PockemonCard from "./pockemon-card";

// Функции
import { useState } from "react";
import axios from "axios";

export default function PockemonMain({ pockemons }) {

    const [pokemonData, setPokemonData] = useState({});

    const handleClick = async (url) => {
        const { data } = await axios.get(url);
        console.log(data)

        const title = data.name;
        const id = data.id;
        const img = data.sprites.front_default;
        const height = data.height;
        const attack = data.stats.find(statInfo => statInfo.stat.name === 'attack').base_stat || 'Неизвестно';
        const series = data.moves.length;

        setPokemonData({
            title,
            img,
            id,
            height,
            attack,
            series,
        })
    }

    return (
        <>
            <PockemonsLeft>
                {
                    pockemons.map((pockemon, index) =>
                        <PockemonButton
                            key={index}
                            pockemonName={pockemon.name}
                            url={pockemon.url}
                            handleClick={handleClick} />)
                }
            </PockemonsLeft>

            <PockemonsRight>
                <PockemonCard pokemonData={pokemonData} />
            </PockemonsRight>
        </>)
}