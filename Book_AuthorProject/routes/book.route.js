import express from 'express';
import { createBook, deleteBook, updateBook, getBookById, getBooks  } from '../services/book.service.js'

const router = express.Router();

router.post("/", async(req, res)=>{
    try {
        
        const book = await createBook(req.body);
        res.status(201).json(book)        
    } catch (error) {
        res.status(500).json({error : error.message});
    }
})

router.get("/", async(req, res)=>{
    try {
        const list = await getBooks();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

router.get("/:id", async(req, res)=>{
    try {
        const book = await getBookById(Number(req.params.id))
        if(!book){
            res.status(404).json({message : "Book not found"})
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

router.put("/:id", async(req, res)=>{
    try {
        const book = await updateBook(Number(req.params.id), req.body)
        res.json(book)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
router.delete("/:id", async(req, res)=>{
    try {
        await deleteBook(Number(req.params.id))
        res.json({message : "Book removed successfully"})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
export default router;

//create controllers under a folder controllers and implement UR async functions and call them here. 