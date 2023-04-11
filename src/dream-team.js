const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(memberList) {
  // console.log("#incoming memberList:", memberList)
  if (!Array.isArray(memberList)) return false
  let members = [...memberList]
  members = members.filter(e => {
    if (typeof e === "string" && e.length > 0) {return true}
    return false
  })
  // console.log("#members:", members)
  members = members.map(e => e.trim().toUpperCase())
  // console.log("#members:", members)

  let dreamNameArray = members.reduce((a,b) => {
    // console.log("a:", a, "b:", b)
    return [...a, b[0]]
  }, [])
  // console.log("#draemNameArray", dreamNameArray)
  dreamNameArray = dreamNameArray.sort((a,b) => {
    // console.log('$a:', a, '$b', b)
    if (a < b) {
      return -1 
    }
    return 1
  })
  // console.log("#draemNameArray", dreamNameArray)
  return dreamNameArray.join('')

}

module.exports = {
  createDreamTeam
};

