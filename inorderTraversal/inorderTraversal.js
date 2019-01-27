//
// inorderTraversal
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

const inorderTraversal = (root, recursive = false) => {
  if (recursive) {
    // Recursive solution
    let left = []
    let right = []
    root && root.left && (left = inorderTraversal(root.left))
    root && root.right && (right = inorderTraversal(root.right))
    return left.concat(root ? [root.val] : []).concat(right)
  }

  // Iterative solution
  const visited = []
  const toVisit = []
  let curr = root
  while (toVisit.length || curr) {
    if (curr) {
      toVisit.push(curr)
      curr = curr.left
    } else {
      curr = toVisit.pop()
      visited.push(curr.val)
      curr = curr.right
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
  root.left  = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)

  console.log(inorderTraversal(root, true)) // [ 4, 2, 5, 1, 3 ]
  console.log(inorderTraversal(root)) // [ 4, 2, 5, 1, 3 ]

}
