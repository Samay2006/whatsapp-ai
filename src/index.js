<<<<<<< HEAD
import express from "express"
import {whatsapp} from "./whatsab.js"
const app=express();
=======
import {whatsapp} from "./whatsab.js"
import dotenv from "dotenv"
import { database } from "./DB/database.js"
import app from "./app.js"

dotenv.config({
    path:"./.env"
})
>>>>>>> 1edd1014df3d891a1e877150d8c05d71891b187e

app.post("./home",(req,res)=>{
res.send("hello")
})

<<<<<<< HEAD

app.listen(3000,()=>{
    console.log(`server is running on 3000`);
});
// run();
whatsapp.initialize()
=======
database()
.then(()=>{
    app.listen(process.env.port,()=>{
            console.log(`server is running on ${process.env.port}`);

    })
})
.catch((error)=>{
        console.log(error.message)
})

// run();
// whatsapp.initialize()
>>>>>>> 1edd1014df3d891a1e877150d8c05d71891b187e
