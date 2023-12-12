import express from "express";
import { simpleRandom } from "./src/utils/simpleRandom.js";
import { pokemons } from "./src/data/pokemons.js";
import 'dotenv/config';
import cors from 'cors';

const port = process.env.PORT;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Accueil");
});

app.get("/random", async (req, res) => {
    try{
    const randomNumber = await simpleRandom();
    res.json({
        SimpleRandomNumber: randomNumber,
        });
    } catch (error) {
        res.status(500).send("Erreur 500");
    }
});

app.get("/pokemon", (req, res) => {
    try {
        // Retourne l'ensemble des Pokémon
        res.json({ pokemons });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/pokemon/:id", (req, res) => {
    try{
        const id = req.params.id;
        const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));
        if(pokemon === undefined){
            throw new Error("Pokemon non trouvé");
        }
        res.json({Nom :pokemon["name"], Type :pokemon["types"], image :pokemon["picture"] });
        
    } catch (error) {
        res.status(404).send(error.message);
    }
    
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });