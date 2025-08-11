const Book = require('../models/livre');

// Ajouter un livre
exports.addBook = async (req, res) => {
    try {
        const { titre, auteur, resume } = req.body;
        const newBook = new Book({ titre, auteur, resume });
        await newBook.save();
        res.status(201).json({ message: 'Livre ajouté avec succès', data: newBook });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Afficher tous les livres avec pagination
exports.getBooks = async (req, res) => {
    try {
        const { page = 1, limit = 5 } = req.query; // valeurs par défaut
        const books = await Book.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Book.countDocuments();
        
        res.json({
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / limit),
            data: books
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
