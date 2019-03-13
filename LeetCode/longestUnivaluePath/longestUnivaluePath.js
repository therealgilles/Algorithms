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
const longestUnivaluePath = function(root) {
  let max = 0
  if (!root) return max

  const dfs = (node, prev) => {
    let leftEdges = 0, rightEdges = 0
    if (node.left) leftEdges = dfs(node.left, node.val)
    if (node.right) rightEdges = dfs(node.right, node.val)

    if (node.val === prev) {
      edges = Math.max(leftEdges, rightEdges) + 1
    } else {
      edges = 0
    }

    max = Math.max(max, edges, leftEdges + rightEdges)
    return edges
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

const arr = [5,4,5,1,1,5]
// const arr = [1,4,5,4,4,5]

console.log(longestUnivaluePath(makeTree(arr)))

// https://leetcode.com/problems/path-sum/
// https://leetcode.com/problems/binary-tree-paths/
// https://leetcode.com/problems/path-sum-iii/
// https://leetcode.com/problems/path-sum-iv/
// https://leetcode.com/problems/binary-tree-maximum-path-sum/
// https://leetcode.com/problems/count-univalue-subtrees/
