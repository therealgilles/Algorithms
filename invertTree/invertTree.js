**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root) {
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    root.left && invertTree(root.left);
    root.right && invertTree(root.right);
  }

  return root;
};

// Next challenges: Closest Binary Search Tree Value, Diameter of Binary Tree, Encode N-ary Tree to Binary Tree
