const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('15 Talking Points ON CICD'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
