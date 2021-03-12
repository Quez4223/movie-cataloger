const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) =>{
    res.status(200).send('Hello World');
}); //End of Router.get

module.exports = Router;

