const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
import jokesList from 'jokes.js';

app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/serviceability/', (req, res) => {
    let response={
        result: 'None',
        address: req.query.address || ''
    }
    if(req.query.address.substr(0,1) == '3'){
        response.result = 'Fibre';
    }
    res.json(response);
})

app.get('/jokes', (req,res) => {
    res.json(jokesList);
})




app.listen(port);
