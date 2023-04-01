import express from "express"
const app = express()
import mongoose from "mongoose"
import dotenv from "dotenv"
import booksRoute from "./routes/book.js"
import cors from "cors"

dotenv.config()

//Connection string in the .env file is a Mongodb Atlas connection string. 
//Mongodb Atlas is a cloud database that anyone can use without needing to download or setup anything.
const connect = async() => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb atlas")
} catch (error) {
    throw error;
    }
};

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/books", booksRoute);

//Error handling middleware utilizing the express 'next()' function
//If error isn't listed or if error doesn't have message defaults to 500
app.use((err, req, res, next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

//Listeners for troubleshooting.
mongoose.connection.on("disconnected", ()=> {
    console.log("mongodb disconnected")
})

//Backend server uses port 3001. Change  this if port 3001 is already taken.
app.listen(3001, ()=>{
    connect()
    console.log("Connected to backend port 3001")
});