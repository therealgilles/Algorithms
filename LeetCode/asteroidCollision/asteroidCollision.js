/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
  const result = []

  for (let i = 0; i < asteroids.length; i += 1) {
    const a = asteroids[i]

    if (a > 0) {
      result.push(a)
      continue
    }

    let repeat = true
    while (repeat) {
      repeat = false
      if (!result.length) {
        result.push(a)
        continue
      }

      const last = result[result.length - 1]
      if (last < 0) {
        result.push(a)
        continue
      }

      if (-a >= last) result.pop()
      if (-a > last) repeat = true
    }
  }

  return result
}

console.log(asteroidCollision([5, 10, -5]))
console.log(asteroidCollision([8, -8]))
console.log(asteroidCollision([10, 2, -5]))
console.log(asteroidCollision([-2, -1, 1, 2]))

// https://leetcode.com/problems/can-place-flowers/
