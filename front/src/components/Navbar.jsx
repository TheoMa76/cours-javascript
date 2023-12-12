import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Pokemons from '../pages/Pokemons';

function Navbar() {
  const pathAccueil = '';
  const pathPokemon = '/pokemon';

  return (
    <>
      <Router>
        <nav className="p-4 fixed top-0 left-0 right-0 bg-white z-10">          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to={pathAccueil} className="font-semibold hover:text-blue-700">
                Home
              </Link>
            </div>
            <div className="flex items-center ml-8">
              <img src="pokeball.png" alt="Pokeball" className="w-8 h-8" />
            </div>
            <div className="flex items-center">
              <Link to={pathPokemon} className="font-semibold hover:text-blue-700">
                Pokemons
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path={pathAccueil} element={<Home />} />
          <Route path={pathPokemon} element={<Pokemons />} />
        </Routes>
      </Router>
    </>
  );
}

export default Navbar;
