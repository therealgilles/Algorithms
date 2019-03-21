/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * Initialize your data structure here.
 */
const SummaryRanges = function() {
  this.head = null

  const Interval = function (left, right) {
    this.start = left
    this.end = right
  }

  const Node = function (left, right) {
    this.val = new Interval(left, right)
    this.next = null
  }

  this.createNode = function (left, right) {
    return new Node(left, right)
  }

  this.getInterval = function (node) {
    return [node.val.start, node.val.end]
  }
}

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
  let added

  let node = this.head, prev
  while (node) {
    const [start, end] = this.getInterval(node)

    if (val < start - 1) { // val is before current interval
      break
    }

    if (start <= val && val <= end) { // val is inside existing interval
      added = true
      break
    }

    if (val === start - 1) { // val is right before start of interval
      node.val.start = val
      added = true
      break
    }

    if (val === end + 1) { // val is right after end of interval
      node.val.end = val
      if (node.next) {
        const [nStart, nEnd] = this.getInterval(node.next)
        if (nStart <= val + 1) {
          node.val.end = nEnd
          node.next = node.next.next
        }
      }
      added = true
      break
    }

    prev = node
    node = node.next
  }

  if (!added) {
    const newNode = this.createNode(val, val)
    if (!prev) {
      if (this.head) newNode.next = this.head
      this.head = newNode
    } else {
      if (prev.next) newNode.next = prev.next
      prev.next = newNode
    }
  }
}

/**
 * @return {Interval[]}
 */
SummaryRanges.prototype.getIntervals = function() {
  const intervals = []
 
  let node = this.head
  while (node) {
    intervals.push(node.val)
    node = node.next
  }

  return intervals
}

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = Object.create(SummaryRanges).createNew()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

const ranges = new SummaryRanges()
ranges.addNum(6)
console.log(ranges.getIntervals())
ranges.addNum(6)
console.log(ranges.getIntervals())
ranges.addNum(0)
console.log(ranges.getIntervals())
ranges.addNum(4)
console.log(ranges.getIntervals())
ranges.addNum(8)
console.log(ranges.getIntervals())
ranges.addNum(7)
console.log(ranges.getIntervals())
ranges.addNum(6)
console.log(ranges.getIntervals())
ranges.addNum(4)
console.log(ranges.getIntervals())
ranges.addNum(7)
console.log(ranges.getIntervals())
ranges.addNum(5)
console.log(ranges.getIntervals())

// https://leetcode.com/problems/summary-ranges/
// https://leetcode.com/problems/find-right-interval/
