const Curso = require('../models/cursoModel')

exports.getAll = async (req, res, next) => {
    let cursos;

    try {
        cursos = await Curso
        .find({})
    } catch(err) {
        res.status(412).send(err);
    }

    res.json(cursos);
}