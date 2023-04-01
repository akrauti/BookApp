import express from "express"
const app = express()
import mongoose from "mongoose"
import dotenv from "dotenv"
import booksRoute from "./routes/book.js"
import cors from "cors"

dotenv.config()

//Connection string in the .env file is a Mongodb Atlas connection string. A cloud database that anyone can use without needing to download or setup anything.
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

app.use((err, req, res, next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.messsage || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack
    })
})

//Listeners for troubleshooting. Checks for connection problems and tries again
mongoose.connection.on("disconnected", ()=> {
    console.log("mongodb disconnected")
})

//Backend server uses port 3001
app.listen(3001, ()=>{
    connect()
    console.log("Connected to backend port 3001")
});