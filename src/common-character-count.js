const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1set
 * @param {String} s2set
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // console.log("🔥#incoming:", s1, s2)
  s1set = new Set(s1.split(''))
  s2set = new Set(s2.split(''))
  const intersection = new Set([...s1set].filter(e => s2set.has(e)))
  // console.log("#sets:", s1set, s2set, ". #intersection:", intersection)
  

  let counter = 0
  intersection.forEach(e => {
    let a = s1.split('').filter(letter => letter === e).length
    let b = s2.split('').filter(letter => letter === e).length
    counter += a < b ? a : b
    // console.log("#counter", counter)
  })
  
  // console.log("#sets:", s1set, s2set, ". #intersection:", intersection, ". #counter", counter)
  
  return counter
  
}

module.exports = {
  getCommonCharacterCount
};



// console.log(getCommonCharacterCount('aabcc', 'adcaa'), 3);
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
// console.log(getCommonCharacterCount('abca', 'xyzbac'), 3);
// console.log(getCommonCharacterCount('', 'abc'), 0);
// console.log(getCommonCharacterCount('a', 'b'), 0);