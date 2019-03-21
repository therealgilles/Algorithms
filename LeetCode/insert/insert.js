/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
const insert = function(intervals, newInterval) {
  if (!intervals.length) return [newInterval]
  const result = []

  let ins = new Interval(newInterval.start, newInterval.end)
  let merge

  for (let i = 0; i < intervals.length; i += 1) {
    const itv = intervals[i]
    if (merge || (itv.end < newInterval.start)) {
      result.push(itv)
    } else {
      if (ins.end < itv.start) {
        result.push(ins)
        result.push(itv)
        merge = true
      } else {
        ins.start = Math.min(itv.start, ins.start)
        ins.end = Math.max(itv.end, ins.end)
      }
    }
  }

  if (!merge) result.push(ins)

  return result
}

function Interval(start, end) {
  this.start = start
  this.end = end
}

const makeInterval = arr => {
  return new Interval(arr[0], arr[1])
}

const makeIntervals = arr => {
  return arr.map(a => makeInterval(a))
}

const intervalsToArray = intervals => {
  return intervals.map(interval => [interval.start, interval.end])
}

console.log(intervalsToArray(insert(makeIntervals([[1,3],[6,9]]), makeInterval([2,5]))))
console.log(intervalsToArray(insert(makeIntervals([[1,2],[3,5],[6,7],[8,10],[12,16]]), makeInterval([4,8]))))

// https://leetcode.com/problems/range-module/
