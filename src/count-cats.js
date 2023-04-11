const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // console.log('#incoming matrix:', matrix)
  let counter = 0
  for (row of matrix) {
    const countRows = row.reduce((a, b) => {
      if (b === '^^') { return a + 1}
      return a
    }, 0)
    counter += countRows
  }
  // console.log('#counter:', counter)
  return counter
}

module.exports = {
  countCats
};
