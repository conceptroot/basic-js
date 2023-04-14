const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) { throw new Error("'arr' parameter must be an instance of the Array!") }
  // --discard-next excludes the next element of the array from the transformed array.
  // --discard-prev excludes the previous element of the array from the transformed array.
  // --double-next duplicates the next element of the array in the transformed array.
  // --double-prev duplicates the previous element of the array in the transformed array.
  console.log('#arr', arr)
  const resultArr = []
  let flag = false
  let flag2 = false
  let flagInstruction = false
  arr.forEach(e => {
    // Валидация элементов
    if (Array.isArray(e)) return
    

    // Проверить флаги для выполнения инструкций
    if (flag) {
      // --discard-next
      flag = false
      flagInstruction = true
      return
    } else if (flag2) {
      // --double-next
      //  If there is no element next to the control sequence to which it can be applied in the initial array, or this element was previously deleted, it does nothing.
      resultArr.push(e)
      flag2 = false
    } 
    
    
    // Стандартная проверка элемента массива, тут записываем флаги или записываем элемент массива в результат
    if (e === "--discard-next") {
      flag = true
    } else if (e === "--discard-prev") {
      if(resultArr.length > 0) { 
        if(!flagInstruction) {
          resultArr.pop() 
        } else {
          flagInstruction = false
        }
      }
    } else if (e === "--double-next") {
      flag2 = true
    } else if (e === "--double-prev") {
      if (resultArr.length > 0 && !flagInstruction) {
        resultArr.push(resultArr.slice(-1)[0])
      } else {
        flagInstruction = false
      }

    } else {
      resultArr.push(e)
    }
  })   

  return resultArr
}

module.exports = {
  transform
};

// console.log(
  // transform([1, 2, 3, '--double-next', 4, 5])
  // transform([ [], 1, 2, 3 ] )
  // transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])
  // transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])
  // transform(['--discard-prev', 1, 2, 3])
  // transform(['--double-prev', 1, 2, 3])
// )
