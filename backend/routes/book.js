import express from "express";
import { 
    createBook,
    updateBook,
    deleteBook,
    getBooks 
} from "../controllers/Book.js";
const router = express.Router();

//CHECK CONTROLLERS FOR SPECIFIC FUNCTIONS

//CREATE
router.post("/book", createBook);
//UPDATE
router.put("/:id", updateBook);
//DELETE
router.delete("/:id", deleteBook);
//GET ALL
router.get("/", getBooks);

export default router;