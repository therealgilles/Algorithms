/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function(root, k) {
  const s = new Set()

  const find = node => {
    if (!node) return false
    if (s.has(k - node.val)) return true
    s.add(node.val)
    return find(node.left) || find(node.right)
  }

  return find(root)
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

console.log(findTarget(makeTree([5,3,6,2,4,null,7]), 9))
console.log(findTarget(makeTree([1]), 2))
