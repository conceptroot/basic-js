const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

const seasons = new Map([
  [0, "winter"],
  [1, "winter"],
  [2, "spring"],
  [3, "spring"],
  [4, "spring"],
  [5, "summer"],
  [6, "summer"],
  [7, "summer"],
  [8, "autumn"],
  [9, "autumn"],
  [10, "autumn"],
  [11, "winter"],
])

const ERROR_UNABLE = "Unable to determine the time of year!"
const ERROR_DATE = "Invalid date!"
function getSeason(date) {
  // console.log("#incoming date:", date)
  if (!date) { return ERROR_UNABLE }
  if (!(date instanceof Date)) { throw new Error(ERROR_DATE) }
  try {
    date.toUTCString()
  } catch {
    throw new Error(ERROR_DATE)
  }
  // console.log(date.getMonth())
  const season = seasons.get(date.getMonth())
  // console.log("#season:", season)
  return season
}

module.exports = {
  getSeason
};

