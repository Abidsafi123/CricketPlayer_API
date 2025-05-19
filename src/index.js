import express from "express";
 

import ranking from "./models/playerSchema.js";
 
 
import connection from "./config/conn.js";
const app = express();
//import router from "./routes/router.js";
const app = express();

// app.use(router);
connection();


app.use(express.json())
// app.use("/api",router)
 
app.post("/player", async (req, res) => {
  try {
     
    const insertPlayer = await ranking.insertMany(req.body);

   
    res.status(201).json(insertPlayer);
  } catch (err) {
    res.status(400).send(`Error while posting data: ${err.message}`);
  }
});

// GET all players sorted by ranking
app.get("/player", async (req, res) => {
  try {
    const findPlayer = await ranking.find().sort({ ranking: 1 });
    const playerLength = await ranking.countDocuments();
    console.log(`We have ${playerLength} players in our database`);

    res.status(200).json(findPlayer);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET player by ID
app.get("/player/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const findOne = await ranking.findById(_id);
    if (!findOne) return res.status(404).send("Player not found");

    res.status(200).json(findOne);
  } catch (err) {
    res.status(500).send("Internal server error: " + err.message);
  }
});

// UPDATE player by ID (PATCH)
app.patch("/player/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatePlayer = await ranking.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,  // ensures schema validators run on update
    });
    if (!updatePlayer) return res.status(404).send("Player not found");

    res.status(200).json(updatePlayer);
  } catch (err) {
    res.status(400).send("Internal server error: " + err.message);
  }
});

// DELETE player by ID
app.delete("/player/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deletePlayer = await ranking.findByIdAndDelete(_id);
    if (!deletePlayer) return res.status(404).send("Player not found");

    res.status(200).send("Player deleted successfully: " + deletePlayer.name);
  } catch (err) {
    res.status(500).send("Internal server error: " + err.message);
  }
});

export default router;




const port =  3001;
 
  

app.listen(port,()=>{
   console.log(`app is running on localhost:${port}`);
})
 
