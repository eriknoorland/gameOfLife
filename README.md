Rules

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

Approach

1. Initialize with a random base state
2. Render state
3. Determine next state based on current state
4. Repeat from step 2

The state of a cell is either 0 or 1
