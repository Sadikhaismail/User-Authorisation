const mongoose = require('mongoose')


const BooksSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },



    author: {
        type: String,
        required: true

    },


    published_year: {
        type: String,
        required: true
    },


    
genre: {
        type: String,
        required: true
    },
id: {
        type: Number,
        required: true
    }
})

const BooksModel = mongoose.model("Books", BooksSchema)
module.exports = BooksModel