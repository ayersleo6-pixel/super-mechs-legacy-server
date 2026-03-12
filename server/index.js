const express = require("express");
const app = express();

app.use(express.json());

let players = {};

app.get("/", (req,res)=>{
  res.send("SuperMechs Legacy Server Online");
});

app.post("/player", (req,res)=>{
  const name = req.body.name;

  players[name] = {
    coins: 10000,
    tokens: 100,
    xp: 0,
    level: 1
  };

  res.json(players[name]);
});

app.listen(3000, ()=>{
  console.log("Server started");
});
