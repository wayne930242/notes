---
title: Leetcode 練習：2021-12-29 
date: "2021-12-29"
category: Codeing
tags:
 - js
 - leetcode
---

## Single Number
[題號：136](https://leetcode.com/problems/single-number/)

```js
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0]
  let result = nums[0]
  for (var i = 1; i < nums.length; i++) {
    result ^=  nums[i] //重複的 1 會被抵消。
  }
  return result
}
```

## Linked List Cycle
[題號：141](https://leetcode.com/problems/linked-list-cycle/)

```js
var hasCycle = function(head) {
  if (!head || !head.next) return false
  let slow = fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}
```

```js
var hasCycle = function(head) {
  const set = new Set()
  while (head) {
    if (set.has(head)) return true
    set.add(head)
    head = head.next
  }
  return false
}
```

## Populating Next Right Pointers in Each Node
[題號：116](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)

```js
var connect = function(root) {
  const recur = (rt, pa, left) => {
    if(!rt) return
    if (left) rt.next = pa.right
    else if(!left && pa && pa.next) rt.next = pa.next.left
    recur(rt.left, rt, true)
    recur(rt.right, rt, false)
  }
  recur(root)
  return root
}
```
