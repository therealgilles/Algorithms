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
  const result = []
  if (!root) return result

  const inner = (node, rem, res) => {
    const nRem = rem - node.val
    const nRes = res.concat(node.val)

    if (!node.left && !node.right && (nRem === 0)) {
      result.push(nRes)
    }

    node.left && inner(node.left, nRem, nRes)
    node.right && inner(node.right, nRem, nRes)
  }

  inner(root, sum, [])
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

const arr = [5,4,8,11,null,13,4,7,2,null,null,5,1]
const sum = 22

console.log(pathSum(makeTree(arr), sum))

// https://leetcode.com/problems/path-sum/
// https://leetcode.com/problems/binary-tree-paths/
// https://leetcode.com/problems/path-sum-iii/
// https://leetcode.com/problems/path-sum-iv/
