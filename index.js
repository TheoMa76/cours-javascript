import express from "express";

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Accueil");
});