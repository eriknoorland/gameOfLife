/* globals describe, it, should */

/**
 * getNextArrayIndex
 */
describe('getNextArrayIndex tests', function() {
  it('#getNextArrayIndex([1,2,3], 1) should return 2', function() {
    should.equal(2, getNextArrayIndex([1, 2, 3], 1));
  });

  it('#getNextArrayIndex([1,2,3], 2) should return 0', function() {
    should.equal(0, getNextArrayIndex([1, 2, 3], 2));
  });
});

/**
 * getPrevArrayIndex
 */
describe('getPrevArrayIndex tests', function() {
  it('#getPrevArrayIndex([1,2,3], 1) should return 0', function() {
    should.equal(0, getPrevArrayIndex([1, 2, 3], 1));
  });

  it('#getPrevArrayIndex([1,2,3], 0) should return 2', function() {
    should.equal(2, getPrevArrayIndex([1, 2, 3], 0));
  });
});

/**
 * getNewCellState
 */
describe('getNewCellState tests', function() {
  it('#getNewCellState(1, 0) should return 0', function() {
    should.equal(0, getNewCellState(1, 0));
  });

  it('#getNewCellState(1, 2) should return 1', function() {
    should.equal(1, getNewCellState(1, 2));
  });

  it('#getNewCellState(1, 3) should return 1', function() {
    should.equal(1, getNewCellState(1, 3));
  });

  it('#getNewCellState(1, 4) should return 0', function() {
    should.equal(0, getNewCellState(1, 4));
  });

  it('#getNewCellState(0, 3) should return 1', function() {
    should.equal(1, getNewCellState(0, 3));
  });
});

/**
 * determineState
 */
describe('determineState tests', function() {
  it('#determineState([[0, 0, 0], [0, 0, 0] ,[0, 0, 0]]) should return [[0, 0, 0], [0, 0, 0] ,[0, 0, 0]]', function() {
    var state = [[0, 0, 0], [0, 0, 0] ,[0, 0, 0]];
    var actual = determineState(state);
    var expected = [[0, 0, 0], [0, 0, 0] ,[0, 0, 0]];

    should.equal(JSON.stringify(expected), JSON.stringify(actual));
  });

  it('#determineState([[0, 0, 0], [0, 1, 0] ,[0, 0, 0]]) is expected to have [1][1] set to 0', function() {
    var state = [[0, 0, 0], [0, 1, 0] ,[0, 0, 0]];
    var actual = determineState(state);
    var expected = 0;

    should.equal(expected, actual[1][1]);
  });
});
