---
title: Leetcode 練習：2021-12-30
date: "2021-12-30"
category: Codeing
tags:
 - js
 - leetcode
---

## Binary Tree Preorder Traversal
[題號：141](https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/)

```js
var preorderTraversal = function(root) {
  if (!root) return []
  const stack = [root]
  const result = []
  while (stack.length !== 0) {
    const node = stack.pop()
    result.push(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  } 
  return result
}
```

## Binary Tree Postorder Traversal
[題號：145](https://leetcode.com/problems/binary-tree-postorder-traversal/)

```js
var postorderTraversal = function(root) {
  if (!root) return []
  const stack = [root]
  const result = []
  while (stack.length !== 0) {
    const node = stack.pop()
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
    result.unshift(node.val)
  } 
  return result
}
```

## Binary Tree Inorder Traversal
[題號：94](https://leetcode.com/problems/binary-tree-inorder-traversal/)

```js
var inorderTraversal = function(root) {
  if (!root) return []
  const stack = []
  const result = []
  let current = root
  while (stack.length !== 0 || current) {
    if (current) {
      stack.push(current)
      current = current.left
    } else {
      const node = stack.pop()
      result.push(node.val)
      current = node.right
    }
  } 
  return result
}
```

## Smallest Integer Divisible by K
[題號：1015](https://leetcode.com/problems/smallest-integer-divisible-by-k/)

```js
var smallestRepunitDivByK = function(k) {
  if(k % 2 === 0 && k % 5 === 0) return -1
  let temp = 0
  for(var i = 1; i <= k; i++){
    temp = (temp * 10 + 1) % k
    if(temp === 0) return i
  }
  return -1
}
```