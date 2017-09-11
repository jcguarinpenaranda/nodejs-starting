const ERRORS = require('./ERRORS');

test('Error 1 is object not found', () => {
  expect(ERRORS.OBJECT_NOT_FOUND).toEqual(1);
});
