/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = function(intervals) {
  const result = []

  let idx = 0
  while (idx < intervals.length) {
    let i = intervals[idx]
    if (!result.length) {
      result.push(i)
    } else {
      // check if the new interval overlaps with existing ones
      let n = 0
      let merge
      while (n < result.length) {
        const r = result[n]
        if ((r.end < i.start) || (i.end < r.start)) {
          n += 1
          continue
        }
        const start = Math.min(r.start, i.start)
        const end = Math.max(r.end, i.end)
        i.start = start
        i.end = end
        result.splice(n, 1)
      }

      result.push(i)
    }
    idx += 1
  }

  return result 
}

function Interval(start, end) {
  this.start = start
  this.end = end
}

const makeIntervals = arr => {
  return arr.map(([i,j]) => (new Interval(i, j)))
}

const intervalsToArray = intervals => {
  return intervals.map(interval => [interval.start, interval.end])
}

console.log(intervalsToArray(merge(makeIntervals([[1,3],[2,6],[8,10],[15,18]]))))
console.log(intervalsToArray(merge(makeIntervals([[1,4],[4,5]]))))
console.log(intervalsToArray(merge(makeIntervals([[1,4],[0,4]]))))
console.log(intervalsToArray(merge(makeIntervals([[2,3],[4,5],[6,7],[8,9],[1,10]]))))

// https://leetcode.com/problems/insert-interval/
// https://leetcode.com/problems/meeting-rooms/
// https://leetcode.com/problems/meeting-rooms-ii/
// https://leetcode.com/problems/add-bold-tag-in-string/
// https://leetcode.com/problems/range-module/
// https://leetcode.com/problems/employee-free-time/
// https://leetcode.com/problems/partition-labels/
// https://leetcode.com/problems/interval-list-intersections/
