/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
const smallestFromLeaf = function(root) {
  let result = ''
  if (!root) return result

  const dfs = (node, prev) => {
    const val = String.fromCharCode(97 + node.val) + prev
    if (!node.left && !node.right) result = (result === '' || (val < result)) ? val : result

    node.left && dfs(node.left, val)
    node.right && dfs(node.right, val)
  }

  dfs(root, '')
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

// const arr = [0,1,2,3,4,3,4]
// const arr = [25,1,3,1,3,0,2]
const arr = [2,2,1,null,1,0,null,0]

console.log(smallestFromLeaf(makeTree(arr)))

// https://leetcode.com/problems/path-sum/
// https://leetcode.com/problems/binary-tree-paths/
// https://leetcode.com/problems/path-sum-iii/
// https://leetcode.com/problems/path-sum-iv/
// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// https://leetcode.com/problems/smallest-string-starting-from-leaf/
