//
// isNumber
//

/**
 * @param {string} s
 * @return {boolean}
 */

 const isNumber = s => {
  // Any blank space before and after
  // Possible positive/negative sign
  // Possible numbers before possible decimal point
  // Possible decimal point
  // Possible numbers after possible decimal point
  // Exponent with possible negative sign and numbers
  return (s && (s.match(/^\s*[+-]?([0-9]+[.]?|[0-9]*[.][0-9]+)(e[-+]?[0-9]+)?\s*$/) !== null))
}

const debug = false

if (debug) {

  console.log(isNumber('13.45e-45')) // true
  console.log(isNumber('1 ')) // true
  console.log(isNumber('a ')) // false
  console.log(isNumber('12.45e4f')) // false

}
