const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const newZerroArray = (matrix) => {
  const result = Array(matrix.length)
  for (let i=0; i<matrix.length; i++){
    result[i] = new Array(matrix[i].length)
  }
  for (let ri=0; ri<matrix.length; ri++){
    for (let ci=0; ci<matrix[ri].length; ci++){
      result[ri][ci] = 0
    }
  }
  return result
}


function minesweeper(matrix) {
  // console.log('#matrix:', matrix)
  const result = newZerroArray(matrix)
  // console.log('#result:', result)
  const rows=matrix.length
  for (let x=0; x<rows; x++){
    // console.log('-'.repeat(40))
    const columns = matrix[x].length
    for (let y=0; y<columns; y++){
      // console.log('='.repeat(40))
      // console.log('===>', matrix[x][y])
      if (matrix[x][y]) {
        updateMatrix(result, x, y, rows, columns)
      }
    }
  }
  // console.log('#result', result)
  return result
}

function updateMatrix(matrix, x, y, rows, columns) {
  // console.log('===> x:', x, ' y:', y, ' rows:', rows, ' columns:', columns) 
  xStart = x - 1 >=0 ? x-1 : x
  xEnd = x + 1 < rows ? x+1 : x
  // console.log('xStart:', xStart, 'xEnd', xEnd)
  yStart = y - 1 >=0 ? y-1 : y
  yEnd = y + 1 < columns ? y+1 : y
  // console.log('yStart:', yStart, 'yEnd', yEnd)
  for (let row=xStart; row <= xEnd; row++) {
    for (let col=yStart; col<=yEnd; col++) {
      if ((row === x) && (col === y)) continue;
      // console.log('row:',row,', col:',col)
      matrix[row][col] += 1
    }
  }
}

module.exports = {
  minesweeper
};

// console.log(
//       minesweeper([
//         [true, false, false],
//         [false, true, false],
//         [false, false, false],
//       ]),
//       [
//         [1, 2, 1],
//         [2, 1, 1],
//         [1, 1, 1],
//       ],
//     );