import mongoose from "mongoose";

const database=async()=>{
    try {
       const a=  await mongoose.connect(`${process.env.URL}`)
       console.log("database is connected successfully")
    } catch (error) {
        console.log("mongodb connection fail",error)
    }
}

export {database}