import axios from "axios";

const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((response) => response.data.results)
    .catch((err) => console.log(err));
};

export default getPokemon;
