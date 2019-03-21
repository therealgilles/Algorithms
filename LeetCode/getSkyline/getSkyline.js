/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = function(buildings) {
  // INPUT
  // sorted array of building: [l, r, h]
  // OUTPUT
  // skyline
  // array of coordinates: [x, y]

  const Interval = function (l, r, h) {
    this.l = l
    this.r = r
    this.h = h
  }

  // create sorted interval histogram
  let intervals = []

  const insert = building => {
    const [l, r, h] = building
    let newInterval = new Interval(l, r, h)

    if (!intervals) {
      intervals.push(newInterval)
      return
    }

    const result = []
    let merge

    for (let i = 0; i < intervals.length; i += 1) {
      let itv = intervals[i]
      if (merge || (itv.r < newInterval.l)) { // new interval before existing interval
        result.push(itv)
      } else {
        if (newInterval.r < itv.l) { // new interval after existing interval
          result.push(newInterval)
          result.push(itv)
          merge = true
        } else {
          if (itv.h === newInterval.h) { // same height
            newInterval.l = Math.min(itv.l, newInterval.l)
            newInterval.r = Math.max(itv.r, newInterval.r)
            continue
          }

          if (newInterval.l === itv.l && newInterval.r === itv.r) { // same sides
            newInterval.h = Math.max(itv.h, newInterval.h)
            continue
          }

          if (newInterval.l <= itv.l && itv.r <= newInterval.r) { // existing interval inside new interval
            [newInterval, itv] = [itv, newInterval]
          }

          if (itv.l <= newInterval.l && newInterval.r <= itv.r) { // new interval inside existing interval
            if (itv.h >= newInterval.h) {
              newInterval = itv
            } else {
              if (itv.l < newInterval.l) result.push(new Interval(itv.l, newInterval.l, itv.h))
              if (newInterval.r < itv.r) {
                result.push(newInterval)
                newInterval = new Interval(newInterval.r, itv.r, itv.h)
              }
            }
            continue
          }

          if (itv.l < newInterval.l) { // existing overlapping with front of new interval
            [newInterval, itv] = [itv, newInterval]
          }

          if (newInterval.l < itv.l) { // new interval overlapping with front of existing interval
            const [ln, rn, hn] = [newInterval.l, (newInterval.h > itv.h) ? newInterval.r : itv.l, newInterval.h]
            result.push(new Interval(ln, rn, hn))
            newInterval = new Interval(rn, itv.r, itv.h)
          }
        }
      }
    }

    if (!merge) result.push(newInterval)
    intervals = result
  }

  buildings.forEach(b => insert(b))
  // console.log(intervals)

  // get skyline coordinates from histogram
  const skyline = []
  let prevItv
  for (let i = 0; i < intervals.length; i += 1) {
    const itv = intervals[i]
    if (prevItv && prevItv.r < itv.l) skyline.push([prevItv.r, 0])
    skyline.push([itv.l, itv.h])
    prevItv = itv
  }
  prevItv && skyline.push([prevItv.r, 0])

  return skyline
}

const buildings = [ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ]

console.log(getSkyline([]))
console.log(getSkyline(buildings))

// https://leetcode.com/problems/falling-squares/
