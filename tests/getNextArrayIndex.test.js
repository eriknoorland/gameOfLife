import getNextArrayIndex from '../src/getNextArrayIndex';

describe('getNextArrayIndex tests', function() {
  it('#getNextArrayIndex([1,2,3], 1) should return 2', function() {
    expect(getNextArrayIndex([1, 2, 3], 1)).toBe(2);
  });

  it('#getNextArrayIndex([1,2,3], 2) should return 0', function() {
    expect(getNextArrayIndex([1, 2, 3], 2)).toBe(0);
  });
});