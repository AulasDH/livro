const express = require('express');

const livrosController = require('../controllers/livrosController');

const router = express.Router();

// /livros
router.get('/', livrosController.index);

// /livros/2
router.put('/:idLivro', livrosController.update);

// livros
router.post('/', livrosController.store);

module.exports = router;