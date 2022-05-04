const express = require('express');

const livrosController = require('../controllers/livrosController');

const router = express.Router();

router.get('/', livrosController.index);

module.exports = router;