import { arrSort, arrUnsort, sorting } from '../src/index';

test('testOnSort', () => {
  expect(sorting(arrUnsort)).toEqual(arrSort);
});
