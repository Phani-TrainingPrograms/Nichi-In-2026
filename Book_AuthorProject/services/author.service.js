import Author from '../models/author.model.js'
import Book from '../models/book.model.js'
export const createAuthor = async (data) => await Author.create(data);

export const getAuthors = async () => await Author.find();

export const getAuthorById = async (id) => await Author.findOne({ AuthorId : id});

export const deleteAuthor = async(id) => await Author.deleteOne({AuthorId : id});

export const updateAuthor = async(id, data) => await Author.findOneAndUpdate({ AuthorId : id} , data, { new  : true});

