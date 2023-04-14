const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
  
// const repeatTimes = (str, times) => {
  // 
// }
// const separator = (str, )


function repeater(str, options) {
  console.log("#incoming str:", str)
  console.log("#incoming options:", options)
  let result = ""
  const mainRepeatTimes = options.repeatTimes || 1
  const mainSeparator = options.separator || "+"
  const addRepeatTimes = options.additionRepeatTimes || 1
  let addString
  if (typeof options.addition === "undefined") {
    addString = ''
  } else {
    addString = String(options.addition)
  }
  const addSeparator = options.additionSeparator || '|'
  for (let i=0; i<mainRepeatTimes; i++) {
    //тут основной репит
    let chunk = ""
    for (let add_i=0; add_i < addRepeatTimes; add_i++){
      //тут дополнительный репит
      chunk += addString
      if (add_i != addRepeatTimes - 1) {
        chunk += addSeparator
      }
    }
    result += str + chunk
    if (i != mainRepeatTimes -1){
      result += mainSeparator
    }
  }
  return result
  
  

  
  
}

module.exports = {
  repeater
};

// console.log(repeater('la', { repeatTimes: 3 }))
// console.log('la+la+la')



// console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))
// console.log('truefalse!!!false??? truefalse!!!false??? truefalse!!!false')



// console.log( repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
// console.log( 
  // 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
// )
// 


// const objWithSpecificCoercion = {
  // [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };
// console.log(objWithSpecificCoercion)

// console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion })) 
// console.log('STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT')
