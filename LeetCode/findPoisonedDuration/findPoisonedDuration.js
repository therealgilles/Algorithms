/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function(timeSeries, duration) {
  let time = timeSeries.length && duration
  let idx = 0

  while (idx < timeSeries.length - 1) {
    const curr = timeSeries[idx]
    const next = timeSeries[idx + 1]

    time += Math.min(next - curr, duration)
    idx += 1
  }

  return time
}

console.log(findPoisonedDuration([1,4], 2))
console.log(findPoisonedDuration([1,2], 2))

// https://leetcode.com/problems/merge-intervals/
// https://leetcode.com/problems/dota2-senate/
