function Person(name) {
  this.name = name
  this.parents = []
}

//
// lowestCommonAncestor (in a family tree)
//
// This algorithm assumes we have a list of parents for each person.
//
// To find the lowest common ancestor, we can go up both persons lineages using a breadth-first order,
// storing all nodes as we go along. At each new parent node, we check whether the other person lineage
// contains that node. If so, we have found the common ancestor.
//
// A lineage is an flipped binary tree, assuming each person has at most two parents.
// The algorithm below supports any number of parents.
//
// Time Complexity: O(n)
// We visit every node at most once.
// Space Complexity: O(2xw+2xn) = O(2x2^h+2xn) = O(2^(h+1)+2xn) = O(2^h+n)
// where w is the largest width of the tree, h is the height of the tree, and n is the number of nodes.
//

const lowestCommonAncestor = (p1, p2) => {
  if (!p1 || !p2) return null
  if (p1 === p2) return p1.name

  const p1Queue = []
  const p2Queue = []

  const p1Visited = new Set()
  const p2Visited = new Set()

  p1Queue.push(p1)
  p2Queue.push(p2)

  p1Visited.add(p1)
  p2Visited.add(p2)

  while (p1Queue.length || p2Queue.length) {
    const node1 = p1Queue.pop()
    if (node1 && p2Visited.has(node1)) return node1.name

    const node2 = p2Queue.pop()
    if (node2 && p1Visited.has(node2)) return node2.name

    if (node1) {
      node1.parents
        .filter(parent => !p1Visited.has(parent))
        .forEach(parent => {
          p1Visited.add(parent)
          p1Queue.push(parent)
        })
    }

    if (node2) {
      node2.parents
        .filter(parent => !p2Visited.has(parent))
        .forEach(parent => {
          p2Visited.add(parent)
          p2Queue.push(parent)
        })
    }
  }

  return null
}

const debug = false

if (debug) {

  /*
   *            p1        p2
   *          p3  p4    p5  p6
   *        p7 p8  p9 p10    p11
   *      p12  p13  p14    p15 p16
   *
   */

  const p1 = new Person('p1')
  const p2 = new Person('p2')
  const p3 = new Person('p3')
  const p4 = new Person('p4')
  const p5 = new Person('p5')
  const p6 = new Person('p6')
  const p7 = new Person('p7')
  const p8 = new Person('p8')
  const p9 = new Person('p9')
  const p10 = new Person('p10')
  const p11 = new Person('p11')
  const p12 = new Person('p12')
  const p13 = new Person('p13')
  const p14 = new Person('p14')
  const p15 = new Person('p15')
  const p16 = new Person('p16')

  p1.parents = []
  p2.parents = []
  p3.parents = [p1]
  p4.parents = [p1]
  p5.parents = [p2]
  p6.parents = [p2]
  p7.parents = [p3]
  p8.parents = [p3]
  p9.parents = [p4]
  p10.parents = [p5]
  p11.parents = [p6]
  p12.parents = [p7]
  p13.parents = [p8]
  p14.parents = [p9, p10]
  p15.parents = [p11]
  p16.parents = [p11]

  console.log('p14/p1 =', lowestCommonAncestor(p14, p1)) // p1
  console.log('p14/p2 =', lowestCommonAncestor(p14, p2)) // p2
  console.log('p14/p13 =', lowestCommonAncestor(p14, p13)) // p1
  console.log('p14/p12 =', lowestCommonAncestor(p14, p12)) // p1
  console.log('p12/p15 =', lowestCommonAncestor(p12, p15)) // undefined
  console.log('p3/p6 =', lowestCommonAncestor(p3, p6)) // undefined
  console.log('p12/p8 =', lowestCommonAncestor(p12, p8)) // p3
  console.log('p3/p13 =', lowestCommonAncestor(p3, p13)) // p3
}

