const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController')

router.route('/curso')
    .get(cursoController.getAll)

module.exports = router;