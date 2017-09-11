const Data = require('./Data')
const data = require('../data/data.json')

describe('#getBooks', () => {
  it('should bring the books in the catalogue', () => {
    const result = Data.getBooks()
    expect(result).toEqual(data.books)
  })
})

describe('#getBook', () => {
  it('should bring an existing book', () => {
    const result = Data.getBook('123')
    expect(result).toEqual(data.books[0])
  })
})
