import Book from "../models/Book.js"
import { createError } from "../utils/error.js"


//Controller for creating a new book.
export const createBook = async (req,res,next)=>{ 
    
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    });
    
    //Error handling for the application
    if (newBook.title === "" || newBook.author === "")
        return next(createError(400, "Author or title can't be empty"))

    try {
        const savedBook = await newBook.save()
        res.status(200).json(savedBook)
    } catch(err) {
        next(err); //The 'next(err)' function allows us to effectively cycle middlewares with express for error handling.
    }
}

//Controller for updating a book.
export const updateBook = async (req, res, next) => {
    try {

        //Checks for empty values so you cannot update the books title or author to be empty
      if (!req.body.title || !req.body.author) {
        return next(createError(400, "Title and author fields are required"));
      }
  
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(updatedBook);
    } catch (err) {
      next(err);
    }
  };
  

//Controller for deleting a book.
export const deleteBook = async (req,res,next)=>{       
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json("Book deleted")
    } catch(err) {
        next(err);
    }
}

//Controller for getting all the books.
//Throws an error if we could not finish the query.
export const getBooks = async (req,res,next)=>{
    try {
        const Books = await Book.find(req.query)
        if (!Books) return next(createError(404, "Books not found"));
        res.status(200).json(Books)
    } catch(err) {
        next(err)
    }
}
