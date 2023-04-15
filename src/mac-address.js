const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  console.log('#n:', n)
  let hexGroup = n.split('-')
  for (let hexes of hexGroup) {
    if (hexes.length !== 2) {
      console.log('=>', hex)
      return false
    }
    for (hex of hexes.split('')) {
      if ([0, 1,2,3,4,5,6,7,8,9].map(e=>String(e)).indexOf(hex) === -1 &&
          ['A', 'B', 'C', 'D', 'E', 'F'].indexOf(hex) === -1) {
            console.log('==>', hex)
            return false
          }
    }
  }
  return true

}
module.exports = {
  isMAC48Address
};

// console.log(isMAC48Address('00-1B-63-84-45-E6'), true);
// console.log(isMAC48Address('Z1-1B-63-84-45-E6'), false);
// console.log(isMAC48Address('not a MAC-48 address'), false);
// console.log(isMAC48Address('FF-FF-FF-FF-FF-FF'), true);
// console.log(isMAC48Address('G0-00-00-00-00-00'), false);