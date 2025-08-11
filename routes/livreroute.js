const express = require('express');
const router = express.Router();
const { addBook, getBooks } = require('../controllers/livrecontroler');

router.post('/', addBook);
router.get('/', getBooks);

module.exports = router;
