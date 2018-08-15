// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let finalMatrix = []
  for (let i = 0; i < n; i++) {
    finalMatrix.push([])
  }

  let square = n * n
  let counter = 1

  let startColumn = 0
  let startRow = 0
  let endColumn = n-1
  let endRow = n-1

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      finalMatrix[startRow][i] = counter
      counter++
    }
    startRow++

    for (let i = startRow; i <= endRow; i++) {
      finalMatrix[i][endColumn] = counter
      counter++
    }
    endColumn--

    for (let i = endColumn; i >= startColumn; i--) {
      finalMatrix[endRow][i] = counter
      counter++
    }
    endRow--

    for (let i = endRow; i >= startRow; i--) {
      finalMatrix[i][startColumn] = counter
      counter++
    }
    startColumn++
  }

  for (let i = 0; i < n; i++) {
    if (i < n) {
      finalMatrix[0][i] = counter
      counter++
    }
  }

  return finalMatrix
}

module.exports = matrix;
