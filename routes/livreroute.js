const express = require('express');
const router = express.Router();
const { addBook, getBooks } = require('../controllers/livrecontroler');

router.post('/livre', addBook);
router.get('/livre', getBooks);

module.exports = router;
