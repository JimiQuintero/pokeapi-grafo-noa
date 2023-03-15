import React, { useEffect, useState } from "react";
import ForceGraph3D from "react-force-graph";
import getPokemon from "../api";

function Graph() {
  const [pokeData, setPokeData] = useState([]);
  console.log(pokeData);
  useEffect(() => {
    const fetPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokeData(pokemonsRes);
    };
    fetPokemons();
  }, []);

  return (
    <div style={{ height: "600px" }}>
      <ForceGraph3D
        graphData={{
          nodes: pokeData.map((pokemon) => ({
            id: pokemon.name,
            name: pokemon.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokeData.indexOf(pokemon) + 1
            }.png`,
          })),
          links: [],
        }}
        nodeThreeObject={({ img }) => {
          const imgTexture = new THREE.TextureLoader().load(img);
          const material = new THREE.SpriteMaterial({ map: imgTexture });
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(32, 32, 1);
          return sprite;
        }}
      />
    </div>
  );
}

export default Graph;
