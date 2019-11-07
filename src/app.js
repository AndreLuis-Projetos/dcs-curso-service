const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('running...')
})

const cursoRoute = require('./routes/cursoRoute')

app.use('/curso', cursoRoute)
