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
const sumNumbers = function(root) {
  let sum = 0
  if (!root) return sum

  const dfs = (node, prev) => {
    const val = prev * 10 + node.val
    if (!node.left && !node.right) sum += val

    node.left && dfs(node.left, val)
    node.right && dfs(node.right, val)
  }

  dfs(root, 0)
  return sum
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
const arr = [4,9,0,5,1]

console.log(sumNumbers(makeTree(arr)))

// https://leetcode.com/problems/path-sum/
// https://leetcode.com/problems/binary-tree-paths/
// https://leetcode.com/problems/path-sum-iii/
// https://leetcode.com/problems/path-sum-iv/
// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// https://leetcode.com/problems/smallest-string-starting-from-leaf/
