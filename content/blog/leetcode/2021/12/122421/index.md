---
title: Leetcode 練習：2021-12-24 
date: "2021-12-24"
category: Codeing
tags:
 - js
 - leetcode
---

## Minimum Depth of Binary Tree
[題號：111](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

```js
var minDepth = function(root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1 // 拿掉也可以，但是速度會慢上不少。
  if (!root.left) return 1 + minDepth(root.right)
  if (!root.right) return 1 + minDepth(root.left)
  return Math.min(minDepth(root.right), minDepth(root.left)) + 1
}
```

## Path Sum
[題號：112](https://leetcode.com/problems/path-sum/submissions/)

```js
var hasPathSum = function(root, targetSum) {
  if (!root) return false
  
  const arr = []
  const recur = (node, sum) => {
    sum += node.val
    if (!node.left && !node.right) {
      arr.push(sum)
      return
    }
    if (node.left) recur(node.left, sum)
    if (node.right) recur(node.right, sum)
  }
  recur(root, 0)

  return arr.some(e=>e===targetSum)
}
```

## Merge Intervals
[題號：56](https://leetcode.com/problems/merge-intervals/)

```js
var merge = function(intervals) {
  if (intervals.length === 1) return intervals
  const sorted = intervals.sort((a,b)=>a[0]-b[0])
  const result = []
  let interval = sorted[0]
  
  for (var i = 1; i <= sorted.length; i++) {
    if (!sorted[i]) {
      result.push(interval)
      break
    }
    if (sorted[i][0] > interval[1]) {
      result.push(interval)
      interval = sorted[i]
    } else {
      interval[1] = Math.max(sorted[i][1], interval[1])
    }
  } 
  return result
}
```
