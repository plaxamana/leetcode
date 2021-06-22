/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/**
 * Pseudocode:
 * while the queue is not empty
 *    set bookmark
 *    while bookmark > 0
 *      pull node from queue
 *      save "value" into level array
 *      add children to queue
 */

// Time: O(n)
// Space: O(n+k) or O(k) => O(n) space

var levelOrder = function (root) {
  let queue = [];
  let list = [];
  let currentNode = root;

  if (!currentNode) return [];
  queue.push(currentNode);

  while (queue.length) {
    let queueSize = queue.length;
    let currentLevel = [];
    while (queueSize--) {
      currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    list.push(currentLevel);
  }
  return list;
};
