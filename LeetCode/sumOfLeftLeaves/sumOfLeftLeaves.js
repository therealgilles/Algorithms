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
const sumOfLeftLeaves = function(root) {
  let sum = 0
  if (!root) return sum
  
  const preOrder = (node, leafSide) => {
    if (leafSide === 'left' && node.left === null && node.right === null) sum += node.val
    node.left && preOrder(node.left, 'left')
    node.right && preOrder(node.right, 'right')
  }

  preOrder(root)
  return sum
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const arr = [3,9,20,null,null,15,7]

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

const root = makeTree(arr)
console.log(sumOfLeftLeaves(root))
