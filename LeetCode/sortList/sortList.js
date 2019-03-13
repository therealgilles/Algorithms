/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function(head) {
  if (!head || !head.next) return head

  const mergeTwoLists = function(l1, l2) {
    const lres = new ListNode()
    let nres = lres

    let n1 = l1
    let n2 = l2
    while (n1 && n2) {
      if (n1.val <= n2.val) {
        nres.next = n1
        n1 = n1.next
      } else {
        nres.next = n2
        n2 = n2.next
      }
      nres = nres.next
    }

    nres.next = n1 || n2
    return lres.next
  }

  // split list in somewhat halves
  //   we use 1x and 2x pointers
  let p1 = head, p2 = head
  while (p2.next && p2.next.next) {
    p1 = p1.next
    p2 = p2.next.next
  }

  let l1 = head
  let l2 = p1.next
  p1.next = null // disconnect l1

  // sort each list separately
  l1 = sortList(l1)
  l2 = sortList(l2)

  return mergeTwoLists(l1, l2) // merge lists
}

function ListNode(val) {
  this.val = val
  this.next = null
}

const makeList = arr => {
  if (!arr && !arr.length) return null

  let p
  arr.reverse().forEach(v => {
    const n = new ListNode(v)
    if (p) {
      n.next = p
    }
    p = n
  })

  return p
}

const listToArray = l => {
  const res = []

  let n = l
  while (n) {
    res.push(n.val)
    n = n.next
  }

  return res
}


console.log(listToArray(makeList([4,2,1,3])))
console.log(listToArray(sortList(makeList([4,2,1,3]))))
console.log(listToArray(sortList(makeList([4,9,5,2,7,1,8,0,3]))))

// https://leetcode.com/problems/sort-colors/
// https://leetcode.com/problems/insertion-sort-list/
