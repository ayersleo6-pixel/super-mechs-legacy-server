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
app.post("/fightBoss", (req,res)=>{
  const { playerName, bossName } = req.body;

  const player = players[playerName];
  const boss = bosses.find(b => b.name === bossName);

  if(!player){
    return res.json({ error: "Player not found" });
  }

  if(!boss){
    return res.json({ error: "Boss not found" });
  }

  // simple win chance
  const win = Math.random() > 0.3;

  if(win){
    player.coins += boss.coins;
    player.tokens += boss.tokens;
    player.xp += 100;
  }

  res.json({
    result: win ? "Victory" : "Defeat",
    player
  });
});
