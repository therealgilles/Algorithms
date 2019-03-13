/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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

// https://leetcode.com/problems/merge-k-sorted-lists/
// https://leetcode.com/problems/sort-list/
// https://leetcode.com/problems/shortest-word-distance-ii/
