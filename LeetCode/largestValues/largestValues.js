/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function(root) {
  const result = []

  const inner = (node, level) => {
    if (!node) return
    if (result[level] === undefined) result[level] = node.val
    result[level] = Math.max(result[level], node.val)
    inner(node.left, level + 1)
    inner(node.right, level + 1)
  }

  inner(root, 0)
  return result
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const makeTree = arr => {
  const queue = []
  let root = new TreeNode(arr.shift())
  queue.push(root)
  while (arr.length) {
    const node = queue.shift()
    let val = arr.shift()
    if (val !== null) {
      node.left = new TreeNode(val)
      queue.push(node.left)
    }
    val = arr.shift()
    if (val !== null && val !== undefined) {
      node.right = new TreeNode(val)
      queue.push(node.right)
    }
  }

  return root
}

console.log(largestValues(makeTree([1,3,2,5,3,null,9])))
console.log(largestValues(makeTree([1,1])))
console.log(largestValues(makeTree([0,-1])))
console.log(largestValues(makeTree([5,14,null,1])))
console.log(largestValues(makeTree([1,null,2])))

