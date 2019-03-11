/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const pruneTree = function(root) {
  if (!root) return root

  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)

  if ((root.val === 0) && !root.left && !root.right) return null
  return root
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

const BTtoArray = root => {
  const result = []
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    result.push((node === null) ? null : node.val)
    if (!node) continue
    if (node.left || node.right) {
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  return result
}

console.log(BTtoArray(pruneTree(makeTree([1,null,0,0,1]))))
console.log(BTtoArray(pruneTree(makeTree([1,0,1,0,0,0,1]))))
console.log(BTtoArray(pruneTree(makeTree([1,1,0,1,1,0,1,0]))))

