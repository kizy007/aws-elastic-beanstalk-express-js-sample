const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('que se ra whatever will be wil! be the future is not for us to see que sera sera'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
