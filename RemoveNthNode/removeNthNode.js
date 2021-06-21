/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Time Complexity - O(n)
// Space Complexity - O(1)

var removeNthFromEnd1 = function (head, n) {
  let i = 0;
  let current = head;
  let pointer = head;

  while (i++ < n) {
    pointer = pointer.next;
  }

  if (!pointer) {
    return head.next;
  }

  while (pointer.next !== null) {
    pointer = pointer.next;
    current = current.next;
  }

  current.next = current.next.next;
  return head;
};

// Time Complexity - O(n)
// Space Complexity - O(n)

// const removeNthFromEnd2 = (head, n) => {
//   let list = [];
//   let current = head;
//   while (current) {
//     list.push(current);
//     current = current.next;
//   }

//   let length = list.length;
//   let nodeToRemove = length - n;
//   let nodeBeforeRemoval = length - n - 1;

//   if (nodeToRemove === 0) return head.next;

//   let node = list[nodeBeforeRemoval];
//   node.next = node.next.next;

//   return head;
// };
