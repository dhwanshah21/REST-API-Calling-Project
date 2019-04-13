const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => res.send('Homework 1 Team:- Vaishali Bisht, Dhwan Shah, Siddhant Padve.'));

app.get('/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));