const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // console.log("#domains", domains)
  const appearances = new Map()
  domains.forEach(domain => {
    // console.log('#domain:', domain)
    //'epam.com' => epam, com
    let splitedDomain = domain.split('.')
    for (let i=0; i<splitedDomain.length; i++) {
      let lexema = splitedDomain.slice(i).reverse().reduce((a, b)=> `${a}.${b}`, '')
      if (appearances.has(lexema)) {
        appearances.set(lexema, appearances.get(lexema)+1)
      } else {
        appearances.set(lexema, 1)
      }
      // console.log(lexema)
    }
  })
  // console.log("#appearances", appearances)
  // console.log(Object.fromEntries(appearances))
  return Object.fromEntries(appearances)
}

module.exports = {
  getDNSStats
};



// console.log(getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 });
// console.log(getDNSStats(['epam.com', 'info.epam.com']), { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
// console.log(getDNSStats([]), {});