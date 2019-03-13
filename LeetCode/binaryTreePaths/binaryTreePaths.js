/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  let result = []
  if (!root) return result

  const dfs = (node, prev) => {
    const val = (prev ? prev + '->' : '') + node.val
    if (!node.left && !node.right) result.push(val)

    node.left && dfs(node.left, val)
    node.right && dfs(node.right, val)
  }

  dfs(root)
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

const arr = [1,2,3,null,5]

console.log(binaryTreePaths(makeTree(arr)))

// https://leetcode.com/problems/path-sum/
// https://leetcode.com/problems/binary-tree-paths/
// https://leetcode.com/problems/path-sum-iii/
// https://leetcode.com/problems/path-sum-iv/
// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// https://leetcode.com/problems/smallest-string-starting-from-leaf/
// https://leetcode.com/problems/clone-graph/
// https://leetcode.com/problems/sum-of-distances-in-tree/
// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
