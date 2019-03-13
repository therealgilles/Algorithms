/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
const sumOfDistancesInTree = function(N, edges) {
  const result = Array(N).fill(0)
  if (N <= 1) return result

  // gather edges in an object
  const edgesObj = {}
  edges.forEach(edge => {
    const p1 = edge[0]
    const p2 = edge[1]

    edgesObj[p1] || (edgesObj[p1] = {})
    edgesObj[p2] || (edgesObj[p2] = {})

    edgesObj[p1][p2] = true
    edgesObj[p2][p1] = true
  })

  const count = Array(N).fill(1)

  const dfs = (node = '0', parent) => {
    Object.keys(edgesObj[node]).forEach(child => {
      if (child !== parent) {
        dfs(child, node)
        count[node] += count[child]
        result[node] += result[child] + count[child]
      }
    })
  }

  const dfs2 = (node = '0', parent) => {
    Object.keys(edgesObj[node]).forEach(child => {
      if (child !== parent) {
        result[child] = result[node] - count[child] + N - count[child]
        dfs2(child, node)
      }
    })
  }

  dfs()
  dfs2()

  return result
}

console.log(sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]]))
console.log(sumOfDistancesInTree(1, []))
console.log(sumOfDistancesInTree(3, [[2,0],[1,0]]))

// https://leetcode.com/problems/distribute-coins-in-binary-tree/
