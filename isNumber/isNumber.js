/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  // Any blank space before and after
  // Possible positive/negative sign
  // Possible numbers before possible decimal point
  // Possible decimal point
  // Possible numbers after possible decimal point
  // Exponent with possible negative sign and numbers
  return (s && (s.match(/^\s*[+-]?([0-9]+[.]?|[0-9]*[.][0-9]+)(e[-+]?[0-9]+)?\s*$/) !== null));
};

console.log(isNumber('1 '));
