const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/hello', (req, res) => {
    console.log('hello :)');
    res.send('Lorem ipsum.');
});

module.exports = app;