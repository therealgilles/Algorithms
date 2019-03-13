/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function(root, sum) {
  let result = 0
  if (!root) return result

  const inner = (node, rem, res) => {
    const nRem = rem - node.val
    const nRes = res.concat(node.val)

    if (nRem === 0) result += 1

    node.left && inner(node.left, nRem, nRes)
    node.right && inner(node.right, nRem, nRes)
  }

  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    inner(node, sum, [])
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

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

// const arr = [10,5,-3,3,2,null,11,3,-2,null,1]
// const sum = 8
const arr = [1,null,2,null,3,null,4,null,5]
const sum = 3

console.log(pathSum(makeTree(arr), sum))

// https://leetcode.com/problems/path-sum-iv/
// https://leetcode.com/problems/longest-univalue-path/
