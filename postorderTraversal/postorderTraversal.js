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
var postorderTraversal = function(root) {
  if (0) {
    // Recursive solution
    let left = [];
    let right = [];
    root && root.left && (left = postorderTraversal(root.left));
    root && root.right && (right = postorderTraversal(root.right));
    return left.concat(right).concat(root ? [root.val] : []);
  }

  // Iterative solution
  const visited = [];
  const toVisit = [];
  toVisit.push(root);
  while (toVisit.length) {
    let node = toVisit.pop();
    if (node) {
      visited.unshift(node.val);
      toVisit.push(node.left);
      toVisit.push(node.right);
    } 
  }

  return visited;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(postorderTraversal(root));
