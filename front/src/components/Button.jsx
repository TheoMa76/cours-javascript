import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Pokemons from '../pages/Pokemons';

function Button() {
  const pathPokemon = '/pokemon';

  return (
    <>
      <button className="relative font-semibold overflow-hidden w-32">
        <Link to={pathPokemon} className="text-white no-underline z-10 relative">
          Pokemons
        </Link>
      </button>
      <Routes>
        <Route path={pathPokemon} element={<Pokemons />} />
      </Routes>
      </>
  );
}

export default Button;
