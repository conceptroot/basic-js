const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  console.log('#names:', names)
  const fileMap = new Map()
  const fileResult = []

  names.forEach(name => {
    // console.log("======>", fileResult.lastIndexOf(name))
    if (fileMap.has(name)) {
      fileMap.set(name, fileMap.get(name) + 1)
    } else if (fileResult.lastIndexOf(name) !== -1) {
      fileMap.set(name, fileResult.lastIndexOf(name))
    } else {
      fileMap.set(name, 0)
    }
    
    if (fileMap.get(name) > 0) { 
      fileResult.push(`${name}(${fileMap.get(name)})`)
    } else {
      fileResult.push(name)
    }
  })
  
  // console.log('#fileMap:', fileMap)
  // console.log('#fileResult:', fileResult)
  return fileResult
}

module.exports = {
  renameFiles
};

// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
// console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']), ['a', 'b', 'cd', 'b ', 'a(3)']);
// console.log(renameFiles([]), []);