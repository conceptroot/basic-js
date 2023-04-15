const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
  
const revertMatrix = (matrix) => {
  const rows = matrix.length
  const columns = matrix[0].length
  let reverted = Array()
  for (let i=0; i<columns; i++) {
    reverted[i] = new Array()
  }
  // console.log(reverted)
  matrix.forEach((row, rowIndex) => {
    row.forEach((v, columnIndex) => {
      // console.log('v',v,'columnIndex', columnIndex)
      reverted[columnIndex].push(v)     
      // console.log('===>', reverted)
    })
  })
  // console.log(reverted)
  return reverted
}



function getMatrixElementsSum(matrix) {
  console.log('#matrix:', matrix)
  matrix = revertMatrix(matrix)
  console.log('#reverted:', matrix)
  matrix = matrix.map(arr => {
    // [1, 0, 2, 5] => [1]
    if ( arr.indexOf(0) !== -1) {
      return arr.slice(0, arr.indexOf(0))
    } else {
      return arr
    }
  })
  console.log('#filtered:', matrix)
  const sum = matrix.reduce((a,b) => {
    if (b.length !== 0) {
      return a + b.reduce((x, y)=>x+y)
    }
    return a
  }, 0)
  return sum
}

module.exports = {
  getMatrixElementsSum
};

// console.log(getMatrixElementsSum([
      // [0, 1, 1, 2],
      // [0, 5, 0, 0],
      // [2, 0, 3, 3],
    // ]), 9);