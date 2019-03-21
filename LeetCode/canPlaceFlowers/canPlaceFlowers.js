/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  if (!n) return true

  let flowers = n
  let idx = 0

  while (idx < flowerbed.length) {
    const prev = flowerbed[idx - 1]
    const curr = flowerbed[idx]
    const next = flowerbed[idx + 1]

    if (!prev && !curr && !next) {
      flowers -= 1
      if (!flowers) return true
      idx += 2
    } else {
      idx += 1
    }
  }

  return false
}

console.log(canPlaceFlowers([1,0,0,0,1], 1))
console.log(canPlaceFlowers([1,0,0,0,1], 2))
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2))
console.log(canPlaceFlowers([1,0,0,0,0,1], 2))

// https://leetcode.com/problems/teemo-attacking/
