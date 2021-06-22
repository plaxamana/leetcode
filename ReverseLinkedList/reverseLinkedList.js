/**
 * Pseudocode:
 * while there is a list
 *    save .next in temp variable
 *    set .next to prev
 *    set prev to current node
 *    advance current node
 * return prev
 */

const reverseListRecursive = (current, prev = null) => {
  if (!current) {
    return prev;
  }

  let next = current.next;
  current.next = prev;
  return reverseListIterative(next, current)
}

const reverseListIterative = (head) => {
  let current = head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev
};
