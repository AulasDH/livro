const { Livro } = require('../models');

const livrosController = {
    index: async (request, response) => {
        const livros = await Livro.findAll();

        return response.json(livros);
    }
};

module.exports = livrosController;