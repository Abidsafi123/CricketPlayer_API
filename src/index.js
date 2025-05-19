import express from "express";
 

import ranking from "./models/playerSchema.js";
 
 
import connection from "./config/conn.js";
import router from "./routes/router.js";
const app = express();

// app.use(router);
connection();


app.use(express.json())
app.use("/",router)



const port =  3001;
//  app.post("/player",async(req,res)=>{
//     try{
// const insertPlayer = new ranking(req.body);
// const savedPlayer = await insertPlayer.save();
// res.status(201).send(savedPlayer);
//     }catch(err){
//         res.status(500).send(`error while postin data`+err);

//     }
//  })
//  app.get("/player",async(req,res)=>{
//     try{
//         const findPlayer = await ranking.find().sort({ranking:1});
//         const playerLength = await ranking.countDocuments();
//         console.log(`we have ${playerLength} number of player in our DataBase`)
       
//         res.status(201).send(findPlayer);
//         res.send(playerLength)

       
//     }catch(err){
//         res.status(500).send(err);
//     }
//  })
//  app.get("/player/:id",async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const findOne = await ranking.findById(_id);
//         res.status(201).send(findOne);

//     }catch(err){
//         res.status(500).send("internal server error"+err);
//     }
//  })
//  //UPDATE BY ID
//  app.patch("/player/:id",async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const updataPlayer = await ranking.findByIdAndUpdate(_id,req.body,{
//             new:true
//         })
//         res.status(201).send(`player updated successfylly`+updataPlayer)
//     }catch(err){
//         res.status(500).send("internal server error",err);
//     }
//  })
//  //delete 
//  app.delete("/player/:id",async(req,res)=>{
//     try{
// const _id = req.params.id;
//         const deletePlayer = await ranking.findByIdAndDelete(_id);
//         res.status(201).send("player deleted successfully"+deletePlayer);
//     }catch(err){

//     }res.status(404).send("player deleted"+deletePlayer);
//  })


app.listen(port,()=>{
   console.log(`app is running on localhost:${port}`);
})
 
