const express = require('express');
const Server = require('./classes/Server');

const app = express();

app.get('/books', Server.getBooks);
app.get('/books/:id', Server.getBook);
app.get('/books/:id/authors', Server.getBookAuthors);

app.listen(8080, () => {
  console.log('corriendo en', 8080);
});
