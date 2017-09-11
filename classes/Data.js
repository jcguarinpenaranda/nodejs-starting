const data = require('../data/data.json');

module.exports = class Data {
  static getBooks() {
    return data.books;
  }

  /**
   * Searches the book with the given id
   * @param {string} id
   * @return {any} The book
   */
  static getBook(id) {
    return data.books.filter(book => book.id === id)[0];
  }
};
