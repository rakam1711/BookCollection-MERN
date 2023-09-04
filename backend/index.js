const express = require("express");
const {PORT , mongoDBURL} = require("./configs");
const mongoose  = require('mongoose');
const booksRoutes = require('./routes/booksRoutes');

const app = express();
app.use(express.json());
app.use('/v1/books',booksRoutes);

app.get('/',(req,res)=>{
    res.status(274).send("welcome to the book collection");
});



mongoose.connect(mongoDBURL)
.then(()=>console.log("database connection established"))
.catch((error)=>{
    console.log(error.message);
})

app.listen(PORT,()=>
console.log(`server started at port: ${PORT}`));