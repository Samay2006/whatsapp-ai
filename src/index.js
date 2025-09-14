import express from "express"
import {whatsapp} from "./whatsab.js"
const app=express();

app.post("./home",(req,res)=>{
res.send("hello")
})


app.listen(3000,()=>{
    console.log(`server is running on 3000`);
});
// run();
whatsapp.initialize()