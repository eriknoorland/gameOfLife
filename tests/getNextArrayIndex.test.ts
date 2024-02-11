import getNextArrayIndex from '../src/getNextArrayIndex';

describe('getNextArrayIndex', function() {
  it('should return the next array index when the given index is smaller than the total number of items - 1', function() {
    expect(getNextArrayIndex([1, 2, 3], 1)).toBe(2);
  });

  it('should return the first array index when the last array index is given', function() {
    expect(getNextArrayIndex([1, 2, 3], 2)).toBe(0);
  });
});