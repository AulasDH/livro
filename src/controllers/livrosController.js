const { Livro } = require('../models');

const livrosController = {
    index: async (request, response) => {
        const livros = await Livro.findAll();

        return response.json(livros);
    },
    store: async (request, response) => {
        const payload = request.body;

        /**
         * @description Método 1 - Cria uma instancia e salva
       
         const livro = Livro.build(payload);
 
         await livro.save();
       */

        /**
         * @description Método 2 - Faz o build e osave juntos
        */
        const livro = await Livro.create(payload);

        return response.json(livro);
    },
    update: async (request, response) => {
        const { idLivro } = request.params;
        const payload = request.body;

        /**
         * @description Método 1 - Atualiza todos parametros
            const qtslivrosAtualizados = await Livro.update(payload, {
                where: {
                    id: idLivro
                },
            });

            const livro = await Livro.findOne({ where: { id: idLivro } });
        */

        /**
         * @description Método 2 - Atualiza os parametros que foram realmente modificados
        */
        const livro = await Livro.findOne({ where: { id: idLivro } });

        Object.assign(livro, payload);

        await livro.save();

        return response.json(livro);
    },
    show: async (request, response) => {
        const { idLivro } = request.params;

        const livro = await Livro.findOne({ where: { id: idLivro } });

        return response.json(livro);
    },
};

module.exports = livrosController;