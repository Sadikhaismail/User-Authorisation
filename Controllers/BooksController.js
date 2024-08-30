const Booksmodel = require('../Models/BooksModel')

//////////////adding book////////////////////////////////




module.exports.Add = async (req, res) => {
    try {
        const addBooks = new Booksmodel(req.body)
        await addBooks.save()
        res.status(200).json({ message: 'book added', addBooks })
    } catch (error) {
        res.status(400).json({ message: 'book not added' })
    }

}


//////////////////////find book with id//////////////////////

module.exports.BookwithID = async (req, res) => {
    try {
        const SpecificBook = await Booksmodel.find({ id: req.params.id });

        if (SpecificBook) {
            res.send({ speciBook: SpecificBook }).status(400)
        }
    } catch (error) {
        res.status(400).json({ message: 'book not find' })
    }

}






/////////////////////////update book with id//////////////////////////////
module.exports.UpdateBookbyID = async (req, res) => {

    try {
        const BookwithID = await Booksmodel.findOneAndUpdate(
            { id: req.params.id },
            { $set: { title: req.body.title } },
            { new: true })
        res.status(200).json({ message: 'updated', BookwithID })

    } catch (error) {
        res.status(200).json({ message: 'not updated' })

    }



}


////////////////////////////get all book/////////////////////////////////////

module.exports.getAllBook = async (req, res) => {
    try {
        const allBooks = await Booksmodel.find()

        res.status(200).json({ message: 'all books here', allBooks })

    } catch (error) {
        res.status(200).json({ message: 'all books not here', allBooks })

    }
}

////////////////////delete book///////////////////////////////

module.exports.deleteBooks = async (req, res) => {
    try {
        const isExist = await Booksmodel.findOne({ id: req.params.id })
        

        if (isExist) {
            const deleteBook = await Booksmodel.findOneAndDelete(

                { id: req.params.id },
                { new: true })
        res.status(200).json({ message: 'deleted', deleteBook }) 

        }else{
        res.status(200).json({ message: 'book not found' })

        }

    } catch (error) {
        res.status(200).json({ message: 'not deleted', deleteBook })

    }

}