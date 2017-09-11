const Server = require('./Server');
const ERRORS = require('./ERRORS');
const Data = require('./Data');

class Response {
  status() {
    return this;
  }

  json() {
    return this;
  }
}


describe('#getBooks', () => {
  it('should call Data #getBooks', () => {
    const response = new Response();
    const spyJSON = jest.spyOn(response, 'json');
    const spyData = jest.spyOn(Data, 'getBooks');
    spyData.mockImplementation(() => ({ ok: true }));

    Server.getBooks(null, response);

    expect(spyData).toHaveBeenCalledTimes(1);
    expect(spyJSON).toHaveBeenCalledTimes(1);
    expect(spyJSON).toHaveBeenCalledWith(Data.getBooks());
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});

describe('#notFound', () => {
  test('should call status 404 and return as json the message expected', () => {
    const message = { message: 'Not found', code: ERRORS.OBJECT_NOT_FOUND };
    const code = 404;

    const response = new Response();

    const spyStatus = jest.spyOn(response, 'status');
    const spyJSON = jest.spyOn(response, 'json');

    Server.notFound(response);

    expect(spyStatus).toHaveBeenCalledTimes(1);
    expect(spyStatus).toHaveBeenCalledWith(code);
    expect(spyJSON).toHaveBeenCalledTimes(1);
    expect(spyJSON).toHaveBeenCalledWith(message);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});
