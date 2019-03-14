/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function(node) {
  if (!node) return node

  const visited = { [node.val]: new Node(node.val, []) }
  const clone = visited[node.val]
  const queue = [node]

  const dfs = () => {
    while (queue.length) {
      const curr = queue.shift()

      curr.neighbors
        .forEach(nb => {
          if (!visited[nb.val]) {
            queue.push(nb)
            visited[nb.val] = new Node(nb.val, [])
          }
          visited[curr.val].neighbors.push(visited[nb.val])
        })
    }
  }

  dfs()
  return clone
}

/*
const cloneGraph = function(node) {
  const map = {}

  const traverse = n => {
    if (!n) return n

    if (!map[n.val]) {
      map[n.val] = new Node(n.val)
      map[n.val].neighbors = n.neighbors.map(traverse)
    }

    return map[n.val]
  }

  return traverse(node)
}
*/

// https://leetcode.com/problems/copy-list-with-random-pointer/
