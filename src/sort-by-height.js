const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
  

function sortByHeight(arr) {
  // console.log("#arr:", arr)
  // забрать индексы и значениya -1
  const _ = splitWrongValues(arr)
  const properArray = _.properArray
  const wrongValuesMap = _.wrongValuesMap
  // console.log("#properArray:", properArray)
  // console.log("#wrongValuesMap:", wrongValuesMap)
  // отсортировать оставшийся массив
  const sortedArray = properArray.sort((a,b) => a-b ? a-b:a+b)
  // console.log("#sortedArray", sortedArray)
  // добавить в массив индексы и значения из 1 шага
  const result = combineSortedAndWrong(sortedArray, wrongValuesMap)
  // console.log("#result", result)
  return result
  
}
function combineSortedAndWrong(sortedArray, wrongMap) {
  const result = [...sortedArray]
  wrongMap.forEach((v, i) => {
    result.splice(i, 0, v)
  })
  return result
}

function splitWrongValues(arr) {
  const wrongValuesMap = new Map()
  arr.forEach((v, i) => {
    if (v === -1) {
      wrongValuesMap.set(i, v)
    }
  })
  const properArray = arr.filter(v => v !== -1)
  return {
    properArray: properArray,
    wrongValuesMap: wrongValuesMap
  }
}

module.exports = {
  sortByHeight
};

// console.log("=".repeat(40))
// console.log(
      // sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]),
      // [-1, 150, 160, 170, -1, -1, 180, 190],
    // );
