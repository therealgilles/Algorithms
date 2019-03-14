
const FreqStack = function() {
  this.firstNodes = {}
  this.stackList = []
}

const Node = function (val, stack) {
  this.val = val
  this.stack = stack
  this.prev = null
  if (!stack) this.last = null
}

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  if (x === undefined) return

  const addToStack = (stack, node) => {
    this.stackList[stack] || (this.stackList[stack] = [])

    // add to proper stack
    this.stackList[stack].push(node)

    // update firstNodes[x].last
    this.firstNodes[x].last = node
  }

  let stack, node
  if (!this.firstNodes[x]) {
    stack = 0
    node = new Node(x, stack)
    this.firstNodes[x] = node
  } else {
    const lastNode = this.firstNodes[x].last 
    stack = lastNode.stack + 1
    node = new Node(x, stack)
    node.prev = lastNode
  }

  addToStack(stack, node)
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const stack = this.stackList.length - 1
  const maxFreqStack = this.stackList[stack]

  // get highest freq entry
  const node = maxFreqStack.pop()

  // update last node
  if (node.prev) this.firstNodes[node.val].last = node.prev

  // delete first node if we are on the 1st stack
  if (stack === 0) delete this.firstNodes[node.val]

  // remove stack if empty
  if (maxFreqStack.length === 0) this.stackList.splice(-1, 1)
 
  return node.val
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
