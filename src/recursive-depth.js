const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.currentDepth = 0
    this.maximumDepth = 0
  }
  calculateDepth(arr) {
    console.log("#incoming arr:", arr)
    this.currentDepth += 1
    if (this.currentDepth > this.maximumDepth) this.maximumDepth = this.currentDepth
    for (let element of arr) {
      if (Array.isArray(element)) {
        this.calculateDepth(element)
      }
    }
    this.currentDepth -= 1
    if (this.currentDepth === 0) {
      const result = this.maximumDepth
      this.maximumDepth = 0
      return result
    }
    return this.maximumDepth
  }
}

module.exports = {
  DepthCalculator
};

// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]), '=> 1')
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]), '=> 2')
// console.log(depthCalc.calculateDepth([[[]]]), '=> 3')

// console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), '=> 31')
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), '=> 5')
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]]), '=> 2')

