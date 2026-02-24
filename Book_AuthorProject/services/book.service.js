import Book from '../models/book.model.js'
import Author from '../models/author.model.js'

export const createBook = async (data)=>{
    //check if author exists. 
    const authors = await Author.find({ AuthorId : { $in : data.Authors }})
    console.log(authors);
    if(authors.length !== data.Authors.length){
        throw new Error("One or more authors not found")
    }
    //const authorIds = authors.map(a => a._id);
    return await Book.create(data);
}

export const getBooks = async() => await Book.find().populate("Authors")
//      {
//   const books = await Book.find();
//   console.log(books)
//   const results = await Promise.all(
//     books.map(async (book) => {
//       const authors = await Author.find({ AuthorId: { $in: book.Authors } });
//       console.log(authors)
//       return { ...book.toObject(), Authors: authors };
//     })
//   );
//  return results 
// };

export const getBookById = async(id) => await Book.findOne({BookId : id}).populate("Authors");

export const deleteBook = async(id) =>await Book.findOneAndDelete({BookId : id});

export const updateBook = async(id, data) => await Book.findOneAndUpdate({BookId : id}, data, { new : true});

