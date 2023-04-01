import Book from "../models/Book.js"


//Controller for creating a new book.
export const createBook = async (req,res,next)=>{       
    const newBook = new Book(req.body)

    try {
        const savedBook = await newBook.save()
        res.status(200).json(savedBook)
        
    } catch(err) {
        next(err);
    }
}

//Controller for updating a book.
export const updateBook = async (req,res,next)=>{       
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { $set: req.body },{ new:true })
        res.status(200).json(updatedBook)
        
    } catch(err) {
        next(err);
    }
}

//Controller for deleting a book.
export const deleteBook = async (req,res,next)=>{       
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json("Book deleted")
    } catch(err) {
        next(err);
    }
}

//Controller for getting a book. Used for displaying specific book information to the user that they can edit.
export const getBook = async (req,res,next)=>{       
    try {
        const Book = await Book.findById(req.params.id)
        res.status(200).json(Book)
    } catch(err) {
        next(err);
    }
}

//Controller for getting all books. Used in the home page and is called each time it is loaded.
export const getBooks = async (req,res,next)=>{       
    try {
        const Books = await Book.find(req.query)
        res.status(200).json(Books)
    } catch(err) {
        next(err)
    }
}
