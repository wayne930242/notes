---
title: Leetcode 練習：2021-12-10 
date: "2021"
category: Codeing
tags:
 - js
 - leetcode
---

## Implement strStr()
[題號：28](https://leetcode.com/problems/implement-strstr/)

```js
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
}
```

## Search Insert Position
[題號：35](https://leetcode.com/problems/search-insert-position/)

```js
var searchInsert = function (nums, target) {
  // 題目要求要在 O(log(n)) 以內搜尋完。所以在這裡使用 Binary Serch。
  let min = 0
  let max = nums.length - 1

  while (min <= max) {
    const current = Math.floor((min + max) / 2)

    if (nums[current] === target) return current
    if (nums[current] < target) {
      if (target <= nums[current + 1]) return current + 1
      min = current + 1
    } else {
      max = current - 1
    }
  }

  return min
}
```

## Range Sum of BST
[題號：938](https://leetcode.com/problems/range-sum-of-bst/)

```js
var rangeSumBST = function (root, low, high) {
  let result = 0
  const sumTree = (head) => {
    if (head === null) return
    result += low <= head.val && head.val <= high ? head.val : 0
    sumTree(head.left)
    sumTree(head.right)
  }
  sumTree(root)
  return result
}
```