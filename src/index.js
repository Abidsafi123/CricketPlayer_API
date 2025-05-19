import express from "express";
 

import ranking from "./models/playerSchema.js";
 
 
import connection from "./config/conn.js";
import router from "./routes/router.js";
const app = express();

// app.use(router);
connection();


app.use(express.json())
app.use("/api",router)
 



const port =  3001;
 
  

app.listen(port,()=>{
   console.log(`app is running on localhost:${port}`);
})
 
