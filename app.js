const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello world . I am updating my repository KO));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
