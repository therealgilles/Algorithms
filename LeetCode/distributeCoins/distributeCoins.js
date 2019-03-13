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
const distributeCoins = function(root) {
  let moves = 0

  const dfs = node => {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    moves += Math.abs(left) + Math.abs(right)

    return node.val + left + right - 1
  }

  dfs(root)
  return moves
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

console.log(distributeCoins(makeTree([3,0,0])))
console.log(distributeCoins(makeTree([0.3,0])))
console.log(distributeCoins(makeTree([1,0,2])))
console.log(distributeCoins(makeTree([1,0,0,null,3])))
