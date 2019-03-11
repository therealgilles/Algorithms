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
const findMode = function(root) {
  if (!root) return []
    
  const modes = {}
  let max = 1
  let prev
  const inner = node => {
    node.left && inner(node.left)

    modes[node.val] || (modes[node.val] = 0)
    modes[node.val] += 1
    max = Math.max(max, modes[node.val])

    // cleanup if current value is different from previous
    if (prev && prev !== node.val) {
      Object.keys(modes).forEach(key => {
        if (modes[key] < max) delete modes[key]
      })
      prev = node.val
    }

    node.right && inner(node.right)
  }
  
  inner(root)
  Object.keys(modes).forEach(key => {
    if (modes[key] < max) delete modes[key] 
  })

  return Object.keys(modes)
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const tree = [6,2,8,0,4,7,9,null,null,2,6]
const queue = []
let root = new TreeNode(tree.shift())
queue.push(root)
while (tree.length) {
  const node = queue.shift()
  let val = tree.shift()
  if (val !== null) {
    node.left = new TreeNode(val)
    queue.push(node.left)
  }
  val = tree.shift()
  if (val !== null && val !== undefined) {
    node.right = new TreeNode(val)
    queue.push(node.right)
  }
}

// console.log(root)
console.log(findMode(root))
