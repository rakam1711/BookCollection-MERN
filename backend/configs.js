const PORT =3000 || process.env.PORT

const mongoDBURL = 'mongodb+srv://rakamsingh1711:NNVyqJXA7FoH7p1X@cluster0.ykxwo9f.mongodb.net/books-collection?retryWrites=true&w=majority'|| 'mongodb://0.0.0.0:27017/book'

module.exports = {PORT ,mongoDBURL}