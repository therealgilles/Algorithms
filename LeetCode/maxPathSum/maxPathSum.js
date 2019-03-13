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
const maxPathSum = function(root, sum) {
  let max = Number.MIN_SAFE_INTEGER

  const dfs = node => {
    let leftSum = 0, rightSum = 0
    if (node.left) leftSum = dfs(node.left)
    if (node.right) rightSum = dfs(node.right)

    const sum = Math.max(node.val, node.val + leftSum, node.val + rightSum)
    max = Math.max(max, sum, node.val + leftSum + rightSum)

    return sum
  }

  dfs(root)
  return max
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

// const arr = [1,2,3]
const arr = [-10,9,20,null,null,15,7]

console.log(maxPathSum(makeTree(arr)))

// https://leetcode.com/problems/path-sum/
// https://leetcode.com/problems/binary-tree-paths/
// https://leetcode.com/problems/path-sum-iii/
// https://leetcode.com/problems/path-sum-iv/
// https://leetcode.com/problems/sum-root-to-leaf-numbers/
