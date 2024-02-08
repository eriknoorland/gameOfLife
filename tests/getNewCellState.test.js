import getNewCellState from '../src/getNewCellState';

describe('getNewCellState tests', function() {
  it('#getNewCellState(1, 0) should return 0', function() {
    expect(getNewCellState(1, 0)).toBe(0);
  });

  it('#getNewCellState(1, 2) should return 1', function() {
    expect(getNewCellState(1, 2)).toBe(1);
  });

  it('#getNewCellState(1, 3) should return 1', function() {
    expect(getNewCellState(1, 3)).toBe(1);
  });

  it('#getNewCellState(1, 4) should return 0', function() {
    expect(getNewCellState(1, 4)).toBe(0);
  });

  it('#getNewCellState(0, 3) should return 1', function() {
    expect(getNewCellState(0, 3)).toBe(1);
  });
});