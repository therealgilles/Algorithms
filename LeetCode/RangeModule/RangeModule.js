const RangeModule = function() {
  this._intervals = []

  const Interval = function(left, right) {
    this.start = left
    this.end = right
  }

  this._createInterval = function(left, right) {
    return new Interval(left, right)
  }
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
  const self = this

  const insert = function(newInterval) {
    if (!self._intervals.length) return [newInterval]
    const result = []

    let ins = self._createInterval(newInterval.start, newInterval.end)
    let merge

    for (let i = 0; i < self._intervals.length; i += 1) {
      const itv = self._intervals[i]
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

  this._intervals = insert(this._createInterval(left, right))
  return null
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
  for (let i = 0; i < this._intervals.length; i += 1) {
    const start = this._intervals[i].start
    const end = this._intervals[i].end
    if ((left >= start) && (right <= end)) return true
  }

  return false
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
  const result = []

  let merge
  for (let i = 0; i < this._intervals.length; i += 1) {
    if (merge) {
      result.push(this._intervals[i])
      continue
    }

    const start = this._intervals[i].start
    const end = this._intervals[i].end

    if (right <= start) {
      result.push(this._intervals[i])
      merge = true
    } else if (end <= left) {
      result.push(this._intervals[i])
    } else {
      // 4 situations:
      // 1) remove range is same as interval
      // 2) remove range overlaps with beginning of interval
      // 3) remove range is within interval
      // 4) remove range overlaps with ending of interval
      if (left <= start && right < end) { // #2
        result.push(this._createInterval(right, end))
        merge = true
      } else if (start < left && right < end) { // #3
        result.push(this._createInterval(start, left))
        result.push(this._createInterval(right, end))
        merge = true
      } else if (start < left && end <= right) { // #4
        result.push(this._createInterval(start, left))
      } else if (start === left && end === right) { // #1
        merge = true
      }
    }
  } 

  this._intervals = result
  return null
}

/** 
 * Your RangeModule object will be instantiated and called as such:
 * var obj = Object.create(RangeModule).createNew()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */

const range = new RangeModule()
range.addRange(10, 20)
console.log(range._intervals)
range.removeRange(14, 16)
console.log(range._intervals)
console.log(range.queryRange(10, 14))
console.log(range.queryRange(13, 15))
console.log(range.queryRange(16, 17))

// https://leetcode.com/problems/data-stream-as-disjoint-intervals/
