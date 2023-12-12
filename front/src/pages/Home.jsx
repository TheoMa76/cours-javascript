import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';


function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-900 mt-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Bienvenue sur le Pokedex</h1>
        <h3 className="text-lg text-gray-300 mb-8">
          Explorez l'univers captivant des Pokemon et découvrez toutes les informations sur vos Pokémon préférés.
        </h3>
        <Button />
        
      </div>
      <div className="flex flex-wrap justify-center">      
      <Card titre="Evoli" image="evoli.png" types="Normal"/>
      <Card titre="Tiplfou" image="tiplouf.png" types="Eau"/>
      <Card titre="Salamèche" image="salameche.png" types="Feu"/>
      </div>  
    </div>

    </>
  );
}

export default Home;
