---
title: Leetcode 練習：2021-12-31 
date: "2021-12-31"
category: Codeing
tags:
 - js
 - leetcode
---

## Min Stack
[題號：155](https://leetcode.com/problems/min-stack/)

```js
var MinStack = function() {
  this.stack = []
  this.min = []
}

MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this.min[this.min.length] = this.min.length === 0 || val < this.min[this.min.length-1] ? val : this.min[this.min.length -1]
}

MinStack.prototype.pop = function() {
  this.stack.pop() 
  this.min.pop()
}

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1] 
}

MinStack.prototype.getMin = function() {
  return this.min[this.stack.length - 1]
}
```

## Two Sum II - Input Array Is Sorted
[題號：167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

```js
var twoSum = function(numbers, target) {
  let l = 0
  let r = numbers.length - 1
  let sum = numbers[l] + numbers[r]
  while (sum !== target) {
    if (sum > target) {
      r--
    } else {
      l++
    }
    sum = numbers[l] + numbers[r]
  }
  return [l + 1, r + 1]
}
```

## Maximum Difference Between Node and Ancestor
[題號：1026](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/)

```js
var maxAncestorDiff = function(root) {
  const dfs = (node, max, min) => {
        if(!node) return max - min 
        
        max = Math.max(max, node.val)
        min = Math.min(min, node.val)
        
        return Math.max(
            dfs(node.left, max, min),
            dfs(node.right, max, min)
        )
    }
    return dfs(root, root.val, root.val)
}
```