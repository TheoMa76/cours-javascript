import React, {useEffect, useState} from 'react'
import Card from '../components/Card';

function Pokemons() {

  const [pokemonData, setPokemonData] = useState(null);
  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    fetch(`http://152.228.134.57:3001/pokemon/${searchId}`)
      .then((response) =>{
        if(!response.ok){
          throw new Error("Pokemon non trouvé");
        }
        return response.json()
        .then((data) => {
          setPokemonData(data);
          console.log(data);
        })
      })
  };

  useEffect(() => {
    fetch('http://152.228.134.57:3001/pokemon')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des Pokémon");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-800 to-purple-900">
      <div className="text-center mt-16">
        <h1 className="text-4xl text-white font-bold mx-auto">Pokedex</h1>
        <input
          type="text"
          placeholder="Rechercher un pokemon"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border-2 border-gray-300 rounded-full p-2 mt-4"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        >
          Rechercher
        </button>
        {pokemonData && Array.isArray(pokemonData.pokemons) ? (
        <div className="flex flex-wrap justify-center">
          {console.log(pokemonData)}
          {pokemonData.pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              titre={pokemon.name}
              image={pokemon.picture}
              types={pokemon.types}
            />
          ))}
        </div>
      ) : pokemonData ? (
        <div className="flex justify-center">
          <Card
            key={pokemonData.id}
            titre={pokemonData.Nom}
            image={pokemonData.image}
            types={pokemonData.Type}
          />
        </div>
      ) : (
        <p className="text-white text-center">Aucune donnée trouvée</p>
      )}


      </div>
    </div>
  );
}

export default Pokemons;