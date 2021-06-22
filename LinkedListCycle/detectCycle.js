/**
 * Pseudocode:
 * while we haven't hit the tail
 *    is node in set?  If so, its a cycle
 *    otherwise, add node to set
 * out of list? return false
 */

// Time Complexity = O(n)
// Space Complexity = O(n)

const hasCycle = (head) => {
  const nodes = new Set();
  let current = head;
  while (current) {
    if (nodes.has(current)) {
      return true;
    }
    nodes.add(current);
    current = current.next;
  }
  return false;
};

/**
 * Tortoise and hare method
 * while we haven't hit the tail
 *    advance "fast" by 2 nodes
 *    advance "slow" by 1 node
 *    if fast === slow, we have a cycle
 * hit the tail?  return false
 */

// Time Complexity - O(n)
// Space Complexity - O(1)

const hasCycle2 = head => {
  let fast = head;
  let slow = head;
  while (fast & fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }
  return false;
}