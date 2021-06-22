# \#102. Level Order Traversal

Algorithm learned/used: Breadth First Search

## Binary tree level order traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie. from left to right, level by level)

```
inputs
root <TreeNode 1>: binary tree

output
values [[1], [2,3]]: number[][]

edge cases
root = null: null input

assumptions
if root is null, return []
```

### Breadth First Search

You'll need a queue to store references to the specific order.