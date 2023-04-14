const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  elements: [],
  getLength() {
    return this.elements.length
  },
  addLink(value) {
    // if (!value) {
      // this.elements.push(' ')
      // return this
    // }
    this.elements.push(value)
    return this
  },
  removeLink(position) {
    if (position > this.elements.length
        || position < 1
        || typeof position != "number") {
      this.elements = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.elements.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.elements.reverse()
    return this
  },
  finishChain() {
    let result = this.elements.map(e => `( ${e} )`)
    result = result.join("~~")
    this.elements = []
    return result
  }
};

module.exports = {
  chainMaker
};


// chainMaker.addLink(1).addLink(2).addLink(3)
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3)
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0)
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd')
//
// checkForThrowingErrors.call(this, [
  // () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2)
// ])
//
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)


// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3)


// console.log( "#size:", chainMaker.getLength())
// console.log("result   :", chainMaker.finishChain())
// console.log("should be:",'( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')
