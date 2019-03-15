
const FreqStack = function() {
  this.maxFreq = {}
  this.stackList = []
}

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  if (x === undefined) return

  this.maxFreq[x] || (this.maxFreq[x] = 0)
  this.maxFreq[x] += 1

  const stack = this.maxFreq[x] - 1
  this.stackList[stack] || (this.stackList[stack] = [])
  this.stackList[stack].push(x)
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const stack = this.stackList.length - 1
  const maxFreqStack = this.stackList[stack]

  const val = maxFreqStack.pop()

  this.maxFreq[val] -= 1
  if (this.maxFreq[val] === 0) delete this.maxFreq[val]
  if (maxFreqStack.length === 0) this.stackList.splice(-1, 1)
 
  return val
}

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

// ["FreqStack","push","push","push","push","push","push","pop","push","pop","push","pop","push","pop","push","pop","pop","pop","pop","pop","pop"]
// [[],[4],[0],[9],[3],[4],[2],[],[6],[],[1],[],[1],[],[4],[],[],[],[],[],[]]

const fs = new FreqStack
fs.push(4)
fs.push(0)
fs.push(9)
fs.push(3)
fs.push(4)
fs.push(2)
console.log(fs.pop()) // 4
fs.push(6)
console.log(fs.pop()) // 6
fs.push(1)
console.log(fs.pop()) // 1
fs.push(1)
console.log(fs.pop()) // 1
fs.push(4)
console.log(fs.pop()) // 4
console.log(fs.pop()) // 2
console.log(fs.pop()) // 3
console.log(fs.pop()) // 9
console.log(fs.pop()) // 0
console.log(fs.pop()) // 4

// https://leetcode.com/problems/simplify-path/
// https://leetcode.com/problems/binary-tree-inorder-traversal/
// https://leetcode.com/problems/longest-word-in-dictionary/
