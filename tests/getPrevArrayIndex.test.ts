import getPrevArrayIndex from '../src/getPrevArrayIndex';

describe('getPrevArrayIndex tests', function() {
  it('#getPrevArrayIndex([1,2,3], 1) should return 0', function() {
    expect(getPrevArrayIndex([1, 2, 3], 1)).toBe(0);
  });

  it('#getPrevArrayIndex([1,2,3], 0) should return 2', function() {
    expect(getPrevArrayIndex([1, 2, 3], 0)).toBe(2);
  });
});