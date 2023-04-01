import mongoose from "mongoose";


//The book model. Required fields are always needed in order to proceed with creation or updating.
// You can leave the description field empty in the current version as it is not displayed in the list.
const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
    }
    }
);

export default mongoose.model("Book", BookSchema)