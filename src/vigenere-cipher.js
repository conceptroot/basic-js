const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct=true){
    if (direct) {
      this.direct = true
    } else {
      this.direct = false
    }
  }
  getDirectRaw(rowLetter) {
    // A => 65-90
    // B => 66-90,65
    const startIndex = rowLetter.toUpperCase().charCodeAt(0)
    let resultRow = []
    for (let i=0; i<=25; i++) {
      if (startIndex + i <=90){ resultRow.push(startIndex + i) }
      else { resultRow.push(startIndex + i - 26) }
    }
    // console.log("#directRaw for", rowLetter, "=", resultRow.map(e => String.fromCharCode(e)) )
    return resultRow.map(e=> String.fromCharCode(e))
  }
  getCipherLetter(cipher, index) {
    // Example: cipher = ALO, index: 0 => result A, index: 2 => result O, index: 3 => result A
    const returnIndex = index % cipher.length
    return cipher[returnIndex]
  }

  splitSpecialSymbols(message) {
    // получаем предложение
    // возвращаем карту где какие спецсимволы
    // возвращаем прудложение без спецсимволов
    const map = new Map()
    let flattenText = ""
    message.split('').forEach((letter, index) => {
      if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
        flattenText += letter
      } else {
        map.set(index, letter)
      }
    })
    return {
      flattenText: flattenText,
      symbolMap: map
    }
  }
  combineSpecialSymbols(flattenText, symbolMap) {
    symbolMap.forEach((value, key) => {
      // console.log('#key:', key)
      // console.log('$value:', value)
      flattenText.splice(key, 0, value)
    })
  }

  getLetterIndex(letter) {
    return Math.abs(65 - letter.charCodeAt(0))
  }

  encrypt(message, cipher) {
    if (!message || !cipher) throw new Error("Incorrect arguments!")
    message = message.toUpperCase()
    // console.log("#encrypt. #message:", message, "#cipher:", cipher)
    
    let _ = this.splitSpecialSymbols(message)
    message = _.flattenText
    const symbolMap = _.symbolMap
    // console.log('#message', message)
    // console.log('#symbolMap', symbolMap)

    let result = [] 
    for (let i=0; i<message.length; i++) {
      // get letter
      const letter = message[i]
      const letterIndex = this.getLetterIndex(letter)
      // get encrypted letter
      const cipherLetter = this.getCipherLetter(cipher, i)
      const encryptedLetter = this.getDirectRaw(cipherLetter)[letterIndex]
      // console.log('#cipherLetter', cipherLetter)
      // console.log('#encryptedLetter azaza', encryptedLetter)
      result.push(encryptedLetter)
    }
    // console.log("#result", result.join(''))
    this.combineSpecialSymbols(result, symbolMap)
    if (!this.direct) {result = result.reverse()}
    return result.join('')
  }
  decrypt(encryptedMessage, cipher) {
    if (!encryptedMessage || !cipher) throw new Error("Incorrect arguments!")
    encryptedMessage = encryptedMessage.toUpperCase()
    // console.log("#decrypt. #encryptedMessage:", encryptedMessage, "#cipher:", cipher)
    
    let _ = this.splitSpecialSymbols(encryptedMessage)
    encryptedMessage = _.flattenText
    const symbolMap = _.symbolMap
    // console.log('#encryptedMessage', encryptedMessage)
    // console.log('#symbolMap', symbolMap)

    let result = [] 

    for (let i=0; i<encryptedMessage.length; i++) {
      const encryptedLetter = encryptedMessage[i]
      // console.log('#encryptedLetter:', encryptedLetter)
      // get decrypted letter
      const cipherLetter = this.getCipherLetter(cipher, i)
      const letterIndex = this.getDirectRaw(cipherLetter).indexOf(encryptedLetter)
      const letter = String.fromCharCode(65 + letterIndex)
      // console.log('#letter', letter)
      

      result.push(letter)
    }
    // console.log("#result", result.join(''))
    this.combineSpecialSymbols(result, symbolMap)
    if (!this.direct) {result = result.reverse()}
    return result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};





// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);
// console.log( directMachine.encrypt('attack at dawn!', 'alphonse'), " => 'AEIHQX SX DLLU!'"  )
// console.log( directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'), "=> 'ATTACK AT DAWN!'")
// console.log( reverseMachine.encrypt('attack at dawn!', 'alphonse'), "=> '!ULLD XS XQHIEA'")
// console.log( reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'), "=> '!NWAD TA KCATTA'")


