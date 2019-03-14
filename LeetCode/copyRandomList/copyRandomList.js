/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head) {
  // attach cloned node to existing node next pointer, and next existing node to cloned node next pointer
  // attach cloned random node to previous node random pointer next pointer (clone of random node)
  // detach cloned list from original list (and restore original list)

  let node = head
  while (node) {
    const next = node.next
    node.next = new Node(node.val)
    node.next.next = next
    node = next
  }
  const clone = head ? head.next : null

  node = head
  while (node) {
    if (node.random) {
      node.next.random = node.random.next
    }
    node = node.next.next
  }

  node = head
  while (node) {
    const c = node.next
    if (c) node.next = node.next.next
    node = c
  }

  return clone
}

/*
const copyRandomList = function(head) {
  if (!head) return head

  const visited = { [head.val]: new Node(head.val) }
  const clone = visited[head.val]
  const queue = [head]

  const dfs = () => {
    while (queue.length) {
      const curr = queue.shift()

      if (curr.next) {
        if (!visited[curr.next.val]) {
          queue.push(curr.next)
          visited[curr.next.val] = new Node(curr.next.val)
        }
        visited[curr.val].next = visited[curr.next.val]
      }
      if (curr.random) {
        if (!visited[curr.random.val]) {
          queue.push(curr.random)
          visited[curr.random.val] = new Node(curr.random.val)
        }
        visited[curr.val].random = visited[curr.random.val]
      }
    }
  }

  dfs()
  return clone
}
*/

function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}

const n0 = new Node(0)
const n1 = new Node(1)
n0.next = n1
const n2 = new Node(2)
n1.next = n2

console.log(copyRandomList(n0))

// https://leetcode.com/problems/number-of-distinct-islands/
// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// https://leetcode.com/problems/design-hashmap/
