const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const E_LOG_2 = 0.693

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // console.log('#incoming sampleActivity:', sampleActivity)
  if (typeof sampleActivity !== 'string') return false
  if (!Number(sampleActivity)) return false


  const initialActivity_A0 = MODERN_ACTIVITY
  // console.log("A0:", initialActivity_A0)
  const finalActivity_A = sampleActivity
  // console.log("A:", finalActivity_A)
  const N0_N = initialActivity_A0 / finalActivity_A  
  // console.log("N0_N:", N0_N)
  const rate_constant_k = E_LOG_2 / HALF_LIFE_PERIOD
  // console.log("rate_onstant_k:", rate_constant_k)
  const t = Math.log(N0_N) / rate_constant_k
  // console.log("t", t)
  
  if (t < 0) return false
  if (isNaN(t)) return false
  return Math.ceil(t)

}

module.exports = {
  dateSample
};

