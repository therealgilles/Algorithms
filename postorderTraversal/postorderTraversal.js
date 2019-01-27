//
// postorderTraversal
//

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

const postorderTraversal = (root, recursive = false) => {
  if (recursive) {
    // Recursive solution
    let left = []
    let right = []
    root && root.left && (left = postorderTraversal(root.left))
    root && root.right && (right = postorderTraversal(root.right))
    return left.concat(right).concat(root ? [root.val] : [])
  }

  // Iterative solution
  const visited = []
  const toVisit = []
  toVisit.push(root)
  while (toVisit.length) {
    let node = toVisit.pop()
    if (node) {
      visited.unshift(node.val)
      toVisit.push(node.left)
      toVisit.push(node.right)
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
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(7)

  console.log(postorderTraversal(root)) // [ 4, 5, 2, 6, 7, 3, 1 ]
  console.log(postorderTraversal(root, true)) // [ 4, 5, 2, 6, 7, 3, 1 ]

}
