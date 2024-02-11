import getPrevArrayIndex from '../src/getPrevArrayIndex';

describe('getPrevArrayIndex', function() {
  it('should return the given index minus 1', function() {
    expect(getPrevArrayIndex([1, 2, 3], 1)).toBe(0);
  });

  it('should return the last array index when the given index is 0', function() {
    expect(getPrevArrayIndex([1, 2, 3], 0)).toBe(2);
  });
});