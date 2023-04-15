const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digitArray = String(n).split('').map(e => Number(e))
  let possibilities = digitArray.length
  console.log("#incoming number:", n, ". #possibilities:", possibilities, "#digitArray:", digitArray)
  let maxNumber = -Infinity
  for (let i=0; i<possibilities; i++) {
    console.log("➡️ i:", i)
    const outerNumber = Number(
              digitArray.filter((e,index) => index !== i)
                .map(e => String(e))
                .join(''))
    if (maxNumber < outerNumber) maxNumber = outerNumber
    console.log(outerNumber)
  }
  return maxNumber
}

module.exports = {
  deleteDigit
};


// console.log(deleteDigit(152), 52);
// console.log(deleteDigit(1001), 101);
// console.log(deleteDigit(10), 1);
// console.log(deleteDigit(222219), 22229);
// console.log(deleteDigit(109), 19);
// console.log(deleteDigit(342), 42);