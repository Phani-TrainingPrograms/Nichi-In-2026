import express from 'express';
import { createAuthor, getAuthors, getAuthorById, updateAuthor, deleteAuthor } from '../services/author.service.js'

const router = express.Router();

router.post("/", async(req, res)=>{
    try {
        console.log(req.body);
        const author = await createAuthor(req.body);
        res.status(201).json(author)        
    } catch (error) {
        res.status(500).json({error : error.message});
    }
})
router.get("/", async(req, res)=>{
    try {
        const list = await getAuthors();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

router.get("/:id", async(req, res)=>{
    try {
        const author = await getAuthorById(Number(req.params.id))
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

router.put("/:id", async(req, res)=>{
    try {
        const author = await updateAuthor(Number(req.params.id), req.body)
        res.json(author)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
router.delete("/:id", async(req, res)=>{
    try {
        await deleteAuthor(Number(req.params.id))
        res.json({message : "Author deleted successfully"})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
export default router;