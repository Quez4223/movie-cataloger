const express = require('express');
const mongoose = require('mongoose')

const app = express();
const PORT = 3000;
const DBNAME = 'movies'

mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongoose')
})

const movieRouter = require('./controllers/movies');

app.use('/movies', movieRouter);


app.get('/', (req, res) =>{
    res.status(300).redirect('/movies');
});

app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});