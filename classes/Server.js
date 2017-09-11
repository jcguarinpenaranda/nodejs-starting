const ERRORS = require('./ERRORS');
const Data = require('./Data');

module.exports = class Server {
  static notFound(response) {
    response.status(404).json({ message: 'Not found', code: ERRORS.OBJECT_NOT_FOUND });
  }

  static getBooks(request, response) {
    response.json(Data.getBooks()); // internet .... books
  }

  static getBook(request, response) {
    const foundBook = Data.getBook(request.params.id);

    if (!foundBook) {
      Server.notFound(response);
      return;
    }

    response.json(foundBook);
  }

  static getBookAuthors(request, response) {
    const foundBook = Data.getBook(request.params.id);

    if (!foundBook) {
      Server.notFound(response);
      return;
    }

    response.json(foundBook.authors);
  }
};
