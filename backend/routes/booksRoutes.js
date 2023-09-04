const express = require('express');
const Book  = require('../models/booksmodel');

const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        if (!req.body.title||
            !req.body.author||
            !req.body.publishYear
            ){
                return res.status(400).send({
                    message:"all fields are compulsories"
                })
            }

            const newbook = {
                title : req.body.title,
                author : req.body.author,
                publishYear : req.body.publishYear
            }
            const book = await Book.create(newbook);
            return res.status(201).send(book);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
    
});

router.get('/',async(req,res)=>{
    try{
        const books = await Book.find({});
        return res.status(200).send({
            count : books.length,
            data : books
        });

    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }

});
//get book by ID
router.get('/:id',async(req,res)=>{
    try{
    const {id} = req.params;


    const book = await Book.findById(id);
    return   res.status(200).send(book);

    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }

});
//get book by id and update

router.put('/:id',async(req,res)=>{
    try{
        if (!req.body.title||
            !req.body.author||
            !req.body.publishYear
            ){
                return res.status(400).send({
                    message:"all fields are compulsories"
                })
            }
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result){
            return res.status(500).json({message:'book nor found'});
        }
        
        return res.status(201).send({message:"book updated successfully"});
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
    
});

//delete book by id 

router.delete('/:id',async(req,res)=>{
    try{
        
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result){
            return res.status(500).json({message:'book not found'});
        }
        
        return res.status(201).send({message:"book deleted successfully"});
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
    
});

module.exports = router