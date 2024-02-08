import determineState from '../src/determineState';

describe('determineState tests', function() {
  it('#determineState([[0, 0, 0], [0, 0, 0] ,[0, 0, 0]]) should return [[0, 0, 0], [0, 0, 0] ,[0, 0, 0]]', function() {
    var state = [[0, 0, 0], [0, 0, 0] ,[0, 0, 0]];
    var actual = determineState(state);
    var expected = [[0, 0, 0], [0, 0, 0] ,[0, 0, 0]];

    expect(actual).toStrictEqual(expected)
  });

  it('#determineState([[0, 0, 0], [0, 1, 0] ,[0, 0, 0]]) is expected to have [1][1] set to 0', function() {
    var state = [[0, 0, 0], [0, 1, 0] ,[0, 0, 0]];
    var actual = determineState(state);
    var expected = 0;

    expect(actual[1][1]).toStrictEqual(expected);
  });
});