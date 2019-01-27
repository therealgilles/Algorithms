//
// preorderTraversal
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const preorderTraversal = (root, recursive = false) => {
  if (recursive) {
    // Recursive solution
    let left = []
    let right = []
    root && root.left && (left = preorderTraversal(root.left))
    root && root.right && (right = preorderTraversal(root.right))
    return (root ? [root.val] : []).concat(left).concat(right)
  }

  // Iterative solution
  const visited = []
  const toVisit = []
  toVisit.push(root)
  while (toVisit.length) {
    let node = toVisit.pop()
    if (node) {
      visited.push(node.val)
      toVisit.push(node.right)
      toVisit.push(node.left)
    } 
  }

  return visited
}

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

const debug = false

if (debug) {

  const root = new TreeNode(1)
  root.left  = new TreeNode(8)
  root.right = new TreeNode(2)
  root.left.left = new TreeNode(3)
  root.left.right = new TreeNode(5)
  root.right.left = new TreeNode(2)

  console.log(preorderTraversal(root)) // [ 1, 8, 3, 5, 2, 2 ]
  console.log(preorderTraversal(root, true)) // [ 1, 8, 3, 5, 2, 2 ]

}
