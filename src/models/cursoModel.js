const mongoose = require('mongoose');

const Curso = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Curso', Curso);