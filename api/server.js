const express = require("express");
const server = express();
const db = require("../data/helpers");

 server.use(express.json());

 //Sanity check
//  server.get('/', (req, res) => {
//      res.status(200).send('sanity check')
//  })

 // CREATE ops
server.post("/games", async (req, res) => {
  const newGame = req.body;
  if (newGame.title && newGame.genre) {
    const game = await db.insertGame(newGame);

     res.status(201).json({ game });
  } else {
    res.status(422).json({ error: "game details inaccurate" });
}
});
// READ ops
server.get("/games", async (req, res) => {
    const games = await db.getAll();
    res.status(200).json({ games });
});


 module.exports = server;