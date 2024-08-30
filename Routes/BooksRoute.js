const express = require ('express')
const BooksController = require ('../Controllers/BooksController')
const router = express.Router()




router.post('/addBooks',BooksController.Add)
router.put('/update/:id',BooksController.UpdateBookbyID)
router.get('/SpecificBooks/:id',BooksController.BookwithID)
router.get ('/allBooks',BooksController.getAllBook)
router.delete('/deleteBook/:id',BooksController.deleteBooks)




module.exports = router