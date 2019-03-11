/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
  const leaves1 = []
  const leaves2 = []

  const preOrder = (root, leaves) => {
    if (root.left === null && root.right === null) leaves.push(root.val)
    root.left && preOrder(root.left, leaves)
    root.right && preOrder(root.right, leaves)
  }

  preOrder(root1, leaves1)
  preOrder(root2, leaves2)
  if (leaves1.length !== leaves2.length) return false

  for (let i = 0; i < leaves1.length; i += 1) {
    if (leaves1[i] !== leaves2[i]) return false
  }

  console.log(leaves1)

  return true
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const arr1 = [3,5,1,6,2,9,8,null,null,7,4]
const arr2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]

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

const root1 = makeTree(arr1)
const root2 = makeTree(arr2)

console.log(leafSimilar(root1, root2))
