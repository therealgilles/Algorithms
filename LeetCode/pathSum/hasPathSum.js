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
const hasPathSum = function(root, sum) {
  if (!root) return false

  if (!root.left && !root.right && (root.val === sum)) return true

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
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

const arr = [5,4,8,11,null,13,4,7,2,null,null,5,1]
const sum = 22

console.log(hasPathSum(makeTree(arr), sum))

// https://leetcode.com/problems/binary-tree-maximum-path-sum/
// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// https://leetcode.com/problems/path-sum-iii/
// https://leetcode.com/problems/path-sum-iv/
