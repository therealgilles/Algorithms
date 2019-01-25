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
const addTwoNumbers = (l1, l2) => {
  let carry = 0,
      lsum = null,
      tail = null,
      n1 = l1,
      n2 = l2;

  while (n1 || n2 || carry) {
    // calculate sum and carry
    let sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0) + carry;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    // advance list pointers
    n1 && (n1 = n1.next);
    n2 && (n2 = n2.next);

    // add value to sum list
    if (!lsum) {
      lsum = new ListNode(sum);
      tail = lsum;
    } else {
      tail.next = new ListNode(sum);
      tail = tail.next; 
    }
  }

  return lsum;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let lsum = addTwoNumbers(l1, l2);
while (lsum) {
  console.log(lsum.val);
  lsum = lsum.next;
  if (lsum) console.log('->');
}
