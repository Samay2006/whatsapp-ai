import {whatsapp} from "./whatsab.js"
import dotenv from "dotenv"
import { database } from "./DB/database.js"
import app from "./app.js"

dotenv.config({
    path:"./.env"
})

app.post("./home",(req,res)=>{
res.send("hello")
})

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