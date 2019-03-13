/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minCameraCover = function(root) {
  if (!root) return 0

  const dfs = node => {
    let res = 0
    const dist = []

    if (!node.left && !node.right) {
      return { res: 0, cameraDist: 0 }
    }

    if (node.left) {
      const { res: leftRes, cameraDist: leftCameraDist } = dfs(node.left)
      res += leftRes
      dist.push(leftCameraDist)
    }

    if (node.right) {
      const { res: rightRes, cameraDist: rightCameraDist } = dfs(node.right)
      res += rightRes
      dist.push(rightCameraDist)
    }

    let cameraDist
    if (dist.includes(0)) { // putting a camera on the node
      res += 1
      cameraDist = 1
    } else {
      cameraDist = Math.min(...dist) + 1
      if (cameraDist === 3) cameraDist = 0
    }

    return { res, cameraDist }
  }

  let { res, cameraDist } = dfs(root)
  if (cameraDist === 0) res += 1

  return res
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

console.log(minCameraCover(makeTree([0])))
console.log(minCameraCover(makeTree([0,0,null,0,0])))
console.log(minCameraCover(makeTree([0,0,null,0,null,0,null,null,0])))
console.log(minCameraCover(makeTree([0,0,null,0,null,0,null,null,0])))
console.log(minCameraCover(makeTree([0,null,0,null,0,null,0])))

// https://leetcode.com/problems/graph-valid-tree/
// https://leetcode.com/problems/is-subsequence/
// https://leetcode.com/problems/arithmetic-slices-ii-subsequence/
