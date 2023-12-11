import express from "express";
import { simpleRandom } from "./src/utils/simpleRandom.js";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Accueil");
});

app.get("/random", async (req, res) => {
  const randomNumber = await simpleRandom();

  res.responseType = "json";
  res.json({
    SimpleRandomNumber: randomNumber,
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });