/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalTraversal = function(root) {
  if (!root) return []
  let result = {}

  const numSort = (a, b) => (a - b)
  
  const dfs = (node, { x, y }) => {
    result[x] || (result[x] = {})
    result[x][y] || (result[x][y] = [])
    result[x][y].push(node.val)
    result[x][y].sort(numSort)

    node.left && dfs(node.left, { x: x - 1, y: y + 1 })
    node.right && dfs(node.right, { x: x + 1, y: y + 1})
  }

  dfs(root, { x: 0, y: 0 })

  return Object.keys(result).sort(numSort).map(x => {
    const res = []
    Object.keys(result[x]).sort(numSort).forEach(y => result[x][y].forEach(v => res.push(v)))
    return res
  })
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

// const arr = [3,9,20,null,null,15,7]
// const arr = [1,2,3,4,5,6,7]
const arr = [0,5,1,9,null,2,null,null,null,null,3,4,8,6,null,null,null,7]

console.log(verticalTraversal(makeTree(arr)))

// https://leetcode.com/problems/path-sum/
// https://leetcode.com/problems/binary-tree-paths/
// https://leetcode.com/problems/path-sum-iii/
// https://leetcode.com/problems/path-sum-iv/
// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// https://leetcode.com/problems/smallest-string-starting-from-leaf/
// https://leetcode.com/problems/clone-graph/
// https://leetcode.com/problems/sum-of-distances-in-tree/
// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
// https://leetcode.com/problems/count-complete-tree-nodes/
// https://leetcode.com/problems/daily-temperatures/
// https://leetcode.com/problems/random-pick-with-blacklist/
