/**
 * @param {number} x
 * @return {number}
 */

// FIXME: use toString(radix) instead
const reverse = function(x) {
  const minNumberStr = (-parseInt('1'.repeat(31), 2)-1).toString().replace(/^-/, '')
  const maxNumberStr = parseInt('1'.repeat(31), 2).toString()

  const nCheck = s => {
    if (s.match(/^-/)) { // s is negative
      const abs = s.replace(/^-/, '')
      if (abs.length > minNumberStr.length) return 0
      if (abs.length == minNumberStr.length && abs > minNumberStr) return 0
    } else { // s is positive
      if (s.length > maxNumberStr.length) return 0
      if (s.length == maxNumberStr.length && s > maxNumberStr) return 0
    }

    return s
  }

  const repl = (match, p1, p2) => {
    return p1 + p2.split('').reverse().join('')
  }
  return Number(nCheck(x.toString().replace(/^(-?)(.*)$/, repl)))
}

console.log(reverse(-23))
console.log(reverse(1234567))
console.log(reverse(123456789012), '=== 0')
console.log(reverse(1534236469), '=== 0')
console.log(reverse(2147483647), '=== 0')
console.log(reverse(2147483648), '=== 0')
console.log(reverse(-2147483648), '=== 0')
console.log(reverse(-2147483649), '=== 0')
console.log(reverse(-2147483412), '!== 0')
console.log(reverse(-1000003412), '!== 0')
