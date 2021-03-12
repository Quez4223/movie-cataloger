const express = require('express');

const app = express();
const PORT = 3000;

const movieRouter = require('./controllers/movies');

app.use('/movies', movieRouter);


app.get('/', (req, res) =>{
    res.status(300).redirect('/movies');
});

app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});