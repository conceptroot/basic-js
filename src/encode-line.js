const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // console.log('#incoming str:', str)
  let buffer = [] 
  let result = ''
  for (let i=0; i<str.length; i++) {
    const currentLetter = str[i]
    // console.log('buffer.slice', buffer.slice(-1))
    if (buffer.slice(-1)[0] === currentLetter) {
      buffer.push(currentLetter)
    } else {
      if (buffer.length) {
        const count = buffer.length === 1 ? '' : buffer.length
        const letter = buffer.slice(-1)
        result += `${count}${letter}`
      }
      buffer = [currentLetter]
    }
  }
  if (buffer.length) {
    const count = buffer.length === 1 ? '' : buffer.length
    const letter = buffer.slice(-1)
    result += `${count}${letter}`
  }

  return result
}

module.exports = {
  encodeLine
};

// console.log(encodeLine('aaaatttt'), '4a4t');
// console.log(encodeLine('aabbccc'), '2a2b3c');
// console.log(encodeLine('abbcca'), 'a2b2ca');
// console.log(encodeLine('xyz'), 'xyz');
// console.log(encodeLine(''), '');