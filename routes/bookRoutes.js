const router = require('express').Router();

const bookController = require('../controllers/bookController');

router.route('/books').get(bookController.getAllBooks).post(bookController.addBook);

router.route('/book/:id').get(bookController.getBook).patch(bookController.updateBook).delete(bookController.deleteBook);

module.exports = router;
